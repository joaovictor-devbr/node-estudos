# Dia 01 - Event Loop e Runtime Node.js

## Objetivo

Entender como o Node.js executa código síncrono e assíncrono utilizando o Event Loop.

---

## Código

```js
console.log("1 - Início");

setTimeout(() => {
  console.log("2 - setTimeout");
}, 0);

setImmediate(() => {
  console.log("3 - setImmediate");
});

process.nextTick(() => {
  console.log("4 - nextTick");
});

console.log("5 - Fim");
```

---

## Saída observada

```text
1 - Início
5 - Fim
4 - nextTick
2 - setTimeout
3 - setImmediate
```

> Observação: a ordem entre `setTimeout(..., 0)` e `setImmediate()` pode variar dependendo do contexto de execução.

---

## Entendendo a execução

### 1. Código síncrono

As instruções síncronas são executadas imediatamente pela Call Stack.

```js
console.log("1 - Início");
console.log("5 - Fim");
```

Por isso elas aparecem primeiro na saída.

---

### 2. setTimeout

```js
setTimeout(() => {
  console.log("2 - setTimeout");
}, 0);
```

Mesmo com tempo `0`, o callback não executa imediatamente.

Ele é enviado para a fila de Timers e será executado quando o Event Loop chegar à fase correspondente.

---

### 3. setImmediate

```js
setImmediate(() => {
  console.log("3 - setImmediate");
});
```

O callback é enviado para a fila da fase Check do Event Loop.

---

### 4. process.nextTick

```js
process.nextTick(() => {
  console.log("4 - nextTick");
});
```

O `process.nextTick()` possui prioridade especial.

Seu callback é executado antes que o Event Loop continue para as próximas fases.

Por isso ele aparece antes do `setTimeout()` e do `setImmediate()`.

---

## Fluxo simplificado

```text
Código Principal
│
├─ console.log("1 - Início")
│
├─ registra setTimeout
│
├─ registra setImmediate
│
├─ registra process.nextTick
│
└─ console.log("5 - Fim")

Saída:
1 - Início
5 - Fim

↓

Next Tick Queue

Saída:
4 - nextTick

↓

Event Loop

↓

Timers Phase

Saída:
2 - setTimeout

↓

Check Phase

Saída:
3 - setImmediate
```

---

## Diagrama do Event Loop

```text
                 ┌─────────────┐
                 │ Código JS   │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ Call Stack  │
                 └──────┬──────┘
                        │
      ┌─────────────────┼─────────────────┐
      ▼                                   ▼
┌─────────────┐                     ┌─────────────┐
│ setTimeout  │                     │ setImmediate│
└──────┬──────┘                     └──────┬──────┘
       │                                   │
       ▼                                   ▼
┌─────────────┐                     ┌─────────────┐
│Timers Queue │                     │ Check Queue │
└──────┬──────┘                     └──────┬──────┘
       └───────────────┬───────────────────┘
                       ▼
                ┌─────────────┐
                │ Event Loop  │
                └─────────────┘

Prioridade especial:
process.nextTick()
        ↓
Next Tick Queue
```

---

## O que aprendi

* O JavaScript executa código síncrono primeiro.
* O Node.js utiliza um Event Loop para coordenar tarefas assíncronas.
* `process.nextTick()` possui prioridade sobre as demais filas.
* `setTimeout()` é executado na fase Timers.
* `setImmediate()` é executado na fase Check.
* Entender o Event Loop é fundamental para desenvolver aplicações escaláveis com Node.js.

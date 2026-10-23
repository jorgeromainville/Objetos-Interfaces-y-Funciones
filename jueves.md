# Jueves — Métodos Funcionales y Colaboración

## Temas aplicados

Desestructuración · `map` · `filter` · `find` · `forEach` · Pull Requests

**Tiempo estimado:** 2 horas

---

## Entregables

### 1. Hito Git — Nueva rama desde `feature/interfaces-funciones`

```bash
git checkout feature/interfaces-funciones
git checkout -b feature/metodos-funcionales
```

---

### 2. Nuevas funciones de filtrado y modificación

Agrega estas tres funciones usando métodos funcionales del arreglo:

- `const markCompleted = (id: number) => { ... }` — usa `.find()` para localizar la tarea por su `id` y cambia su propiedad `completed` a `true`
- `const filterPending = () => { ... }` — usa `.filter()` para retornar solo las tareas con `completed: false`
- `const filterCompleted = () => { ... }` — usa `.filter()` para retornar solo las tareas con `completed: true`

---

### 3. Actualizar `listTasks` con los nuevos conceptos

Edita la función `listTasks` que construiste el miércoles para que, en lugar del ciclo `for`, aplique los siguientes tres conceptos:

#### Desestructuración

En lugar de acceder a cada propiedad con punto, extráelas directamente en el callback:

```ts
// antes (miércoles):
task.id, task.title, task.completed

// ahora:
const { id, title, completed } = task;
```

#### `.map()` para transformar

Usa `.map()` para convertir el arreglo de tareas en un nuevo arreglo de strings ya formateados listos para imprimir. Cada string debe mostrar el estado (`completed` o no), el `id` y el `title`.

#### `.forEach()` para imprimir

Usa `.forEach()` para recorrer el arreglo de strings resultante e imprimirlos en consola, uno por uno.

---

### 4. Actualizar el menú

Actualiza el menú para reflejar todos los cambios del día:

- Agrega una opción para `markCompleted` que solicite al usuario el `id` de la tarea
- Agrega una opción para ver solo las **tareas pendientes** (usa `filterPending` e imprímelas)
- Agrega una opción para ver solo las **tareas completadas** (usa `filterCompleted` e imprímelas)

---

## Hito Git — Pull Request

Haz commit de los cambios en `feature/metodos-funcionales`:

```bash
git add .
git commit -m "feat: métodos funcionales y resumen de tareas"
git push origin feature/metodos-funcionales
```

Luego entra a GitHub y abre un **Pull Request** de `feature/metodos-funcionales` hacia `main`:

1. Revisa el diff de tus propios cambios
2. Aprueba el PR
3. Ejecuta el *Merge*

Finalmente, sincroniza `main` en local:

```bash
git checkout main
git pull
```

> Este es el flujo de trabajo que usan los equipos de desarrollo reales: trabajar en ramas, revisar cambios antes de integrar y mantener `main` siempre en un estado funcional.

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let nombreSistema: string = "planeador";
let version: number = 2.5;
let nombreUsuario: string = "Roman";

console.log(
  "nombre del sistema: " + nombreSistema +
  " version " + version + 
  ", bienvenido! " + nombreUsuario
);


// ==========================================
// GESTOR DE TAREAS (Entregable Miércoles)
// ==========================================

// 1. Interface Task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// 2. Arreglo tipado de Task y contador para IDs únicos
let tareas: Task[] = [];
let contadorId: number = 1;

// 3. Arrow functions para cada acción

// Agregar tarea
const addTask = (title: string): void => {
  let nuevaTarea: Task = { id: contadorId, title: title, completed: false };
  tareas.push(nuevaTarea);
  contadorId++;
  console.log("Tarea agregada: " + title);
};

// Listar tareas
const listTasks = (): void => {
  if (tareas.length === 0) {
    console.log("No hay tareas registradas.");
  } else {
    console.log("Tus tareas:");
    for (let i = 0; i < tareas.length; i++) {
      let estado = "pending";
      if (tareas[i].completed === true) {
        estado = "completed";
      }
      console.log("[" + tareas[i].id + "] " + tareas[i].title + " - " + estado);
    }
  }
};

// Eliminar última tarea
const removeTask = (): void => {
  if (tareas.length > 0) {
    let tareaEliminada = tareas.pop();
    if (tareaEliminada) {
      console.log("Tarea eliminada: " + tareaEliminada.title);
    }
  } else {
    console.log("No hay tareas para eliminar.");
  }
};

// ==========================================
// 4. MENÚ INTERACTIVO
// ==========================================
let opcion: string = "";

while (opcion != "4") {
  console.log(""); 
  console.log("--- MENÚ GESTOR DE TAREAS ---");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Salir");

  opcion = await rl.question("Elige una opción: ");

  // Opción 1: Pedimos el título y llamamos a addTask
  if (opcion == "1") {
    let titulo = await rl.question("Ingresa el título de la tarea: ");
    addTask(titulo);
  }
  // Opción 2: Solo llamamos a removeTask
  else if (opcion == "2") {
    removeTask();
  }
  // Opción 3: Solo llamamos a listTasks
  else if (opcion == "3") {
    listTasks();
  }
  // Opción 4: Salir
  else if (opcion == "4") {
    console.log("¡Hasta luego!");
  }
  else {
    console.log("Opción no válida. Intenta de nuevo.");
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();






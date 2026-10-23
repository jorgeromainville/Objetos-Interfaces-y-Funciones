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

// Arreglo tipado de Task y contador para IDs únicos
let tareas: Task[] = [];
let contadorId: number = 1;

// Agregar tarea
const addTask = (title: string): void => {
  let nuevaTarea: Task = { id: contadorId, title: title, completed: false };
  tareas.push(nuevaTarea);
  contadorId++;
  console.log("Tarea agregada: " + title);
};

// Listar tareas (Desestructuración + .map + .forEach) que dificil esto la verdad sin IA no pudiera haber entendido
const listTasks = (): void => {
  if (tareas.length === 0) {
    console.log("No hay tareas registradas.");
  } else {
    console.log("Tus tareas:");
    const tareasFormateadas = tareas.map((task) => {
      const { id, title, completed } = task; 
      const estado = completed ? "completed" : "pending";
      return `[${id}] ${title} - ${estado}`;
    });

    tareasFormateadas.forEach((mensaje) => {
      console.log(mensaje);
    });
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

//tarea jueves
const markCompleted = (id: number) => {
  let localizador = tareas.find(task => task.id == id);
  if (localizador) {
    localizador.completed = true;
    console.log("Tarea completada: " + localizador.title);
  }else {
    console.log("No se encontro la tarea")
  }
}

const filterPending = () => {
  let pendingTasks = tareas.filter(task => task.completed === false);
  return pendingTasks;
}

const filterCompleted = () => {
  let completedTasks = tareas.filter(task => task.completed === true);
  return completedTasks;
};


// MENÚ INTERACTIVO
let opcion: string = "";

while (opcion != "7") {
  console.log(""); 
  console.log("--- MENÚ GESTOR DE TAREAS ---");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Completar tarea");
  console.log("5. Tareas pendientes");
  console.log("6. Tareas completadas");
  console.log("7. Salir");

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
    // Opción 4: Solo llamamos a listTasks
  else if (opcion == "4") {
    let id = await rl.question("ingresar el id de la tarea: ");
    markCompleted(Number(id));
  }
 // Opción 5: Solo llamamos a listTasks
else if (opcion == "5") {
  let pendientes = filterPending();
  if (pendientes.length === 0) {
    console.log("No hay tareas pendientes.");
  } else {
    pendientes.forEach(({ id, title }) => {
      console.log(`[${id}] ${title} - pending`);
    });
  }
}
// Opción 6: Solo llamamos a listTasks
else if (opcion == "6") {
  let completadas = filterCompleted();
  if (completadas.length === 0) {
    console.log("No hay tareas completadas.");
  } else {
    completadas.forEach(({ id, title }) => {
      console.log(`[${id}] ${title} - completed`);
    });
  }
}

  // Opción 7: Salir
  else if (opcion == "7") {
    console.log("¡Hasta luego!");
  }
  else {
    console.log("Opción no válida. Intenta de nuevo.");
  }
}
// ==========================================
// entregable Jueves
// ==========================================

// nuevas funciones estan arriba por que aca abajo tiraba error 
//tambien diculpe por lo del menu de comida ese dia fue mas ocupado que un dia de clase entonces estaba mas perdido

}



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();






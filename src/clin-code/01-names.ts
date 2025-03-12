(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, fileEvalue: false },
    { id: 2, fileEvalue: false },
    { id: 3, fileEvalue: true },
    { id: 4, fileEvalue: false },
    { id: 5, fileEvalue: false },
    { id: 7, fileEvalue: true },
  ];

  // Archivos marcados para borrar - files to delete
  const files = filesToEvaluate.map((file) => file.fileEvalue);

  // Malos nombres
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // TODO: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const differentTimeDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberFileToDirectory = 33;

  // primer nombre - first name
  const fistName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const daysOfLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassOfStudent = 6;
})();

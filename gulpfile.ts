import gulp from "gulp";
import { deleteSync } from "del"; // Importação correta para TypeScript
import run from "gulp-run";

// Task: Clean the `.next` folder
gulp.task("clean", async () => {
  deleteSync([".next"]); // Use o método `deleteSync` para excluir a pasta
});

// Task: Build the Next.js project
gulp.task("build", () => {
  return run("npm run build").exec();
});

// Task: Start the Next.js development server
gulp.task("dev", () => {
  return run("npm run dev").exec();
});

// Default task: Clean the `.next` folder and then build the project
gulp.task("default", gulp.series("clean", "build"));

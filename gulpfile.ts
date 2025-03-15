import gulp from "gulp";
import { exec } from "child_process";

// Task: Build the Next.js project
gulp.task("build", (done) => {
  exec("npm run build", () => done());
});

// Task: Start the development server
gulp.task("dev", (done) => {
  exec("npm run dev", () => done());
});

// Default task: Run the build task
gulp.task("default", gulp.series("build"));

import scss from "rollup-plugin-scss";
import { liveServer } from "rollup-plugin-live-server";

export default {
    input: "./demo/main.js",
    output: {
        file: "./demo/dist/main.min.js",
        format: "esm",
    },
    plugins: [
        scss({
            output: "./demo/dist/style.css",
            failOnError: true,
        }),
        liveServer({
            port: 8080,
            host: "0.0.0.0",
            root: "demo",
            file: "./demo/index.html",
            mount: [["/dist", "./demo/dist"]],
            open: true,
            wait: 500,
        }),
    ],
};

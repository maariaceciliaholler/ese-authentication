import express from "express";
import router from "../routes/routes";
import dotenv from "dotenv";

dotenv.config();

function runHttpServer() {
    const app = express();

    app.use(express.json());

    app.use("/api/user", router);
    app.use("/api", router);

    const PORT = process.env.AUTH_APP_PORT || 3000;
    app.listen(PORT, () => {
        console.log(`ExpressHttpServer app listening on port ${PORT}`);
    });
}

export default { runHttpServer };


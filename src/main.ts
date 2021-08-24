import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule)
        // enableCors() - get request from browser
        app.enableCors()
        const PORT = process.env.PORT || 5000
        await app.listen(PORT, () => {
            console.log("Port was started:" + PORT);
        })
    }
    catch (error) {
        console.log("Error", error);
        
    }
}
start()
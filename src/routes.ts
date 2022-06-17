import { Router } from "express";
import { createUserContoller } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserContoller.handle(request, response);
});

export { router };

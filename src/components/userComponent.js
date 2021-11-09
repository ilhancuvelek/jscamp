import {
  BaseLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component yüklendi");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "eren", "cüvelek", "elazığ");
let user2 = new User(1, "evren", "cüvelek", "elazığ");
userService.add(user1);
userService.add(user2);

console.log(userService.list());

console.log(userService.getById(1));

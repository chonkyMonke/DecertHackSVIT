// main.ts
import { App } from "./src/app";

const RPC_URL = "https://ithacanet.smartpy.io";
const ACCOUNT_TO_CHECK = "tz1PzDqVRCxzdtGJ63EbRib3HRPb74JJEbJh";

new App(RPC_URL).getBalance(ACCOUNT_TO_CHECK);

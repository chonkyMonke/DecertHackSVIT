// src/app.ts
import { TezosToolkit } from "@taquito/taquito";

export class App {
  private tezos: TezosToolkit;

  constructor(rpcUrl: string) {
    this.tezos = new TezosToolkit(rpcUrl);
  }

  public getBalance(address: string): void {
    this.tezos.rpc
      .getBalance(address)
      .then((balance) => console.log(balance))
      .catch((e) => console.log("Address not found"));
  }

  public async main() {}
}

import { Injectable } from '@angular/core';

export type LocalStorageKey = 'authToken';
const PREFIX = 'vapulus_';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  set(key: LocalStorageKey, value: string): void {
    const keyName = this.keyName(key);
    localStorage.setItem(keyName, JSON.stringify(value));
  }

  get(key: LocalStorageKey): string {
    const keyName = this.keyName(key);
    const item = localStorage.getItem(keyName);
    let result: any;

    try {
      result = JSON.parse(item || 'null');
    } catch (e) {
      console.error(
        `Could not parse the localStorage value for "${key}" (${item})`
      );
    }

    return result;
  }

  remove(key: LocalStorageKey): void {
    const keyName = this.keyName(key);
    localStorage.removeItem(keyName);
  }

  private keyName(key: LocalStorageKey): string {
    return PREFIX + key;
  }
}

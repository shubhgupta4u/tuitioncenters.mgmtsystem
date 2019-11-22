import { Injectable } from '@angular/core';
import { Configuration } from '../../models/config';
import { AES, enc } from "crypto-js";
// import * as CryptoJS from 'crypto-js';
declare var CryptoJS: any
@Injectable()
export class CryptoService {

  key = CryptoJS.enc.Utf8.parse('ilovemydaughterpihugupta');
  constructor(private config: Configuration) { }

  encrypt(plainText: string): string {
    // msgString is expected to be Utf8 encoded
    var iv = CryptoJS.lib.WordArray.random(16);
    var encrypted = CryptoJS.AES.encrypt(plainText, this.key, {
      iv: iv
    });
    return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
  }

  decrypt(cypherText: string): string {
    var ciphertext = CryptoJS.enc.Base64.parse(cypherText);

    // split IV and ciphertext
    var iv = ciphertext.clone();
    iv.sigBytes = 16;
    iv.clamp();
    ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
    ciphertext.sigBytes -= 16;

    // decryption
    var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, this.key, {
      iv: iv
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}

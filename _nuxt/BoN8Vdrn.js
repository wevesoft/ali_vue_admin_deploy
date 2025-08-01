import{r as t,s,g as i,G as r,i as n}from"./CBC8_xwp.js";var p="firebase",g="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t(p,g,"app");const c={apiKey:"AIzaSyDQwUOA909wogiDOMImczhGixIDpFl1_Uo",authDomain:"deallow.firebaseapp.com",projectId:"deallow",storageBucket:"deallow.firebasestorage.app",messagingSenderId:"132805111726",appId:"1:132805111726:web:50a84def53b229e369e23f",measurementId:"G-CGBXNZ9D1T"},d=n(c),a=i(d),o=new r,I=async()=>{const e=await s(a,o);return{token:await e.user.getIdToken(),user:e.user}},h=()=>signInWithRedirect(a,o);export{I as signInWithGoogle,h as signInWithGoogleRedirect};

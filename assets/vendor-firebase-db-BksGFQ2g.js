import{_ as ia,g as aa,a as oa,b as ua,r as Yn,S as ca}from"./vendor-firebase-core-Div3D1E4.js";import{L as Iu,I as ct,l as Ue,F as la,A as ha,j as $e,p as mr,t as da,d as Au,B as fa,R as ds,G as vu,m as Ru,M as Vu,H as Pu,J as bu,X as Su,K as Cu,N as Mr,W as Ln,O as xu,S as ai,C as ma}from"./vendor-misc-6FZmOMZM.js";/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Mt="12.18.0";function Nu(n){Mt=n}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */const ft=new Iu("@firebase/firestore");function At(){return ft.logLevel}function E(n,...e){if(ft.logLevel<=Ue.DEBUG){const t=e.map(fs);ft.debug(`Firestore (${Mt}): ${n}`,...t)}}function ze(n,...e){if(ft.logLevel<=Ue.ERROR){const t=e.map(fs);ft.error(`Firestore (${Mt}): ${n}`,...t)}}function Re(n,...e){if(ft.logLevel<=Ue.WARN){const t=e.map(fs);ft.warn(`Firestore (${Mt}): ${n}`,...t)}}function fs(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function R(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_a(n,r,t)}function _a(n,e,t){let r=`FIRESTORE (${Mt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ze(r),new Error(r)}function A(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||_a(e,s,r)}function S(n,e){return n}/**
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
 */function ku(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ms{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ku(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function Hr(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Fr(s)===Fr(i)?N(s,i):Fr(s)?1:-1}return N(n.length,e.length)}const Du=55296,Ou=57343;function Fr(n){const e=n.charCodeAt(0);return e>=Du&&e<=Ou}function Nt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class q{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Un(this.root,e,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Un(this.root,e,this.comparator,!0)}}class Un{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Z.RED,this.left=s??Z.EMPTY,this.right=i??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Z(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Z.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R(43730,{key:this.key,value:this.value});if(this.right.isRed())throw R(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw R(27949);return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw R(57766)}get value(){throw R(16141)}get color(){throw R(16727)}get left(){throw R(29726)}get right(){throw R(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class G{constructor(e){this.comparator=e,this.data=new q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oi(this.data.getIterator())}getIteratorFrom(e){return new oi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof G)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new G(this.comparator);return t.data=e,t}}class oi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends la{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Pe="__name__";class Ve{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&R(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ve.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ve?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ve.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return N(e.length,t.length)}static compareSegments(e,t){const r=Ve.isNumericId(e),s=Ve.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ve.extractNumericId(e).compare(Ve.extractNumericId(t)):Hr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ct.fromString(e.substring(4,e.length-2))}}class L extends Ve{construct(e,t,r){return new L(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new L(t)}static emptyPath(){return new L([])}}const Lu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let ye=class vt extends Ve{construct(e,t,r){return new vt(e,t,r)}static isValidIdentifier(e){return Lu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pe}static keyField(){return new vt([Pe])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(t)}static emptyPath(){return new vt([])}};/**
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
 */class Ae{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new Ae([])}unionWith(e){let t=new G(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ae(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Jn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uu(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function pa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(L.fromString(e))}static fromName(e){return new v(L.fromString(e).popFirst(5))}static empty(){return new v(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new L(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ga(n,e,t){if(!t)throw new w(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mu(n,e,t,r){if(e===!0&&r===!0)throw new w(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ui(n){if(!v.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ci(n){if(v.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vn(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R(12329,{type:typeof n})}function mt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_s(n);throw new w(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function j(n,e){const t={typeString:n};return e&&(t.value=e),t}function Rn(n,e){if(!vn(n))throw new w(p.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new w(p.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const li=-62135596800,hi=1e6;class M{static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*hi);return new M(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<li)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hi}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:M._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rn(e,M._jsonSchema))return new M(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-li;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}M._jsonSchemaVersion="firestore/timestamp/1.0",M._jsonSchema={type:j("string",M._jsonSchemaVersion),seconds:j("number"),nanoseconds:j("number")};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ya extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ya("Invalid base64 string: "+i):i}}(e);return new Q(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Q(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const Fu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(n){if(A(!!n,39018),typeof n=="string"){let e=0;const t=Fu.exec(n);if(A(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:B(n.seconds),nanos:B(n.nanos)}}function B(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ze(n){return typeof n=="string"?Q.fromBase64String(n):Q.fromUint8Array(n)}/**
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
 */const Ta="server_timestamp",Ea="__type__",wa="__previous_value__",Ia="__local_write_time__";function _r(n){return(n?.mapValue?.fields||{})[Ea]?.stringValue===Ta}function Vn(n){const e=n.mapValue.fields[wa];return _r(e)?Vn(e):e}function kt(n){const e=Je(n.mapValue.fields[Ia].timestampValue);return new M(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qu{constructor(e,t,r,s,i,a,o,u,c,l,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=d,this._customHeaders=f,this.grpcFlowControlWindow=g}}const Zn="(default)";class un{constructor(e,t){this.projectId=e,this.database=t||Zn}static empty(){return new un("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(e){return e instanceof un&&e.projectId===this.projectId&&e.database===this.database}}function Bu(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ps=-1;function pr(n){return n==null}function cn(n){return n===0&&1/n==-1/0}function $u(n){return typeof n=="number"&&Number.isInteger(n)&&!cn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function zu(n){return typeof n=="string"}/**
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
 */const Aa="__type__",ju="__max__",Mn={mapValue:{}},va="__vector__",ln="value",Dt={nullValue:"NULL_VALUE"},he={booleanValue:!0},J={booleanValue:!1};function W(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_r(n)?4:Gu(n)?9007199254740991:er(n)?10:11:R(28295,{value:n})}function we(n,e,t){if(n===e)return!0;const r=W(n);if(r!==W(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kt(n).isEqual(kt(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=Je(i.timestampValue),u=Je(a.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return Ze(i.bytesValue).isEqual(Ze(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return B(i.geoPointValue.latitude)===B(a.geoPointValue.latitude)&&B(i.geoPointValue.longitude)===B(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,o){if("integerValue"in i&&"integerValue"in a)return B(i.integerValue)===B(a.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in a)u=B(i.doubleValue),c=B(a.doubleValue);else{if(!o?.t)return!1;u=B(i.integerValue??i.doubleValue),c=B(a.integerValue??a.doubleValue)}return u===c?!!o?.i||cn(u)===cn(c):!!(o===void 0||o.o)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return Nt(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>we(s,i,t));case 10:case 11:return function(i,a,o){const u=i.mapValue.fields||{},c=a.mapValue.fields||{};if(Jn(u)!==Jn(c))return!1;for(const l in u)if(u.hasOwnProperty(l)&&(c[l]===void 0||!we(u[l],c[l],o)))return!1;return!0}(n,e,t);default:return R(52216,{left:n})}}function hn(n,e){return(n.values||[]).find(t=>we(t,e))!==void 0}function de(n,e){if(n===e)return 0;const t=W(n),r=W(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(i,a){const o=B(i.integerValue||i.doubleValue),u=B(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(n,e);case 3:return di(n.timestampValue,e.timestampValue);case 4:return di(kt(n),kt(e));case 5:return Hr(n.stringValue,e.stringValue);case 6:return function(i,a){const o=Ze(i),u=Ze(a);return o.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const o=i.split("/"),u=a.split("/");for(let c=0;c<o.length&&c<u.length;c++){const l=N(o[c],u[c]);if(l!==0)return l}return N(o.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const o=N(B(i.latitude),B(a.latitude));return o!==0?o:N(B(i.longitude),B(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fi(n.arrayValue,e.arrayValue);case 10:return function(i,a){const o=i.fields||{},u=a.fields||{},c=o[ln]?.arrayValue,l=u[ln]?.arrayValue,d=N(c?.values?.length||0,l?.values?.length||0);return d!==0?d:fi(c,l)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Mn.mapValue&&a===Mn.mapValue)return 0;if(i===Mn.mapValue)return 1;if(a===Mn.mapValue)return-1;const o=i.fields||{},u=Object.keys(o),c=a.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let d=0;d<u.length&&d<l.length;++d){const f=Hr(u[d],l[d]);if(f!==0)return f;const g=de(o[u[d]],c[l[d]]);if(g!==0)return g}return N(u.length,l.length)}(n.mapValue,e.mapValue);default:throw R(23264,{u:t})}}function di(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Je(n),r=Je(e),s=N(t.seconds,r.seconds);return s!==0?s:N(t.nanos,r.nanos)}function fi(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=de(t[s],r[s]);if(i!==void 0&&i!==0)return i}return N(t.length,r.length)}function Ot(n){return Xr(n)}function Xr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Je(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ze(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return v.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Xr(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Xr(t.fields[a])}`;return s+"}"}(n.mapValue):R(61005,{value:n})}function Gn(n){switch(W(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vn(n);return e?16+Gn(e):16;case 5:return 2*n.stringValue.length;case 6:return Ze(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Gn(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return gt(r.fields,(i,a)=>{s+=i.length+Gn(a)}),s}(n.mapValue);default:throw R(13486,{value:n})}}function be(n){return!!n&&"integerValue"in n}function ut(n){return!!n&&"doubleValue"in n}function et(n){return be(n)||ut(n)}function Lt(n){return!!n&&"arrayValue"in n}function pe(n){return!!n&&"nullValue"in n}function fe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lt(n){return!!n&&"mapValue"in n}function er(n){return(n?.mapValue?.fields||{})[Aa]?.stringValue===va}function Yr(n){return(n?.mapValue?.fields||{})[ln]?.arrayValue}function Zt(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return gt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zt(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zt(n.arrayValue.values[t]);return e}return{...n}}function Gu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ju}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!lt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zt(t)}setAll(e){let t=ye.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=Zt(a):s.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());lt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];lt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){gt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _e(Zt(this.value))}}function Ra(n){const e=[];return gt(n.fields,(t,r)=>{const s=new ye([t]);if(lt(r)){const i=Ra(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ae(e)}/**
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
 */function gr(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cn(e)?"-0":e}}function gs(n){return{integerValue:""+n}}function ys(n,e,t){return $u(e)?gs(e):gr(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class yr{constructor(){this._=void 0}}function Qu(n,e,t){return n instanceof dn?function(s,i){const a={fields:{[Ea]:{stringValue:Ta},[Ia]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_r(i)&&(i=Vn(i)),i&&(a.fields[wa]=i),{mapValue:a}}(t,e):n instanceof fn?Pa(n,e):n instanceof mn?ba(n,e):n instanceof _n?function(s,i){const a=Va(s,i),o=rr(a)+rr(s.l);return be(a)&&be(s.l)?gs(o):gr(s.serializer,o)}(n,e):n instanceof tr?function(s,i){return mi(s,i,Math.min)}(n,e):n instanceof nr?function(s,i){return mi(s,i,Math.max)}(n,e):void 0}function Wu(n,e,t){return n instanceof fn?Pa(n,e):n instanceof mn?ba(n,e):t}function Va(n,e){return n instanceof _n?et(e)?e:{integerValue:0}:null}class dn extends yr{}class fn extends yr{constructor(e){super(),this.elements=e}}function Pa(n,e){const t=Sa(e);for(const r of n.elements)t.some(s=>we(s,r))||t.push(r);return{arrayValue:{values:t}}}class mn extends yr{constructor(e){super(),this.elements=e}}function ba(n,e){let t=Sa(e);for(const r of n.elements)t=t.filter(s=>!we(s,r));return{arrayValue:{values:t}}}class Ts extends yr{constructor(e,t){super(),this.serializer=e,this.l=t}}class _n extends Ts{}class tr extends Ts{}class nr extends Ts{}function mi(n,e,t){if(!et(e))return n.l;const r=t(rr(e),rr(n.l));return be(e)&&be(n.l)?gs(r):gr(n.serializer,r)}function rr(n){return B(n.integerValue||n.doubleValue)}function Sa(n){return Lt(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ku{constructor(e,t){this.field=e,this.transform=t}}function Hu(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof fn&&s instanceof fn||r instanceof mn&&s instanceof mn?Nt(r.elements,s.elements,we):r instanceof _n&&s instanceof _n||r instanceof tr&&s instanceof tr||r instanceof nr&&s instanceof nr?we(r.l,s.l):r instanceof dn&&s instanceof dn}(n.transform,e.transform)}class Xu{constructor(e,t){this.version=e,this.transformResults=t}}class ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Tr{}function Ca(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Es(n.key,ve.none()):new Pn(n.key,n.data,ve.none());{const t=n.data,r=_e.empty();let s=new G(ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new yt(n.key,r,new Ae(s.toArray()),ve.none())}}function Yu(n,e,t){n instanceof Pn?function(s,i,a){const o=s.value.clone(),u=pi(s.fieldTransforms,i,a.transformResults);o.setAll(u),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(n,e,t):n instanceof yt?function(s,i,a){if(!Qn(s.precondition,i))return void i.convertToUnknownDocument(a.version);const o=pi(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(xa(s)),u.setAll(o),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function en(n,e,t,r){return n instanceof Pn?function(i,a,o,u){if(!Qn(i.precondition,a))return o;const c=i.value.clone(),l=gi(i.fieldTransforms,u,a);return c.setAll(l),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof yt?function(i,a,o,u){if(!Qn(i.precondition,a))return o;const c=gi(i.fieldTransforms,u,a),l=a.data;return l.setAll(xa(i)),l.setAll(c),a.convertToFoundDocument(a.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(n,e,t,r):function(i,a,o){return Qn(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(n,e,t)}function Ju(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Va(r.transform,s||null);i!=null&&(t===null&&(t=_e.empty()),t.set(r.field,i))}return t||null}function _i(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Nt(r,s,(i,a)=>Hu(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pn extends Tr{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yt extends Tr{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xa(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function pi(n,e,t){const r=new Map;A(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,o=e.data.field(i.field);r.set(i.field,Wu(a,o,t[s]))}return r}function gi(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Qu(i,a,e))}return r}class Es extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zu extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class sr{constructor(e,t){this.position=e,this.inclusive=t}}function yi(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=v.comparator(v.fromName(a.referenceValue),t.key):r=de(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ti(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!we(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Na{}class K extends Na{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tc(e,t,r):t==="array-contains"?new sc(e,r):t==="in"?new ic(e,r):t==="not-in"?new ac(e,r):t==="array-contains-any"?new oc(e,r):new K(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nc(e,r):new rc(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(de(t,this.value)):t!==null&&W(this.value)===W(t)&&this.matchesComparison(de(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ke extends Na{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new ke(e,t)}matches(e){return ka(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function ka(n){return n.op==="and"}function Da(n){return ec(n)&&ka(n)}function ec(n){for(const e of n.filters)if(e instanceof ke)return!1;return!0}function Jr(n){if(n instanceof K)return n.field.canonicalString()+n.op.toString()+Ot(n.value);if(Da(n))return n.filters.map(e=>Jr(e)).join(",");{const e=n.filters.map(t=>Jr(t)).join(",");return`${n.op}(${e})`}}function Oa(n,e){return n instanceof K?function(r,s){return s instanceof K&&r.op===s.op&&r.field.isEqual(s.field)&&we(r.value,s.value)}(n,e):n instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,o)=>i&&Oa(a,s.filters[o]),!0):!1}(n,e):void R(19439)}function La(n){return n instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${Ot(t.value)}`}(n):n instanceof ke?function(t){return t.op.toString()+" {"+t.getFilters().map(La).join(" ,")+"}"}(n):"Filter"}class tc extends K{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class nc extends K{constructor(e,t){super(e,"in",t),this.keys=Ua("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rc extends K{constructor(e,t){super(e,"not-in",t),this.keys=Ua("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ua(n,e){return(e.arrayValue?.values||[]).map(t=>v.fromName(t.referenceValue))}class sc extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lt(t)&&hn(t.arrayValue,this.value)}}class ic extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hn(this.value.arrayValue,t)}}class ac extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hn(this.value.arrayValue,t)}}class oc extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>hn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function uc(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class b{static fromTimestamp(e){return new b(e)}static min(){return new b(new M(0,0))}static max(){return new b(new M(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class re{constructor(e,t,r,s,i,a,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new re(e,0,b.min(),b.min(),b.min(),_e.empty(),0)}static newFoundDocument(e,t,r,s){return new re(e,1,t,b.min(),r,s,0)}static newNoDocument(e,t){return new re(e,2,t,b.min(),b.min(),_e.empty(),0)}static newUnknownDocument(e,t){return new re(e,3,t,b.min(),b.min(),_e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const pn=-1;function cc(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=b.fromTimestamp(r===1e9?new M(t+1,0):new M(t,r));return new tt(s,v.empty(),e)}function lc(n){return new tt(n.readTime,n.key,pn)}class tt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tt(b.min(),v.empty(),pn)}static max(){return new tt(b.max(),v.empty(),pn)}}function hc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class dc{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.R=null}}function Ei(n,e=null,t=[],r=[],s=null,i=null,a=null){return new dc(n,e,t,r,s,i,a)}function Ma(n){const e=S(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Jr(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ot(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ot(r)).join(",")),e.R=t}return e.R}function Fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uc(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Oa(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ti(n.startAt,e.startAt)&&Ti(n.endAt,e.endAt)}function ot(n){return!!n.isCorePipeline}function qa(n){return!!n.path&&v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Er{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function fc(n,e,t,r,s,i,a,o){return new Er(n,e,t,r,s,i,a,o)}function Ba(n){return new Er(n)}function wi(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mc(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _c(n){return n.collectionGroup!==null}function tn(n){const e=S(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new G(ye.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new ir(i,r))}),t.has(ye.keyField().canonicalString())||e.I.push(new ir(ye.keyField(),r))}return e.I}function Ce(n){const e=S(n);return e.A||(e.A=pc(e,tn(n))),e.A}function pc(n,e){if(n.limitType==="F")return Ei(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ir(s.field,i)});const t=n.endAt?new sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new sr(n.startAt.position,n.startAt.inclusive):null;return Ei(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Zr(n,e,t){return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gc(n,e){return Fa(Ce(n),Ce(e))&&n.limitType===e.limitType}function nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>La(s)).join(", ")}]`),pr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ot(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ot(s)).join(",")),`Target(${r})`}(Ce(n))}; limitType=${n.limitType})`}function wr(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):v.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of tn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,o,u){const c=yi(a,o,u);return a.inclusive?c<=0:c<0}(r.startAt,tn(r),s)||r.endAt&&!function(a,o,u){const c=yi(a,o,u);return a.inclusive?c>=0:c>0}(r.endAt,tn(r),s))}(n,e)}function ws(n){return(e,t)=>{let r=!1;for(const s of tn(n)){const i=yc(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yc(n,e,t){const r=n.field.isKeyField()?v.comparator(e.key,t.key):function(i,a,o){const u=a.data.field(i),c=o.data.field(i);return u!==null&&c!==null?de(u,c):R(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tc{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var z,k;function Ec(n){switch(n){case p.OK:return R(64938);case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0;default:return R(15467,{code:n})}}function $a(n){if(n===void 0)return ze("GRPC error has no .code"),p.UNKNOWN;switch(n){case z.OK:return p.OK;case z.CANCELLED:return p.CANCELLED;case z.UNKNOWN:return p.UNKNOWN;case z.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case z.INTERNAL:return p.INTERNAL;case z.UNAVAILABLE:return p.UNAVAILABLE;case z.UNAUTHENTICATED:return p.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case z.NOT_FOUND:return p.NOT_FOUND;case z.ALREADY_EXISTS:return p.ALREADY_EXISTS;case z.PERMISSION_DENIED:return p.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case z.ABORTED:return p.ABORTED;case z.OUT_OF_RANGE:return p.OUT_OF_RANGE;case z.UNIMPLEMENTED:return p.UNIMPLEMENTED;case z.DATA_LOSS:return p.DATA_LOSS;default:return R(39323,{code:n})}}(k=z||(z={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wc=new q(v.comparator);function ce(){return wc}const za=new q(v.comparator);function Rt(...n){let e=za;for(const t of n)e=e.insert(t.key,t);return e}function ja(n){let e=za;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Qe(){return rn()}function Ga(){return rn()}function rn(){return new Tt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ic=new q(v.comparator),Ac=new G(v.comparator);function x(...n){let e=Ac;for(const t of n)e=e.add(t);return e}const vc=new G(N);function Rc(){return vc}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Vc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Pc=new ct([4294967295,4294967295],0);function Ii(n){const e=Vc().encode(n),t=new Vu;return t.update(e),new Uint8Array(t.digest())}function Ai(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ct([t,r],0),new ct([s,i],0)]}class Is{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Yt(`Invalid padding: ${t}`);if(r<0)throw new Yt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Yt(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=ct.fromNumber(this.m)}S(e,t,r){let s=e.add(t.multiply(ct.fromNumber(r)));return s.compare(Pc)===1&&(s=new ct([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Ii(e),[r,s]=Ai(t);for(let i=0;i<this.hashCount;i++){const a=this.S(r,s,i);if(!this.v(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Is(i,s,t);return r.forEach(o=>a.insert(o)),a}insert(e){if(this.m===0)return;const t=Ii(e),[r,s]=Ai(t);for(let i=0;i<this.hashCount;i++){const a=this.S(r,s,i);this.D(a)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Yt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bn{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Sn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bn(b.min(),s,new q(N),ce(),ce(),x())}}class Sn{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Sn(r,t,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wn{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class Qa{constructor(e,t){this.targetId=e,this.O=t}}class Wa{constructor(e,t,r=Q.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class vi{constructor(e){this.targetId=e,this.M=0,this.N=Ri(),this.L=Q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=x(),t=x(),r=x();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:R(38017,{changeType:i})}}),new Sn(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=Ri()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,A(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Kt="WatchChangeAggregator";class bc{constructor(e){this.Z=e,this.X=new Map,this.ee=ce(),this.te=Fn(),this.ne=ce(),this.re=Fn(),this.ie=new q(N)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:R(56790,{state:e.state})}else E(Kt,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){return ot(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:qa(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const a=new v(ot(i)?L.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,a,re.newNoDocument(a,b.min()))}else A(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Te(t);if(a!==r){const o=this.Pe(e),u=o?this.Re(o,e,a):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,o;try{a=Ze(r).toUint8Array()}catch(u){if(u instanceof ya)return Re("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{o=new Is(a,s,i)}catch(u){return Re(u instanceof Yt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return o.m===0?null:o}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Z.Ae(),o=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,a)=>{const o=this.he(a);if(o){if(i.current&&this.le(o.target)){const u=ot(o.target)?L.fromString(o.target.getPipelineDocuments()[0]):o.target.path,c=new v(u);this.fe(c).has(a)||this.me(a,c)||this.oe(a,c,re.newNoDocument(c,e))}i.q&&(t.set(a,i.K()),i.W())}});let r=x();this.re.forEach((i,a)=>{let o=!0;a.forEachWhile(u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(r=r.add(i))}),this.ee.forEach((i,a)=>a.setReadTime(e)),this.ne.forEach((i,a)=>a.setReadTime(e));const s=new bn(e,t,this.ie,this.ee,this.ne,r);return this.ee=ce(),this.te=Fn(),this.ne=ce(),this.re=Fn(),this.ie=new q(N),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void E(Kt,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),ot(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(ot(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):E(Kt,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(E(Kt,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new vi(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new G(N),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new G(N),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||E(Kt,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new vi(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Fn(){return new q(v.comparator)}function Ri(){return new q(v.comparator)}const Sc={asc:"ASCENDING",desc:"DESCENDING"},Cc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xc={and:"AND",or:"OR"};class Nc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function es(n,e){return n.useProto3Json||pr(e)?e:{value:e}}function ar(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function As(n){const e=Je(n);return new M(e.seconds,e.nanos)}function Ka(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Kn(n,e){return ar(n,e.toTimestamp())}function xe(n){return A(!!n,49232),b.fromTimestamp(As(n))}function vs(n,e){return ts(n,e).canonicalString()}function ts(n,e){const t=function(s){return new L(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ha(n){const e=L.fromString(n);return A(eo(e),10190,{key:e.toString()}),e}function or(n,e){return vs(n.databaseId,e.path)}function qr(n,e){const t=Ha(e);if(t.get(1)!==n.databaseId.projectId)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Ya(t))}function Xa(n,e){return vs(n.databaseId,e)}function kc(n){const e=Ha(n);return e.length===4?L.emptyPath():Ya(e)}function ns(n){return new L(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ya(n){return A(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vi(n,e,t){return{name:or(n,e),fields:t.value.mapValue.fields}}function Dc(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(A(l===void 0||typeof l=="string",58123),Q.fromBase64String(l||"")):(A(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),Q.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const l=c.code===void 0?p.UNKNOWN:$a(c.code);return new w(l,c.message||"")}(a);t=new Wa(r,s,i,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qr(n,r.document.name),i=xe(r.document.updateTime),a=r.document.createTime?xe(r.document.createTime):b.min(),o=new _e({mapValue:{fields:r.document.fields}}),u=re.newFoundDocument(s,i,a,o),c=r.targetIds||[],l=r.removedTargetIds||[];t=new Wn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qr(n,r.document),i=r.readTime?xe(r.readTime):b.min(),a=re.newNoDocument(s,i),o=r.removedTargetIds||[];t=new Wn([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qr(n,r.document),i=r.removedTargetIds||[];t=new Wn([],i,s,null)}else{if(!("filter"in e))return R(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Tc(s,i),o=r.targetId;t=new Qa(o,a)}}return t}function Oc(n,e){let t;if(e instanceof Pn)t={update:Vi(n,e.key,e.value)};else if(e instanceof Es)t={delete:or(n,e.key)};else if(e instanceof yt)t={update:Vi(n,e.key,e.data),updateMask:Gc(e.fieldMask)};else{if(!(e instanceof Zu))return R(16599,{we:e.type});t={verify:or(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const o=a.transform;if(o instanceof dn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof mn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _n)return{fieldPath:a.field.canonicalString(),increment:o.l};if(o instanceof tr)return{fieldPath:a.field.canonicalString(),minimum:o.l};if(o instanceof nr)return{fieldPath:a.field.canonicalString(),maximum:o.l};throw R(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Kn(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R(27497)}(n,e.precondition)),t}function Lc(n,e){return n&&n.length>0?(A(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?xe(s.updateTime):xe(i);return a.isEqual(b.min())&&(a=xe(i)),new Xu(a,s.transformResults||[])}(t,e))):[]}function Uc(n,e){return{documents:[Xa(n,e.path)]}}function Mc(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Xa(n,s);const i=function(c){if(c.length!==0)return Za(ke.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:Vt(f.field),direction:$c(f.dir)}}(l))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=es(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{be:t,parent:s}}function Fc(n){let e=kc(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){A(r===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(d){const f=Ja(d);return f instanceof ke&&Da(f)?f.getFilters():[f]}(t.where));let a=[];t.orderBy&&(a=function(d){return d.map(f=>function(y){return new ir(Pt(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(t.orderBy));let o=null;t.limit&&(o=function(d){let f;return f=typeof d=="object"?d.value:d,pr(f)?null:f}(t.limit));let u=null;t.startAt&&(u=function(d){const f=!!d.before,g=d.values||[];return new sr(g,f)}(t.startAt));let c=null;return t.endAt&&(c=function(d){const f=!d.before,g=d.values||[];return new sr(g,f)}(t.endAt)),fc(e,s,a,i,o,"F",u,c)}function qc(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bc(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Ja(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pt(t.unaryFilter.field);return K.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pt(t.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pt(t.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Pt(t.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return R(61313);default:return R(60726)}}(n):n.fieldFilter!==void 0?function(t){return K.create(Pt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return R(58110);default:return R(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ke.create(t.compositeFilter.filters.map(r=>Ja(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R(1026)}}(t.compositeFilter.op))}(n):R(30097,{filter:n})}function $c(n){return Sc[n]}function zc(n){return Cc[n]}function jc(n){return xc[n]}function Vt(n){return{fieldPath:n.canonicalString()}}function Pt(n){return ye.fromServerFormat(n.fieldPath)}function Za(n){return n instanceof K?function(t){if(t.op==="=="){if(fe(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NAN"}};if(pe(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fe(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NOT_NAN"}};if(pe(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(t.field),op:zc(t.op),value:t.value}}}(n):n instanceof ke?function(t){const r=t.getFilters().map(s=>Za(s));return r.length===1?r[0]:{compositeFilter:{op:jc(t.op),filters:r}}}(n):R(54877,{filter:n})}function Gc(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function eo(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function to(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function gn(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function no(n){return{stringValue:n}}/**
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
 */function Ir(n){return new Nc(n,!0)}/**
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
 */class Ee{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ee(Q.fromBase64String(e))}catch(t){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ee(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ee._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rn(e,Ee._jsonSchema))return Ee.fromBase64String(e.bytes)}}Ee._jsonSchemaVersion="firestore/bytes/1.0",Ee._jsonSchema={type:j("string",Ee._jsonSchemaVersion),bytes:j("string")};/**
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
 */class Rs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Qc(){return new Rs(Pe)}/**
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
 */class Vs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ne{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ne._jsonSchemaVersion}}static fromJSON(e){if(Rn(e,Ne._jsonSchema))return new Ne(e.latitude,e.longitude)}}Ne._jsonSchemaVersion="firestore/geoPoint/1.0",Ne._jsonSchema={type:j("string",Ne._jsonSchemaVersion),latitude:j("number"),longitude:j("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ke{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ro{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class Kc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hc{constructor(e){this.ve=e,this.currentUser=ne.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){A(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new Ke;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Ke,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},o=u=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),a())};this.ve.onInit(u=>o(u)),setTimeout(()=>{if(!this.auth){const u=this.ve.getImmediate({optional:!0});u?o(u):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ke)}},0),a()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(A(typeof r.accessToken=="string",31837,{Fe:r}),new ro(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return A(e===null||typeof e=="string",2055,{Oe:e}),new ne(e)}}class Xc{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class Yc{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new Xc(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jc{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,ia(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){A(this.xe===void 0,3512);const r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.qe;return this.qe=i.token,E("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Pi(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(A(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Pi(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function so(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Zc{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const bi="ConnectivityMonitor";class Si{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){E(bi,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){E(bi,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let qn=null;function rs(){return qn===null?qn=function(){return 268435456+Math.round(2147483648*Math.random())}():qn++,"0x"+qn.toString(16)}/**
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
 */const Br="RestConnection",el={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tl{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===Zn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const a=rs(),o=this.nt(e,t.toUriEncodedString());E(Br,`Sending RPC '${e}' ${a}:`,o,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(o),l=mr(c);return this.it(e,o,u,r,l).then(d=>(E(Br,`Received RPC '${e}' ${a}: `,d),d),d=>{throw Re(Br,`RPC '${e}' ${a} failed with error: `,d,"url: ",o,"request:",r),d})}st(e,t,r,s,i,a){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=el[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nl{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const te="WebChannelConnection",Ht=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class St extends tl{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!St.gt){const e=Pu();Ht(e,bu.STAT_EVENT,t=>{t.stat===ai.PROXY?E(te,"STAT_EVENT: detected buffering proxy"):t.stat===ai.NOPROXY&&E(te,"STAT_EVENT: detected no buffering proxy")}),St.gt=!0}}it(e,t,r,s,i){const a=rs();return new Promise((o,u)=>{const c=new Su;c.setWithCredentials(!0),c.listenOnce(Cu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mr.NO_ERROR:const d=c.getResponseJson();E(te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(d)),o(d);break;case Mr.TIMEOUT:E(te,`RPC '${e}' ${a} timed out`),u(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const f=c.getStatus();if(E(te,`RPC '${e}' ${a} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g?.error;if(y&&y.status&&y.message){const V=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(D)>=0?D:p.UNKNOWN}(y.status);u(new w(V,y.message))}else u(new w(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new w(p.UNAVAILABLE,"Connection failed."));break;default:R(9055,{yt:e,streamId:a,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{E(te,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(s);E(te,`RPC '${e}' ${a} sending request:`,s),c.send(t,"POST",l,r,15)})}St(e,t,r){const s=rs(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(o.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(o.useFetchStreams=!0),this.rt(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const c=i.join("");E(te,`Creating RPC '${e}' stream ${s}: ${c}`,o);const l=a.createWebChannel(c,o);this.vt(l);let d=!1,f=!1;const g=new nl({_t:y=>{f?E(te,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(E(te,`Opening RPC '${e}' stream ${s} transport.`),l.open(),d=!0),E(te,`RPC '${e}' stream ${s} sending:`,y),l.send(y))},ot:()=>l.close()});return Ht(l,Ln.EventType.OPEN,()=>{f||(E(te,`RPC '${e}' stream ${s} transport opened.`),g.Rt())}),Ht(l,Ln.EventType.CLOSE,()=>{f||(f=!0,E(te,`RPC '${e}' stream ${s} transport closed`),g.At(),this.Dt(l))}),Ht(l,Ln.EventType.ERROR,y=>{f||(f=!0,Re(te,`RPC '${e}' stream ${s} transport errored. Name:`,y.name,"Message:",y.message),g.At(new w(p.UNAVAILABLE,"The operation could not be completed")))}),Ht(l,Ln.EventType.MESSAGE,y=>{if(!f){const V=y.data[0];A(!!V,16349);const I=V,C=I?.error||I[0]?.error;if(C){E(te,`RPC '${e}' stream ${s} received error:`,C);const D=C.status;let O=function(Ie){const Ge=z[Ie];if(Ge!==void 0)return $a(Ge)}(D),U=C.message;D==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&Re(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=p.INTERNAL,U="Unknown error status: "+D+" with message "+C.message),f=!0,g.At(new w(O,U)),l.close()}else E(te,`RPC '${e}' stream ${s} received:`,V),g.Vt(V)}}),St.ft(),setTimeout(()=>{g.It()},0),g}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return xu()}}/**
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
 */function rl(n){return new St(n)}St.gt=!1;class io{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ci="PersistentStream";class ao{constructor(e,t,r,s,i,a,o,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=u,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new io(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qt===t&&this.an(r,s)},r=>{e(()=>{const s=new w(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return E(Ci,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Qt===e?t():(E(Ci,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sl extends ao{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=Dc(this.serializer,e),r=function(i){if(!("targetChange"in i))return b.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?b.min():a.readTime?xe(a.readTime):b.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=ns(this.serializer),t.addTarget=function(i,a){let o;const u=a.target;if(o=ot(u)?{pipelineQuery:Bc(i,u)}:qa(u)?{documents:Uc(i,u)}:{query:Mc(i,u).be},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Ka(i,a.resumeToken);const c=es(i,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(b.min())>0){o.readTime=ar(i,a.snapshotVersion.toTimestamp());const c=es(i,a.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=qc(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=ns(this.serializer),t.removeTarget=e,this.tn(t)}}class il extends ao{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return A(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,A(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){A(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=Lc(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=ns(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Oc(this.serializer,r))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class al{}class ol extends al{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.tt(e,ts(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(p.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.st(e,ts(t,r),s,a,o,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(p.UNKNOWN,a.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function ul(n,e,t,r){return new ol(n,e,t,r)}/**
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
 */const cl="ComponentProvider",xi=new Map;function ll(n,e,t,r,s){return new qu(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,so(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ni={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oo=41943040;class oe{static withCacheSize(e){return new oe(e,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}oe.DEFAULT_COLLECTION_PERCENTILE=10,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oe.DEFAULT=new oe(oo,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oe.DISABLED=new oe(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ar{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}Ar.yn=-1;/**
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
 */const hl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Ft(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==hl)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,r)=>{t(e)})}static reject(e){return new _((t,r)=>{r(e)})}static waitFor(e){return new _((t,r)=>{let s=0,i=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=_.resolve(!1);for(const r of e)t=t.next(s=>s?_.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new _((r,s)=>{const i=e.length,a=new Array(i);let o=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(l=>{a[c]=l,++o,o===i&&r(a)},l=>s(l))}})}static doWhile(e,t){return new _((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function fl(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qt(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const ki="LruGarbageCollector",ml=1048576;function Di([n,e],[t,r]){const s=N(n,t);return s===0?N(e,r):s}class _l{constructor(e){this.Jn=e,this.buffer=new G(Di),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Di(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pl{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){E(ki,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qt(t)?E(ki,"Ignoring IndexedDB error during garbage collection: ",t):await Ft(t)}await this.tr(3e5)})}}class gl{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return _.resolve(Ar.yn);const r=new _l(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(E("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(Ni)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ni):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,a,o,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,a=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,o=Date.now(),this.removeTargets(e,r,t))).next(d=>(i=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),At()<=Ue.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-l}ms
	Determined least recently used ${s} in `+(o-a)+`ms
	Removed ${i} targets in `+(u-o)+`ms
	Removed ${d} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function yl(n,e){return new gl(n,e)}/**
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
 */const uo="firestore.googleapis.com",Oi=!0;class Li{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uo,this.ssl=Oi}else this.host=e.host,this.ssl=e.ssl??Oi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=oo;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ml)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Mu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=so(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new w(p.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const o of i)if(r[o]!==s[o])return!1;return!0}(this._customHeaders,e._customHeaders)}}let vr=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Li({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Li(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wc;switch(r.type){case"firstParty":return new Yc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=xi.get(t);r&&(E(cl,"Removing Datastore"),xi.delete(t),r.terminate())}(this),Promise.resolve()}};function Tl(n,e,t,r={}){n=mt(n,vr);const s=mr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${e}:${t}`;s&&da(`https://${o}`),i.host!==uo&&i.host!==o&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:o,ssl:s,emulatorOptions:r};if(!Au(u,a)&&(n._setSettings(u),r.mockUserToken)){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ne.MOCK_USER;else{c=fa(r.mockUserToken,n._app?.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ne(d)}n._authCredentials=new Kc(new ro(c,l))}}/**
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
 */class Rr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rr(this.firestore,e,this._query)}}class X{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new X(this.firestore,e,this._key)}toJSON(){return{type:X._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Rn(t,X._jsonSchema))return new X(e,r||null,new v(L.fromString(t.referencePath)))}}X._jsonSchemaVersion="firestore/documentReference/1.0",X._jsonSchema={type:j("string",X._jsonSchemaVersion),referencePath:j("string")};class He extends Rr{constructor(e,t,r){super(e,t,Ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new v(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function Wm(n,e,...t){if(n=$e(n),ga("collection","path",e),n instanceof vr){const r=L.fromString(e,...t);return ci(r),new He(n,null,r)}{if(!(n instanceof X||n instanceof He))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return ci(r),new He(n.firestore,null,r)}}function El(n,e,...t){if(n=$e(n),arguments.length===1&&(e=ms.newId()),ga("doc","path",e),n instanceof vr){const r=L.fromString(e,...t);return ui(r),new X(n,null,new v(r))}{if(!(n instanceof X||n instanceof He))throw new w(p.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return ui(r),new X(n.firestore,n instanceof He?n.converter:null,new v(r))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2024 Google LLC
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
 */class le{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:le._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rn(e,le._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new le(e.vectorValues);throw new w(p.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}le._jsonSchemaVersion="firestore/vectorValue/1.0",le._jsonSchema={type:j("string",le._jsonSchemaVersion),vectorValues:j("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wl=/^__.*__$/;class Il{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pn(e,this.data,t,this.fieldTransforms)}}function co(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R(40011,{dataSource:n})}}class Ps{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ps({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ur(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(co(this.dataSource)&&wl.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Al{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ir(e)}createContext(e,t,r,s=!1){return new Ps({dataSource:e,methodName:t,targetDoc:r,path:ye.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lo(n){const e=n._freezeSettings(),t=Ir(n._databaseId);return new Al(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ho(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);_o("Data must be an object, but it was:",a,r);const o=fo(r,a);let u,c;if(i.merge)u=new Ae(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const l=[];for(const d of i.mergeFields){const f=Vr(e,d,t);if(!a.contains(f))throw new w(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Vl(l,f)||l.push(f)}u=new Ae(l),c=a.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=a.fieldTransforms;return new Il(new _e(o),u,c)}class bs extends Vs{_toFieldTransform(e){return new Ku(e.path,new dn)}isEqual(e){return e instanceof bs}}function yn(n,e,t){if(mo(n=$e(n)))return _o("Unsupported field value:",e,n),fo(n,e);if(n instanceof Vs)return function(s,i){if(!co(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let o=0;for(const u of s){let c=yn(u,i.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),a.push(c),o++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ys(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=M.fromDate(s);return{timestampValue:ar(i.serializer,o)}}if(s instanceof M){const o=new M(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ar(i.serializer,o)}}if(s instanceof Ne)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ee)return{bytesValue:Ka(i.serializer,s._byteString)};if(s instanceof X){const o=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(o))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vs(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof le)return function(u,c){const l=u instanceof le?u.toArray():u;return{mapValue:{fields:{[Aa]:{stringValue:va},[ln]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return gr(c.serializer,f)})}}}}}}(s,i);if(to(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${_s(s)}`)}(n,e)}function fo(n,e){const t={};return pa(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gt(n,(r,s)=>{const i=yn(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function mo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof M||n instanceof Ne||n instanceof Ee||n instanceof X||n instanceof Vs||n instanceof le||to(n))}function _o(n,e,t){if(!mo(t)||!vn(t)){const r=_s(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Vr(n,e,t){if((e=$e(e))instanceof Rs)return e._internalPath;if(typeof e=="string")return Rl(n,e);throw ur("Field path arguments must be of type string or ",n,!1,void 0,t)}const vl=new RegExp("[~\\*/\\[\\]]");function Rl(n,e,t){if(e.search(vl)>=0)throw ur(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rs(...e.split("."))._internalPath}catch{throw ur(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ur(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new w(p.INVALID_ARGUMENT,o+n+u)}function Vl(n,e){return n.some(t=>t.isEqual(e))}function po(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class se{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=_e.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let o;i.nestedOptions&&vn(a)?o={mapValue:{fields:new se(i.nestedOptions).getOptionsProto(t,a)}}:a&&(o=yn(a,t)??void 0),o&&r.set(ye.fromServerFormat(i.serverName),o)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Uu(r,(a,o)=>[ye.fromServerFormat(o),a!==void 0?yn(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Pl(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!vn(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function Km(){return new bs("serverTimestamp")}function bl(n){return new le(n)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function T(n){let e;return n instanceof Et?n:(e=vn(n)?kl(n):n instanceof Array?Dl(n):go(n,void 0),e)}function $r(n){if(n instanceof Et)return n;if(n instanceof le)return Tn(n);if(Array.isArray(n))return Tn(bl(n));throw new Error("Unsupported value: "+typeof n)}function Ss(n){return zu(n)?Hn(n):T(n)}class Et{constructor(){this._protoValueType="ProtoValue"}add(e){return new m("add",[this,T(e)],"add")}asBoolean(){if(this instanceof nt)return this;if(this instanceof $t)return new To(this);if(this instanceof Bt)return new Nl(this);if(this instanceof m)return new yo(this);throw new w("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new m("subtract",[this,T(e)],"subtract")}multiply(e){return new m("multiply",[this,T(e)],"multiply")}divide(e){return new m("divide",[this,T(e)],"divide")}mod(e){return new m("mod",[this,T(e)],"mod")}equal(e){return new m("equal",[this,T(e)],"equal").asBoolean()}notEqual(e){return new m("not_equal",[this,T(e)],"notEqual").asBoolean()}lessThan(e){return new m("less_than",[this,T(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new m("less_than_or_equal",[this,T(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new m("greater_than",[this,T(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new m("greater_than_or_equal",[this,T(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>T(s));return new m("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new m("array_contains",[this,T(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Jt(e.map(T),"arrayContainsAll"):e;return new m("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Jt(e.map(T),"arrayContainsAny"):e;return new m("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new m("array_reverse",[this])}arrayLength(){return new m("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Jt(e.map(T),"equalAny"):e;return new m("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Jt(e.map(T),"notEqualAny"):e;return new m("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new m("exists",[this],"exists").asBoolean()}charLength(){return new m("char_length",[this],"charLength")}like(e){return new m("like",[this,T(e)],"like").asBoolean()}regexContains(e){return new m("regex_contains",[this,T(e)],"regexContains").asBoolean()}regexFind(e){return new m("regex_find",[this,T(e)],"regexFind")}regexFindAll(e){return new m("regex_find_all",[this,T(e)],"regexFindAll")}regexMatch(e){return new m("regex_match",[this,T(e)],"regexMatch").asBoolean()}stringContains(e){return new m("string_contains",[this,T(e)],"stringContains").asBoolean()}startsWith(e){return new m("starts_with",[this,T(e)],"startsWith").asBoolean()}endsWith(e){return new m("ends_with",[this,T(e)],"endsWith").asBoolean()}toLower(){return new m("to_lower",[this],"toLower")}toUpper(){return new m("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(T(e)),new m("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(T(e)),new m("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(T(e)),new m("rtrim",t,"rtrim")}type(){return new m("type",[this])}isType(e){return new m("is_type",[this,Tn(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(T);return new m("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new m("string_index_of",[this,T(e)],"stringIndexOf")}stringRepeat(e){return new m("string_repeat",[this,T(e)],"stringRepeat")}stringReplaceAll(e,t){return new m("string_replace_all",[this,T(e),T(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new m("string_replace_one",[this,T(e),T(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(T);return new m("concat",[this,...r],"concat")}reverse(){return new m("reverse",[this],"reverse")}arrayFilter(e,t){return new m("array_filter",[this,T(e),t],"arrayFilter")}arrayTransform(e,t){return new m("array_transform",[this,T(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new m("array_transform",[this,T(e),T(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,T(e)];return t!==void 0&&r.push(T(t)),new m("array_slice",r,"arraySlice")}arrayFirst(){return new m("array_first",[this],"arrayFirst")}arrayFirstN(e){return new m("array_first_n",[this,T(e)],"arrayFirstN")}arrayLast(){return new m("array_last",[this],"arrayLast")}arrayLastN(e){return new m("array_last_n",[this,T(e)],"arrayLastN")}arrayMaximum(){return new m("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new m("maximum_n",[this,T(e)],"arrayMaximumN")}arrayMinimum(){return new m("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new m("minimum_n",[this,T(e)],"arrayMinimumN")}arrayIndexOf(e){return new m("array_index_of",[this,T(e),T("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new m("array_index_of",[this,T(e),T("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new m("array_index_of_all",[this,T(e)],"arrayIndexOfAll")}byteLength(){return new m("byte_length",[this],"byteLength")}ceil(){return new m("ceil",[this])}floor(){return new m("floor",[this])}abs(){return new m("abs",[this])}exp(){return new m("exp",[this])}mapGet(e){return new m("map_get",[this,Tn(e)],"mapGet")}mapSet(e,t,...r){const s=[this,T(e),T(t),...r.map(T)];return new m("map_set",s,"mapSet")}mapKeys(){return new m("map_keys",[this],"mapKeys")}mapValues(){return new m("map_values",[this],"mapValues")}mapEntries(){return new m("map_entries",[this],"mapEntries")}getField(e){return new m("get_field",[this,T(e)],"get_field")}count(){return me._create("count",[this],"count")}sum(){return me._create("sum",[this],"sum")}average(){return me._create("average",[this],"average")}minimum(){return me._create("minimum",[this],"minimum")}maximum(){return me._create("maximum",[this],"maximum")}first(){return me._create("first",[this],"first")}last(){return me._create("last",[this],"last")}arrayAgg(){return me._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return me._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return me._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new m("maximum",[this,...r.map(T)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new m("minimum",[this,...r.map(T)],"minimum")}vectorLength(){return new m("vector_length",[this],"vectorLength")}cosineDistance(e){return new m("cosine_distance",[this,$r(e)],"cosineDistance")}dotProduct(e){return new m("dot_product",[this,$r(e)],"dotProduct")}euclideanDistance(e){return new m("euclidean_distance",[this,$r(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new m("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new m("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new m("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new m("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new m("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new m("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new m("timestamp_add",[this,T(e),T(t)],"timestampAdd")}timestampSubtract(e,t){return new m("timestamp_subtract",[this,T(e),T(t)],"timestampSubtract")}timestampDiff(e,t){return new m("timestamp_diff",[this,Ss(e),T(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,T(e)];return t&&r.push(T(t)),new m("timestamp_extract",r,"timestampExtract")}documentId(){return new m("document_id",[this],"documentId")}parent(){return new m("parent",[this],"parent")}substring(e,t){const r=T(e);return new m("substring",t===void 0?[this,r]:[this,r,T(t)],"substring")}arrayGet(e){return new m("array_get",[this,T(e)],"arrayGet")}isError(){return new m("is_error",[this],"isError").asBoolean()}ifError(e){const t=new m("if_error",[this,T(e)],"ifError");return e instanceof nt?t.asBoolean():t}isAbsent(){return new m("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new m("map_remove",[this,T(e)],"mapRemove")}mapMerge(e,...t){const r=T(e),s=t.map(T);return new m("map_merge",[this,r,...s],"mapMerge")}pow(e){return new m("pow",[this,T(e)])}trunc(e){return e===void 0?new m("trunc",[this]):new m("trunc",[this,T(e)],"trunc")}round(e){return e===void 0?new m("round",[this]):new m("round",[this,T(e)],"round")}collectionId(){return new m("collection_id",[this])}length(){return new m("length",[this])}ln(){return new m("ln",[this])}sqrt(){return new m("sqrt",[this])}stringReverse(){return new m("string_reverse",[this])}ifAbsent(e){return new m("if_absent",[this,T(e)],"ifAbsent")}ifNull(e){return new m("if_null",[this,T(e)],"ifNull")}coalesce(e,...t){return new m("coalesce",[this,T(e),...t.map(T)],"coalesce")}join(e){return new m("join",[this,T(e)],"join")}log10(){return new m("log10",[this])}arraySum(){return new m("sum",[this])}split(e){return new m("split",[this,T(e)])}timestampTruncate(e,t){const r=[this,T(e)];return t&&r.push(T(t)),new m("timestamp_trunc",r)}ascending(){return Ol(this)}descending(){return Ll(this)}as(e){return new Cl(this,e,"as")}}class me{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new me(e,t);return s._methodName=r,s}as(e){return new Sl(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Sl{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Cl{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Jt extends Et{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class Bt extends Et{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new m("geo_distance",[this,T(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Hn(n){return xl(n,"field")}function xl(n,e){return new Bt(typeof n=="string"?Pe===n?Qc()._internalPath:Vr("field",n):n._internalPath,e)}class $t extends Et{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new $t(e,void 0);return t._protoValue=e,t}_toProto(e){return A(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Pl(this._protoValue)||(this._protoValue=yn(this.value,e))}}function Tn(n,e){return go(n,"constant")}function go(n,e){const t=new $t(n,e);return typeof n=="boolean"?new To(t):t}class m extends Et{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new se({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class nt extends Et{get _methodName(){return this._expr._methodName}countIf(){return me._create("count_if",[this],"countIf")}not(){return new m("not",[this],"not").asBoolean()}conditional(e,t){return new m("conditional",[this,e,t],"conditional")}ifError(e){const t=T(e),r=new m("if_error",[this,t],"ifError");return t instanceof nt?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class yo extends nt{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class To extends nt{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Nl extends nt{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function kl(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Tn(r)),t.push(T(s))}return new m("map",t,"map")}function Dl(n){return function(t,r){return new m("array",t.map(s=>T(s)),r)}(n,"array")}function Ol(n){return new Eo(Ss(n),"ascending","ascending")}function Ll(n){return new Eo(Ss(n),"descending","descending")}class Eo{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:no(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Te{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class wo extends Te{get _name(){return"add_fields"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[gn(e,this.fields)]}}_readUserData(e){super._readUserData(e),rt(this.fields,e)}}class Io extends Te{get _name(){return"aggregate"}get _optionsUtil(){return new se({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[gn(e,this.accumulators),gn(e,this.groups)]}}_readUserData(e){super._readUserData(e),rt(this.groups,e),rt(this.accumulators,e)}}class Ao extends Te{get _name(){return"distinct"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[gn(e,this.groups)]}}_readUserData(e){super._readUserData(e),rt(this.groups,e)}}class Pr extends Te{get _name(){return"collection"}get _optionsUtil(){return new se({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class br extends Te{get _name(){return"collection_group"}get _optionsUtil(){return new se({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Cs extends Te{get _name(){return"database"}get _optionsUtil(){return new se({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class xs extends Te{get _name(){return"documents"}get _optionsUtil(){return new se({})}constructor(e,t){if(super(t),!e||e.length===0)throw new w(p.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new w(p.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Sr extends Te{get _name(){return"where"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),rt(this.condition,e)}}class _t extends Te{get _name(){return"limit"}get _optionsUtil(){return new se({})}constructor(e,t){A(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[ys(e,this.limit)]}}}class Ui extends Te{get _name(){return"offset"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[ys(e,this.offset)]}}}class Ul extends Te{get _name(){return"select"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[gn(e,this.selections)]}}_readUserData(e){super._readUserData(e),rt(this.selections,e)}}class Me extends Te{get _name(){return"sort"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),rt(this.orderings,e)}}class Ns extends Te{get _name(){return"replace_with"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),no(Ns.Pr)]}}_readUserData(e){super._readUserData(e),rt(this.map,e)}}Ns.Pr="full_replace";function rt(n,e){return po(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
 * @license
 * Copyright 2026 Google LLC
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
 */class sn{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return po(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Ar("where",e),t.push(new Sr(e,{})),new sn(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new _t(e,{})),new sn(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new Me(this.Ar("sort",e.orderings),{})):r.push(new Me(this.Ar("sort",[e,...t]),{})),new sn(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class ae{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Cr(this)}getPipelineCollectionGroup(){return ks(this)}getPipelineCollectionId(){return Ml(this)}getPipelineDocuments(){return ss(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==Ao.name&&s._name!==Io.name||(r="keyless"),s._name===Ul.name&&r==="exact"&&(r="augmented"),s._name===wo.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Xe(this)}}function Xe(n){const e=n.stages[0];return e instanceof Pr||e instanceof br||e instanceof Cs||e instanceof xs?e._name:"unknown"}function Cr(n){if(Xe(n)==="collection")return n.stages[0].Er}function ks(n){if(Xe(n)==="collection_group")return n.stages[0].collectionId}function Ml(n){switch(Xe(n)){case"collection":return L.fromString(Cr(n)).lastSegment();case"collection_group":return ks(n);default:return}}function ss(n){if(Xe(n)==="documents")return n.stages[0].hr}class h{constructor(e,t){this.type=e,this.value=t}static dr(){return new h("ERROR",void 0)}static mr(){return new h("UNSET",void 0)}static pr(){return new h("NULL",Dt)}static newValue(e){return pe(e)?new h("NULL",Dt):function(r){return!!r&&"booleanValue"in r}(e)?new h("BOOLEAN",e):be(e)?new h("INT",e):ut(e)?new h("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new h("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new h("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new h("BYTES",e):e.referenceValue?new h("REFERENCE",e):e.geoPointValue?new h("GEO_POINT",e):Lt(e)?new h("ARRAY",e):er(e)?new h("VECTOR",e):lt(e)?new h("MAP",e):new h("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function an(n){if(!n.gr())return n.value}function vo(n){return n instanceof nt?n._expr:n}function P(n){if((n=vo(n))instanceof Bt)return new Fl(n);if(n instanceof $t)return new ql(n);if(n instanceof Jt)return new Bl(n);if(n instanceof m){if(n.name==="add")return new jl(n);if(n.name==="subtract")return new Gl(n);if(n.name==="multiply")return new Ql(n);if(n.name==="divide")return new Wl(n);if(n.name==="mod")return new Kl(n);if(n.name==="and")return new Hl(n);if(n.name==="equal")return new oh(n);if(n.name==="not_equal")return new uh(n);if(n.name==="less_than")return new ch(n);if(n.name==="less_than_or_equal")return new lh(n);if(n.name==="greater_than")return new hh(n);if(n.name==="greater_than_or_equal")return new dh(n);if(n.name==="array_concat")return new fh(n);if(n.name==="array_reverse")return new mh(n);if(n.name==="array_contains")return new _h(n);if(n.name==="array_contains_all")return new ph(n);if(n.name==="array_contains_any")return new gh(n);if(n.name==="array_length")return new yh(n);if(n.name==="array_element")return new Th(n);if(n.name==="equal_any")return new Ro(n);if(n.name==="not_equal_any")return new Yl(n);if(n.name==="is_nan")return new Jl(n);if(n.name==="is_not_nan")return new Zl(n);if(n.name==="is_null")return new eh(n);if(n.name==="is_not_null")return new th(n);if(n.name==="is_error")return new nh(n);if(n.name==="exists")return new rh(n);if(n.name==="not")return new xr(n);if(n.name==="or")return new Xl(n);if(n.name==="xor")return new Ds(n);if(n.name==="conditional")return new sh(n);if(n.name==="maximum")return new ih(n);if(n.name==="minimum")return new ah(n);if(n.name==="reverse")return new Eh(n);if(n.name==="replace_first")return new wh(n);if(n.name==="replace_all")return new Ih(n);if(n.name==="char_length")return new Ah(n);if(n.name==="byte_length")return new vh(n);if(n.name==="like")return new Rh(n);if(n.name==="regex_contains")return new Vh(n);if(n.name==="regex_match")return new Ph(n);if(n.name==="string_contains")return new bh(n);if(n.name==="starts_with")return new Sh(n);if(n.name==="ends_with")return new Ch(n);if(n.name==="to_lower")return new xh(n);if(n.name==="to_upper")return new Nh(n);if(n.name==="trim")return new kh(n);if(n.name==="string_concat")return new Dh(n);if(n.name==="map_get")return new Oh(n);if(n.name==="cosine_distance")return new Lh(n);if(n.name==="dot_product")return new Uh(n);if(n.name==="euclidean_distance")return new Mh(n);if(n.name==="vector_length")return new Fh(n);if(n.name==="unix_micros_to_timestamp")return new jh(n);if(n.name==="timestamp_to_unix_micros")return new Wh(n);if(n.name==="unix_millis_to_timestamp")return new Gh(n);if(n.name==="timestamp_to_unix_millis")return new Kh(n);if(n.name==="unix_seconds_to_timestamp")return new Qh(n);if(n.name==="timestamp_to_unix_seconds")return new Hh(n);if(n.name==="timestamp_add")return new Xh(n);if(n.name==="timestamp_subtract")return new Yh(n)}throw new Error(`Unknown Expr : ${n}`)}class Fl{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Pe)return h.newValue({referenceValue:or(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return h.newValue({timestampValue:Kn(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return h.newValue({timestampValue:Kn(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?_r(r)?h.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Kn(i.serializer,b.fromTimestamp(kt(a)))};if(i.serverTimestampBehavior==="previous"){const o=Vn(a);if(o)return o}return{nullValue:"NULL_VALUE"}}(e,r)):h.newValue(r):h.mr()}}class ql{constructor(e){this.expr=e}evaluate(e,t){return h.newValue(this.expr._getValue())}}class Bl{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>P(s).evaluate(e,t));return r.some(s=>s.gr())?h.dr():h.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function ee(n){return ut(n)?Number(n.doubleValue):Number(n.integerValue)}function De(n){return BigInt(n.integerValue)}const $l=BigInt("0x7fffffffffffffff"),zl=-BigInt("0x8000000000000000");class Cn{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length>=2,24778);const r=P(this.expr.params[0]).evaluate(e,t),s=P(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const a of this.expr.params.slice(2)){const o=P(a).evaluate(e,t);i=this.wr(i,o)}return i}wr(e,t){if(e.gr()||t.gr())return h.dr();if(e.yr()||t.yr())return h.pr();const r=e.value,s=t.value;if(!ut(r)&&!be(r)||!ut(s)&&!be(s))return h.dr();if(ut(r)||ut(s)){const i=this.br(r,s);return i?h.newValue(i):h.dr()}if(be(r)&&be(s)){const i=this.Sr(r,s);return i===void 0?h.dr():typeof i=="number"?h.newValue({doubleValue:i}):i<zl||i>$l?h.dr():h.newValue({integerValue:`${i}`})}return h.dr()}}function je(n,e){return W(n)!==W(e)?"TYPE_MISMATCH":fe(n)||fe(e)?"NOT_EQ":pe(n)&&pe(e)?"EQ":pe(n)||pe(e)?"NULL":Lt(n)&&Lt(e)?function(r,s){if(r.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let a=0;a<(r.values?.length??0);a++){const o=r.values[a],u=s.values[a];switch(je(o,u)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:R(44609,{vr:o,Dr:u})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):er(n)&&er(e)||lt(n)&&lt(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(Jn(i)!==Jn(a))return"NOT_EQ";let o=!1;for(const u in i)if(i.hasOwnProperty(u)){if(a[u]===void 0)return"NOT_EQ";switch(je(i[u],a[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":o=!0}}return o?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return we(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class jl extends Cn{Sr(e,t){return De(e)+De(t)}br(e,t){return{doubleValue:ee(e)+ee(t)}}}class Gl extends Cn{constructor(e){super(e),this.expr=e}Sr(e,t){return De(e)-De(t)}br(e,t){return{doubleValue:ee(e)-ee(t)}}}class Ql extends Cn{constructor(e){super(e),this.expr=e}Sr(e,t){return De(e)*De(t)}br(e,t){return{doubleValue:ee(e)*ee(t)}}}class Wl extends Cn{constructor(e){super(e),this.expr=e}Sr(e,t){const r=De(t);if(r!==BigInt(0))return De(e)/r}br(e,t){const r=ee(t);return r===0?{doubleValue:cn(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:ee(e)/r}}}class Kl extends Cn{constructor(e){super(e),this.expr=e}Sr(e,t){const r=De(t);if(r!==BigInt(0))return De(e)%r}br(e,t){const r=ee(t);if(r!==0)return{doubleValue:ee(e)%r}}}class Hl{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=P(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return h.newValue(J);break;case"NULL":s=!0;break;default:r=!0}}return r?h.dr():s?h.pr():h.newValue(he)}}class xr{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,9634);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return h.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return h.pr();default:return h.dr()}}}class Xl{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=P(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return h.newValue(he);break;case"NULL":s=!0;break;default:r=!0}}return r?h.dr():s?h.pr():h.newValue(J)}}class Ds{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=P(i).evaluate(e,t);switch(a.type){case"BOOLEAN":r=Ds.xor(r,!!a.value?.booleanValue);break;case"NULL":s=!0;break;default:return h.dr()}}return s?h.pr():h.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Ro{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,55094);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return h.dr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();for(const a of i.value?.arrayValue?.values??[])switch(pe(s.value)&&pe(a)?"EQ":je(s.value,a)){case"EQ":return h.newValue(he);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:R(44608,{value:s.value,candidate:a})}return r?h.pr():h.newValue(J)}}class Yl{constructor(e){this.expr=e}evaluate(e,t){return new xr(new m("not",[new m("equal_any",this.expr.params)])).evaluate(e,t)}}class Jl{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,23322);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return h.newValue(J);case"DOUBLE":return h.newValue({booleanValue:isNaN(ee(r.value))});case"NULL":return h.pr();default:return h.dr()}}}class Zl{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===1,50406),new xr(new m("not",[new m("is_nan",this.expr.params)])).evaluate(e,t)}}class eh{constructor(e){this.expr=e}evaluate(e,t){switch(A(this.expr.params.length===1,23123),P(this.expr.params[0]).evaluate(e,t).type){case"NULL":return h.newValue(he);case"UNSET":case"ERROR":return h.dr();default:return h.newValue(J)}}}class th{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===1,23167),new xr(new m("not",[new m("is_null",this.expr.params)])).evaluate(e,t)}}class nh{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===1,5228),P(this.expr.params[0]).evaluate(e,t).type==="ERROR"?h.newValue(he):h.newValue(J)}}class rh{constructor(e){this.expr=e}evaluate(e,t){switch(A(this.expr.params.length===1,6877),P(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return h.dr();case"UNSET":return h.newValue(J);default:return h.newValue(he)}}}class sh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===3,11706);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?P(this.expr.params[1]).evaluate(e,t):P(this.expr.params[2]).evaluate(e,t);case"NULL":return P(this.expr.params[2]).evaluate(e,t);default:return h.dr()}}}class ih{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>P(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||de(i.value,s.value)>0?i:s}return s===void 0?h.pr():s}}class ah{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>P(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||de(i.value,s.value)<0?i:s}return s===void 0?h.pr():s}}class zt{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return h.dr()}const s=P(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return h.dr()}return this.Cr(r,s)}}class oh extends zt{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return h.newValue(he);if(e.yr()||t.yr()||fe(e.value)||fe(t.value)||W(e.value)!==W(t.value))return h.newValue(J);switch(je(e.value,t.value)){case"EQ":return h.newValue(he);case"NOT_EQ":return h.newValue(J);case"NULL":return h.pr();default:R(44615,{left:e,right:t})}}}class uh extends zt{constructor(e){super(e),this.expr=e}Cr(e,t){switch(je(e.value,t.value)){case"EQ":return h.newValue(J);case"NOT_EQ":case"TYPE_MISMATCH":return h.newValue(he);case"NULL":return h.pr();default:R(44614,{left:e,right:t})}}}class ch extends zt{constructor(e){super(e),this.expr=e}Cr(e,t){return W(e.value)!==W(t.value)||fe(e.value)||fe(t.value)?h.newValue(J):h.newValue({booleanValue:de(e.value,t.value)<0})}}class lh extends zt{constructor(e){super(e),this.expr=e}Cr(e,t){return W(e.value)!==W(t.value)||fe(e.value)||fe(t.value)?h.newValue(J):je(e.value,t.value)==="EQ"?h.newValue(he):h.newValue({booleanValue:de(e.value,t.value)<0})}}class hh extends zt{constructor(e){super(e),this.expr=e}Cr(e,t){return W(e.value)!==W(t.value)||fe(e.value)||fe(t.value)?h.newValue(J):h.newValue({booleanValue:de(e.value,t.value)>0})}}class dh extends zt{constructor(e){super(e),this.expr=e}Cr(e,t){return W(e.value)!==W(t.value)||fe(e.value)||fe(t.value)?h.newValue(J):je(e.value,t.value)==="EQ"?h.newValue(he):h.newValue({booleanValue:de(e.value,t.value)>0})}}class fh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class mh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,216);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"ARRAY":{const s=r.value.arrayValue?.values??[];return h.newValue({arrayValue:{values:[...s].reverse()}})}default:return h.dr()}}}class _h{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===2,52884),new Ro(new m("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class ph{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,1392);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const a=i.value?.arrayValue?.values??[],o=s.value?.arrayValue?.values??[];for(const u of a){let c=!1;r=!1;for(const l of o){switch(pe(u)&&pe(l)?"EQ":je(u,l)){case"EQ":c=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:R(44613,{value:l,search:u})}if(c)break}if(!c)return h.newValue(J)}return h.newValue(he)}}class gh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,2680);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const a=i.value?.arrayValue?.values??[],o=s.value?.arrayValue?.values??[];for(const u of o)for(const c of a)switch(pe(u)&&pe(c)?"EQ":je(u,c)){case"EQ":return h.newValue(he);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:R(60403,{value:u,search:c})}return r?h.pr():h.newValue(J)}}class yh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,38605);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"ARRAY":return h.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return h.dr()}}}class Th{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Eh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,1508);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"BYTES":{const s=r.value?.bytesValue;if(typeof s=="string"){const i=Q.fromBase64String(s).toUint8Array();return i.reverse(),h.newValue({bytesValue:Q.fromUint8Array(i).toBase64()})}return h.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=r.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),a=Array.from(i,o=>o.segment).reverse();return h.newValue({stringValue:a.join("")})}default:return h.dr()}}}class wh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ih{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ah{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,19400);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"STRING":{const s=function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const l=a.codePointAt(u+1);l!==void 0&&l>=56320&&l<=57343?(o+=1,u++):o+=1}else o+=1;else o+=1;else{if(!(c<=1114111))return;o+=1,u++}}return o}(r.value.stringValue);return s===void 0?h.dr():h.newValue({integerValue:s})}default:return h.dr()}}}class vh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,8486);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const s=r.value?.bytesValue;return typeof s=="string"?h.newValue({integerValue:Q.fromBase64String(s).toUint8Array().length}):h.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c>=55296&&c<=57343){if(!(c<=56319))return;{const l=a.codePointAt(u+1);if(l===void 0||!(l>=56320&&l<=57343))return;o+=4,u++}}else if(c<=127)o+=1;else if(c<=2047)o+=2;else if(c<=65535)o+=3;else{if(!(c<=1114111))return;o+=4,u++}}return o}(r.value?.stringValue);return s===void 0?h.dr():h.newValue({integerValue:s})}case"NULL":return h.pr();default:return h.dr()}}}class jt{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return h.dr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return h.dr()}return r?h.pr():this.Fr(s.value?.stringValue,i.value?.stringValue)}}class Rh extends jt{Fr(e,t){try{const r=function(a){let o="";for(let u=0;u<a.length;u++){const c=a.charAt(u);switch(c){case"_":o+=".";break;case"%":o+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":o+="\\"+c;break;default:o+=c}}return"^"+o+"$"}(t),s=ds.compile(r);return h.newValue({booleanValue:s.matches(e)})}catch(r){return Re(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),h.dr()}}}class Vh extends jt{Fr(e,t){try{const r=ds.compile(t);return h.newValue({booleanValue:r.test(e)})}catch{return Re(`Invalid regex pattern found in regex_contains: ${t}, returning error`),h.dr()}}}class Ph extends jt{Fr(e,t){try{return h.newValue({booleanValue:ds.compile(t).matches(e)})}catch{return Re(`Invalid regex pattern found in regex_match: ${t}, returning error`),h.dr()}}}class bh extends jt{Fr(e,t){return h.newValue({booleanValue:e.includes(t)})}}class Sh extends jt{Fr(e,t){return h.newValue({booleanValue:e.startsWith(t)})}}class Ch extends jt{Fr(e,t){return h.newValue({booleanValue:e.endsWith(t)})}}class xh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,29079);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return h.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return h.pr();default:return h.dr()}}}class Nh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,60487);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return h.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return h.pr();default:return h.dr()}}}class kh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,28544);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return h.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return h.pr();default:return h.dr()}}}class Dh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>P(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return h.dr()}return i?h.pr():h.newValue({stringValue:s})}}class Oh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,4483);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return h.mr();case"MAP":break;default:return h.dr()}const s=P(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return h.dr();const i=r.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?h.mr():h.newValue(i)}}class Os{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return h.dr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const a=Yr(s.value),o=Yr(i.value);if(a===void 0||o===void 0||a.values?.length!==o.values?.length)return h.dr();const u=this.Or(a,o);return u===void 0||isNaN(u)?h.dr():h.newValue({doubleValue:u})}}class Lh extends Os{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return;let i=0,a=0,o=0;for(let c=0;c<r.length;c++){if(!et(r[c])||!et(s[c]))return;const l=ee(r[c]),d=ee(s[c]);i+=l*d,a+=l*l,o+=d*d}const u=Math.sqrt(a)*Math.sqrt(o);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class Uh extends Os{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!et(r[a])||!et(s[a]))return;i+=ee(r[a])*ee(s[a])}return i}}class Mh extends Os{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!et(r[a])||!et(s[a]))return;const o=ee(r[a]),u=ee(s[a]);i+=Math.pow(o-u,2)}return Math.sqrt(i)}}class Fh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,39044);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const s=Yr(r.value);return h.newValue({integerValue:s?.values?.length??0})}case"NULL":return h.pr();default:return h.dr()}}}const En=BigInt(-62135596800),wn=BigInt(253402300799),cr=BigInt(1e3),Ye=BigInt(1e6),qh=En*cr,Bh=wn*cr+BigInt(999),$h=En*Ye,zh=wn*Ye+BigInt(999999);function Ls(n){return n>=$h&&n<=zh}function Vo(n){return n>=En&&n<=wn}function In(n,e){const t=BigInt(n);return!(t<En||t>wn)&&!(e<0||e>=1e9)&&(t!==En||e===0)&&!(t===wn&&e>999999999)}function Po(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Us(n){return BigInt(n.seconds)*Ye+BigInt(Math.trunc(n.nanoseconds/1e3))}class Ms{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return h.pr();default:return h.dr()}}}class jh extends Ms{toTimestamp(e){if(!Ls(e))return h.dr();let t=Number(e/Ye),r=Number(e%Ye*BigInt(1e3));const s=Po(t,r);return t=s.seconds,r=s.nanos,In(t,r)?h.newValue({timestampValue:{seconds:t,nanos:r}}):h.dr()}}class Gh extends Ms{toTimestamp(e){if(!function(a){return a>=qh&&a<=Bh}(e))return h.dr();let t=Number(e/cr),r=Number(e%cr*BigInt(1e6));const s=Po(t,r);return t=s.seconds,r=s.nanos,In(t,r)?h.newValue({timestampValue:{seconds:t,nanos:r}}):h.dr()}}class Qh extends Ms{toTimestamp(e){if(!Vo(e))return h.dr();const t=Number(e);return h.newValue({timestampValue:{seconds:t,nanos:0}})}}class Fs{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return h.pr();default:return h.dr()}const s=As(r.value.timestampValue);return In(s.seconds,s.nanoseconds)?this.Mr(s):h.dr()}}class Wh extends Fs{Mr(e){const t=Us(e);return Ls(t)?h.newValue({integerValue:`${t.toString()}`}):h.dr()}}class Kh extends Fs{Mr(e){const t=Us(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?h.newValue({integerValue:r.toString()}):h.newValue({integerValue:(r-BigInt(1)).toString()})}}class Hh extends Fs{Mr(e){const t=BigInt(e.seconds);return Vo(t)?h.newValue({integerValue:t.toString()}):h.dr()}}class bo{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return h.dr()}const i=P(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(D){switch(D){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return h.dr();break;case"NULL":r=!0;break;default:return h.dr()}const o=P(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const u=BigInt(o.value.integerValue);let c;try{switch(a){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return h.dr()}if(a!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(a)))return h.dr()}catch(C){return Re(`Error during timestamp arithmetic: ${C}`),h.dr()}const l=As(s.value.timestampValue);if(!In(l.seconds,l.nanoseconds))return h.dr();const d=Us(l),f=this.Lr(d,c);if(!Ls(f))return h.dr();const g=Number(f/Ye),y=f%Ye,V=Number((y<0?y+Ye:y)*BigInt(1e3)),I=y<0?g-1:g;return In(I,V)?h.newValue({timestampValue:{seconds:I,nanos:V}}):h.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Xh extends bo{Lr(e,t){return e+t}}class Yh extends bo{Lr(e,t){return e-t}}function An(n){if((n=vo(n))instanceof Bt)return`fld(${n.fieldName})`;if(n instanceof $t)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof X?`ref(${t.path})`:t instanceof le?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof m)return`fn(${n.name},[${n.params.map(An).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(An).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Jh(n){if(n instanceof wo)return`${n._name}(${Bn(n.fields)})`;if(n instanceof Io){let e=`${n._name}(${Bn(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Bn(n.groups)})`),e}if(n instanceof Ao)return`${n._name}(${Bn(n.groups)})`;if(n instanceof Pr)return`${n._name}(${n.Er})`;if(n instanceof br)return`${n._name}(${n.collectionId})`;if(n instanceof Cs)return`${n._name}()`;if(n instanceof xs)return`${n._name}(${n.hr.sort()})`;if(n instanceof Sr)return`${n._name}(${An(n.condition)})`;if(n instanceof _t)return`${n._name}(${n.limit})`;if(n instanceof Me)return`${n._name}(${function(t){return t.map(r=>`${An(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Bn(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${An(t)}`).join(",")}`}function qe(n){return n.stages.map(e=>Jh(e)).join("|")}function So(n,e){return qe(n)===qe(e)}function H(n){return n instanceof ae}function Mi(n){return H(n)?qe(n):nn(n)}function Co(n){return H(n)?qe(n):function(t){return`${Ma(Ce(t))}|lt:${t.limitType}`}(n)}function Nr(n,e){return n instanceof ae&&e instanceof ae?So(n,e):!(n instanceof ae&&!(e instanceof ae)||!(n instanceof ae)&&e instanceof ae)&&gc(n,e)}function xo(n){return ot(n)?qe(n):Ma(n)}function No(n,e){return n instanceof ae&&e instanceof ae?So(n,e):!(n instanceof ae&&!(e instanceof ae)||!(n instanceof ae)&&e instanceof ae)&&Fa(n,e)}function Zh(n,e){const t=function(s){let i=!1;const a=[];for(const o of s)if(o instanceof Me)if(i=!0,o.orderings.some(u=>u.expr instanceof Bt&&u.expr.fieldName===Pe))a.push(o);else{const u=o.orderings.map(c=>c);u.push(Hn(Pe).ascending()),a.push(new Me(u,{}))}else o instanceof _t&&(i||(a.push(new Me([Hn(Pe).ascending()],{})),i=!0)),a.push(o);return i||a.push(new Me([Hn(Pe).ascending()],{})),a}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new ae(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ed{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yu(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=en(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=en(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ga();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(s.key)?null:o;const u=Ca(a,o);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&Nt(this.mutations,e.mutations,(t,r)=>_i(t,r))&&Nt(this.baseMutations,e.baseMutations,(t,r)=>_i(t,r))}}class qs{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){A(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return Ic}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new qs(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ko="";function td(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fi(e)),e=nd(n.get(t),e);return Fi(e)}function nd(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ko:t+="";break;default:t+=i}}return t}function Fi(n){return n+ko+""}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class rd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fe{constructor(e,t,r,s,i=b.min(),a=b.min(),o=Q.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=u}withSequenceNumber(e){return new Fe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sd{constructor(e){this.qr=e}}function id(n){const e=Fc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ad{constructor(){this.Yi=new od}addToCollectionParentIndex(e,t){return this.Yi.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}deleteAllFieldIndexes(e){return _.resolve()}createTargetIndexes(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(tt.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(tt.min())}updateCollectionGroup(e,t,r){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class od{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new G(L.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new G(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class st{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new st(0)}static ws(){return new st(-1)}}// Copyright 2024 Google LLC* @license
function Do(n,e){let t=e;for(const r of n.stages)t=cd({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function kr(n,e){return Do(n,[e]).length>0}function ud(n,e){return H(n)?kr(n,e):wr(n,e)}function cd(n,e,t){if(e instanceof Pr)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&`/${o.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof Sr)return function(s,i,a){return a.filter(o=>{const u=an(P(i.condition).evaluate(s,o));return u!==void 0&&we(u,he)})}(n,e,t);if(e instanceof br)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&o.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof Cs)return function(s,i,a){return a.filter(o=>o.isFoundDocument())}(0,0,t);if(e instanceof xs)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&i.Tr.has(o.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof _t)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof Me)return function(s,i,a){const o=i.orderings.map(u=>({Os:P(u.expr),direction:u.direction}));return[...a].sort((u,c)=>{for(const{Os:l,direction:d}of o){const f=an(l.evaluate(s,u)),g=an(l.evaluate(s,c)),y=de(f??Dt,g??Dt);if(y!==0)return d==="ascending"?y:-y}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function is(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Me)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=an(P(s.expr).evaluate({serializer:n.serializer},t)),a=an(P(s.expr).evaluate({serializer:n.serializer},r)),o=de(i||Dt,a||Dt);if(o!==0)return s.direction==="ascending"?o:-o}return 0}}function zr(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof _t)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ld{constructor(){this.changes=new Tt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?_.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class hd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dd{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&en(r.mutation,s,Ae.empty(),M.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,t,r=x()){const s=Qe();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Rt();return i.forEach((o,u)=>{a=a.insert(o,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Qe();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,x()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,o)=>{t.set(a,o)})})}computeViews(e,t,r,s){let i=ce();const a=rn(),o=function(){return rn()}();return t.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof yt)?i=i.insert(c.key,c):l!==void 0?(a.set(c.key,l.mutation.getFieldMask()),en(l.mutation,c,l.mutation.getFieldMask(),M.now())):a.set(c.key,Ae.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>a.set(c,l)),t.forEach((c,l)=>o.set(c,new hd(l,a.get(c)??null))),o))}recalculateAndSaveOverlays(e,t){const r=rn();let s=new q((a,o)=>a-o),i=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const o of a)o.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=r.get(u)||Ae.empty();l=o.applyToLocalView(c,l),r.set(u,l);const d=(s.get(o.batchId)||x()).add(u);s=s.insert(o.batchId,d)})}).next(()=>{const a=[],o=s.getReverseIterator();for(;o.hasNext();){const u=o.getNext(),c=u.key,l=u.value,d=Ga();l.forEach(f=>{if(!i.has(f)){const g=Ca(t.get(f),r.get(f));g!==null&&d.set(f,g),i=i.add(f)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,d))}return _.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return H(t)?this.getDocumentsMatchingPipeline(e,t,r,s):mc(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_c(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):_.resolve(Qe());let o=pn,u=i;return a.next(c=>_.forEach(c,(l,d)=>(o<d.largestBatchId&&(o=d.largestBatchId),i.get(l)?_.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,x())).next(l=>({batchId:o,changes:ja(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(r=>{let s=Rt();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Rt();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,u=>{const c=function(d,f){return new Er(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(l=>{l.forEach((d,f)=>{a=a.insert(d,f)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,o=>wr(t,o)))}getDocumentsMatchingPipeline(e,t,r,s){if(Xe(t)==="collection_group"){const i=ks(t);let a=Rt();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,u=>{const c=function(d,f){const g=d.stages.map(y=>y instanceof br?new Pr(f.canonicalString(),{}):y);return new ae(d.serializer,g)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(l=>{l.forEach((d,f)=>{a=a.insert(d,f)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,Xe(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let o=x();for(const u of ss(t))o=o.add(v.fromPath(u));return this.remoteDocumentCache.getEntries(e,o);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new w("invalid-argument",`Invalid pipeline source to execute offline: ${qe(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,o=>kr(t,o)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const o=a.getKey();t.get(o)===null&&(t=t.insert(o,re.newInvalidDocument(o)))});let s=Rt();return t.forEach((i,a)=>{const o=e.get(i);o!==void 0&&en(o.mutation,a,Ae.empty(),M.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(Xe(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,L.fromString(Cr(t)),r);case"collection_group":throw new w("invalid-argument",`Unexpected collection group pipeline: ${qe(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,ss(t).map(s=>v.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new w("invalid-argument",`Failed to get overlays for pipeline: ${qe(t)}`)}}}/**
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
 */class fd{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return _.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:xe(s.createTime)}}(t)),_.resolve()}getNamedQuery(e,t){return _.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,function(s){return{name:s.name,query:id(s.bundledQuery),readTime:xe(s.readTime)}}(t)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class md{constructor(){this.overlays=new q(v.comparator),this.Ws=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qe();return _.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Qe();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),_.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),_.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ws.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ws.delete(r)),_.resolve()}getOverlaysForCollection(e,t,r){const s=Qe(),i=t.length+1,a=new v(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const u=o.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return _.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new q((c,l)=>c-l);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Qe(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const o=Qe(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>o.set(c,l)),!(o.size()>=s)););return _.resolve(o)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ws.get(s.largestBatchId).delete(r.key);this.Ws.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rd(t,r));let i=this.Ws.get(t);i===void 0&&(i=x(),this.Ws.set(t,i)),this.Ws.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _d{constructor(){this.sessionToken=Q.EMPTY_BYTE_STRING}getSessionToken(e){return _.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,_.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bs{constructor(){this.Gs=new G(Y.zs),this.js=new G(Y.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new Y(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new Y(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new v(new L([])),r=new Y(t,e),s=new Y(t,e+1),i=[];return this.js.forEachInRange([r,s],a=>{this.Ys(a),i.push(a.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new v(new L([])),r=new Y(t,e),s=new Y(t,e+1);let i=x();return this.js.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Y(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Y{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return v.comparator(e.key,t.key)||N(e.n_,t.n_)}static Hs(e,t){return N(e.n_,t.n_)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new G(Y.zs)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ed(i,t,r,s);this.mutationQueue.push(a);for(const o of s)this.r_=this.r_.add(new Y(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return _.resolve(a)}lookupMutationBatch(e,t){return _.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?ps:this.Wr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Y(t,0),s=new Y(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],a=>{const o=this.i_(a.n_);i.push(o)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new G(N);return t.forEach(s=>{const i=new Y(s,0),a=new Y(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,a],o=>{r=r.add(o.n_)})}),_.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;v.isDocumentKey(i)||(i=i.child(""));const a=new Y(new v(i),0);let o=new G(N);return this.r_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(o=o.add(u.n_)),!0)},a),_.resolve(this.__(o))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){A(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return _.forEach(t.mutations,s=>{const i=new Y(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new Y(t,0),s=this.r_.firstAfterOrEqual(r);return _.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gd{constructor(e){this.a_=e,this.docs=function(){return new q(v.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return _.resolve(r?r.document.mutableCopy():re.newInvalidDocument(t))}getEntries(e,t){let r=ce();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),_.resolve(r)}getAllEntries(e){let t=ce();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),_.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;H(t)?(i=L.fromString(Cr(t)),a=l=>kr(t,l)):(i=t.path,a=l=>wr(t,l));let o=ce();const u=new v(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||hc(lc(d),r)<=0||(s.has(d.key)||a(d))&&(o=o.insert(d.key,d.mutableCopy()))}return _.resolve(o)}getAllFromCollectionGroup(e,t,r,s){R(9500)}u_(e,t){return _.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new yd(this)}getSize(e){return _.resolve(this.size)}}class yd extends ld{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),_.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Td{constructor(e){this.persistence=e,this.c_=new Tt(t=>xo(t),No),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.l_=0,this.E_=new Bs,this.targetCount=0,this.h_=st.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),_.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new st(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.vs(t),_.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((a,o)=>{o.sequenceNumber<=t&&r.get(o.targetId)===null&&(this.c_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return _.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),_.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),_.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return _.resolve(r)}containsKey(e,t){return _.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oo{constructor(e,t){this.T_={},this.overlays={},this.P_=new Ar(0),this.R_=!1,this.R_=!0,this.I_=new _d,this.referenceDelegate=e(this),this.A_=new Td(this),this.indexManager=new ad,this.remoteDocumentCache=function(s){return new gd(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new sd(t),this.d_=new fd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new md,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new pd(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);const s=new Ed(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return _.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class Ed extends dl{constructor(e){super(),this.currentSequenceNumber=e}}class $s{constructor(e){this.persistence=e,this.g_=new Bs,this.y_=null}static w_(e){return new $s(e)}get b_(){if(this.y_)return this.y_;throw R(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),_.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),_.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.b_,r=>{const s=v.fromPath(r);return this.S_(e,s).next(i=>{i||t.removeEntry(s,b.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.S_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}S_(e,t){return _.or([()=>_.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class lr{constructor(e,t){this.persistence=e,this.v_=new Tt(r=>td(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=yl(this,t)}static w_(e,t){return new lr(e,t)}f_(){}m_(e){return _.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return _.forEach(this.v_,(r,s)=>this.Fs(e,r,s).next(i=>i?_.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,a=>this.Fs(e,a,t).next(o=>{o||(r++,i.removeEntry(a,b.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),_.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),_.resolve()}removeReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),_.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),_.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gn(e.data.value)),t}Fs(e,t,r){return _.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return _.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zs{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=x(),s=x();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zs(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function wd(n,e){return v.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Id{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ad{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return vu()?8:fl(Ru())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.So(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.vo(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Id;return this.Do(e,t,a).next(o=>{if(i.result=o,this.po)return this.xo(e,t,a,o.size)})}).next(()=>i.result)}xo(e,t,r,s){return H(t)?_.resolve():r.documentReadCount<this.yo?(At()<=Ue.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),_.resolve()):(At()<=Ue.DEBUG&&E("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(At()<=Ue.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ce(t))):_.resolve())}So(e,t){if(H(t))return _.resolve(null);let r=t;if(wi(r))return _.resolve(null);let s=Ce(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Zr(r,null,"F"),s=Ce(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const o=x(...a);return this.bo.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Co(r,u);return this.Fo(r,l,o,c.readTime)?this.So(e,Zr(r,null,"F")):this.Oo(e,l,r,c)}))})))}vo(e,t,r,s){return(H(t)?function(a){for(const o of a.stages){if(o instanceof _t||o instanceof Ui)return!1;if(o instanceof Sr){if(o.condition instanceof yo&&o.condition._expr.name==="exists"&&o.condition._expr.params[0]instanceof Bt&&o.condition._expr.params[0].fieldName===Pe)continue;return!1}}return!0}(t):wi(t))||s.isEqual(b.min())?_.resolve(null):this.bo.getDocuments(e,r).next(i=>{const a=this.Co(t,i);return this.Fo(t,a,r,s)?_.resolve(null):(At()<=Ue.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mi(t)),this.Oo(e,a,t,cc(s,pn)).next(o=>o))})}Co(e,t){let r,s;return H(e)?(r=new G(wd),s=i=>kr(e,i)):(r=new G(ws(e)),s=i=>wr(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Fo(e,t,r,s){if(H(e))return function(o){return o.stages.some(u=>u instanceof _t||u instanceof Ui)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return At()<=Ue.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Mi(t)),this.bo.getDocumentsMatchingQuery(e,t,tt.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const js="LocalStore",vd=3e8;class Rd{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new q(N),this.Lo=new Tt(i=>xo(i),No),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dd(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function Vd(n,e,t,r){return new Rd(n,e,t,r)}async function Lo(n,e){const t=S(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],o=[];let u=x();for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(r,u).next(c=>({qo:c,removedBatchIds:a,addedBatchIds:o}))})})}function Pd(n,e){const t=S(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(o,u,c,l){const d=c.batch,f=d.keys();let g=_.resolve();return f.forEach(y=>{g=g.next(()=>l.getEntry(u,y)).next(V=>{const I=c.docVersions.get(y);A(I!==null,48541),V.version.compareTo(I)<0&&(d.applyToRemoteDocument(V,c),V.isValidDocument()&&(V.setReadTime(c.commitVersion),l.addEntry(V)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(u,d))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let u=x();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(u=u.add(o.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Uo(n){const e=S(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function bd(n,e){const t=S(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const o=[];e.targetChanges.forEach((l,d)=>{const f=s.get(d);if(!f)return;o.push(t.A_.removeMatchingKeys(i,l.removedDocuments,d).next(()=>t.A_.addMatchingKeys(i,l.addedDocuments,d)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Q.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(d,g),function(V,I,C){return V.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=vd?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,l)&&o.push(t.A_.updateTargetData(i,g))});let u=ce(),c=x();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),o.push(Sd(i,a,e.documentUpdates).next(l=>{u=l.$o,c=l.Ko})),!r.isEqual(b.min())){const l=t.A_.getLastRemoteSnapshotVersion(i).next(d=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));o.push(l)}return _.waitFor(o).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.No=s,i))}function Sd(n,e,t){let r=x(),s=x();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ce();return t.forEach((o,u)=>{const c=i.get(o);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(o)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(o,u.readTime),a=a.insert(o,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),a=a.insert(o,u)):E(js,"Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",u.version)}),{$o:a,Ko:s}})}function Cd(n,e){const t=S(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ps),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xd(n,e){const t=S(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):t.A_.allocateTargetId(r).next(a=>(s=new Fe(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function as(n,e,t){const r=S(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qt(a))throw a;E(js,`Failed to update sequence numbers for target ${e}: ${a}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function qi(n,e,t){const r=S(n);let s=b.min(),i=x();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,c,l){const d=S(u),f=d.Lo.get(l);return f!==void 0?_.resolve(d.No.get(f)):d.A_.getTargetData(c,l)}(r,a,H(e)?e:Ce(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(a,o.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(a,e,t?s:b.min(),t?i:x())).next(o=>(Nd(r,o),{documents:o,Qo:i})))}function Nd(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||b.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
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
 */class kd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(ze(t),this.Zo=!1):E("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Oe="RemoteStore";class Dd{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new st(1e3),this.ua=new st(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(a=>{r.enqueueAndForget(async()=>{wt(this)&&(E(Oe,"Restarting streams for network reachability change."),await async function(u){const c=S(u);c.ca.add(4),await xn(c),c.ha.set("Unknown"),c.ca.delete(4),await Dr(c)}(this))})}),this.ha=new kd(r,s)}}async function Dr(n){if(wt(n))for(const e of n.la)await e(!0)}async function xn(n){for(const e of n.la)await e(!1)}function os(n,e){return n._a.get(e)||void 0}function Mo(n,e){const t=S(n),r=os(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(o,u){const c=os(o,u);c!==void 0&&o.oa.delete(c);const l=function(f,g){return g%2!=0?f.ua.next():f.aa.next()}(o,u);return o._a.set(u,l),o.oa.set(l,u),l}(t,e.targetId);E(Oe,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Fe(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),Ks(t)?Ws(t):Gt(t).Jt()&&Qs(t,i)}function Gs(n,e){const t=S(n),r=Gt(t),s=os(t,e);E(Oe,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&Fo(t,s),t.sa.size===0&&(r.Jt()?r.Xt():wt(t)&&t.ha.set("Unknown"))}function Qs(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void E(Oe,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Gt(n).Tn(e)}function Fo(n,e){n.Ta.H(e),Gt(n).Pn(e)}function Ws(n){n.Ta=new bc({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):x()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),Gt(n).start(),n.ha.Xo()}function Ks(n){return wt(n)&&!Gt(n).Ht()&&n.sa.size>0}function wt(n){return S(n).ca.size===0}function qo(n){n.Ta=void 0}async function Od(n){n.ha.set("Online")}async function Ld(n){n.sa.forEach((e,t)=>{Qs(n,e)})}async function Ud(n,e){qo(n),Ks(n)?(n.ha.na(e),Ws(n)):n.ha.set("Unknown")}async function Md(n,e,t){if(n.ha.set("Online"),e instanceof Wa&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const o of i.targetIds){if(s.sa.has(o)){const u=s.oa.get(o);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s._a.delete(u),s.oa.delete(o)),s.sa.delete(o)}s.Ta.removeTarget(o)}}(n,e)}catch(r){E(Oe,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hr(n,r)}else if(e instanceof Wn?n.Ta.se(e):e instanceof Qa?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(b.min()))try{const r=await Uo(n.localStore);t.compareTo(r)>=0&&await function(i,a){const o=i.Ta.de(a);o.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.sa.get(l);d&&i.sa.set(l,d.withResumeToken(c.resumeToken,a))}}),o.targetMismatches.forEach((c,l)=>{const d=i.sa.get(c);if(!d)return;i.sa.set(c,d.withResumeToken(Q.EMPTY_BYTE_STRING,d.snapshotVersion)),Fo(i,c);const f=new Fe(d.target,c,l,d.sequenceNumber);Qs(i,f)});const u=function(l,d){const f=new Map;d.targetChanges.forEach((y,V)=>{const I=l.oa.get(V);I!==void 0&&f.set(I,y)});let g=new q(N);return d.targetMismatches.forEach((y,V)=>{const I=l.oa.get(y);I!==void 0&&(g=g.insert(I,V))}),new bn(d.snapshotVersion,f,g,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)}(i,o);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){E(Oe,"Failed to raise snapshot:",r),await hr(n,r)}}async function hr(n,e,t){if(!qt(e))throw e;n.ca.add(1),await xn(n),n.ha.set("Offline"),t||(t=()=>Uo(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E(Oe,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await Dr(n)})}function Bo(n,e){return e().catch(t=>hr(n,t,e))}async function Or(n){const e=S(n),t=it(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:ps;for(;Fd(e);)try{const s=await Cd(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,qd(e,s)}catch(s){await hr(e,s)}$o(e)&&zo(e)}function Fd(n){return wt(n)&&n.ia.length<10}function qd(n,e){n.ia.push(e);const t=it(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function $o(n){return wt(n)&&!it(n).Ht()&&n.ia.length>0}function zo(n){it(n).start()}async function Bd(n){it(n).dn()}async function $d(n){const e=it(n);for(const t of n.ia)e.In(t.mutations)}async function zd(n,e,t){const r=n.ia.shift(),s=qs.from(r,e,t);await Bo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Or(n)}async function jd(n,e){e&&it(n).Rn&&await async function(r,s){if(function(a){return Ec(a)&&a!==p.ABORTED}(s.code)){const i=r.ia.shift();it(r).Zt(),await Bo(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Or(r)}}(n,e),$o(n)&&zo(n)}async function Bi(n,e){const t=S(n);t.asyncQueue.verifyOperationInProgress(),E(Oe,"RemoteStore received new credentials");const r=wt(t);t.ca.add(3),await xn(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Dr(t)}async function Gd(n,e){const t=S(n);e?(t.ca.delete(2),await Dr(t)):e||(t.ca.add(2),await xn(t),t.ha.set("Unknown"))}function Gt(n){return n.Pa||(n.Pa=function(t,r,s){const i=S(t);return i.mn(),new sl(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:Od.bind(null,n),lt:Ld.bind(null,n),ht:Ud.bind(null,n),hn:Md.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),Ks(n)?Ws(n):n.ha.set("Unknown")):(await n.Pa.stop(),qo(n))})),n.Pa}function it(n){return n.Ra||(n.Ra=function(t,r,s){const i=S(t);return i.mn(),new il(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:Bd.bind(null,n),ht:jd.bind(null,n),An:$d.bind(null,n),Vn:zd.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await Or(n)):(await n.Ra.stop(),n.ia.length>0&&(E(Oe,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hs{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,o=new Hs(e,t,a,s,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(n,e){if(ze("AsyncQueue",`${e}: ${n}`),qt(n))return new w(p.UNAVAILABLE,`${e}: ${n}`);throw n}class $i{constructor(){this.activeTargetIds=Rc()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wd{constructor(){this.du=new $i,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new $i,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ht{static emptySet(e){return new ht(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||v.comparator(t.key,r.key):(t,r)=>v.comparator(t.key,r.key),this.keyedMap=Rt(),this.sortedSet=new q(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ht;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zi{constructor(){this.mu=new q(v.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):R(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ut{constructor(e,t,r,s,i,a,o,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(o=>{a.push({type:0,doc:o})}),new Ut(e,t,ht.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kd{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.Su())}}class Hd{constructor(){this.queries=ji(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,r){const s=S(t),i=s.queries;s.queries=ji(),i.forEach((a,o)=>{for(const u of o.wu)u.onError(r)})})(this,new w(p.ABORTED,"Firestore shutting down"))}}function ji(){return new Tt(n=>Co(n),Nr)}async function Xd(n,e){const t=S(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(r=2):(i=new Kd,r=e.Su()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const o=Xs(a,`Initialization of query '${H(e.query)?qe(e.query):nn(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Ys(t)}async function Yd(n,e){const t=S(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wu.indexOf(e);a>=0&&(i.wu.splice(a,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jd(n,e){const t=S(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const o of a.wu)o.xu(s)&&(r=!0);a.yu=s}}r&&Ys(t)}function Zd(n,e,t){const r=S(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function Ys(n){n.vu.forEach(e=>{e.next()})}var us;(function(n){n.Default="default",n.Cache="cache"})(us||(us={}));class ef{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ut(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=Ut.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==us.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jo{constructor(e){this.key=e}}class Go{constructor(e){this.key=e}}class tf{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=x(),this.mutatedKeys=x(),this.Hu=H(e)?is(e):ws(e),this.Ju=new ht(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new zi,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal((d,f)=>{const g=s.get(d),y=ud(this.query,f)?f:null,V=!!g&&this.mutatedKeys.has(g.key),I=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;g&&y?g.data.isEqual(y.data)?V!==I&&(r.track({type:3,doc:y}),C=!0):this.tc(g,y)||(r.track({type:2,doc:y}),C=!0,(u&&this.Hu(y,u)>0||c&&this.Hu(y,c)<0)&&(o=!0)):!g&&y?(r.track({type:0,doc:y}),C=!0):g&&!y&&(r.track({type:1,doc:g}),C=!0,(u||c)&&(o=!0)),C&&(y?(a=a.add(y),i=I?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))});const l=this.nc(this.query);if(l)if(H(this.query)){const d=[];a.forEach(y=>d.push(y));const f=Do(this.query,d);let g=new ht(is(this.query));for(const y of f)g=g.add(y);a.forEach(y=>{g.has(y.key)||(i=i.delete(y.key),r.track({type:1,doc:y}))}),a=g}else{const d=this.rc(this.query);for(;a.size>l;){const f=d==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}}return{Ju:a,Xu:r,Fo:o,mutatedKeys:i}}nc(e){return H(e)?zr(e)?.limit:e.limit||void 0}rc(e){if(H(e)){const t=zr(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){if(H(e)){const r=zr(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const a=e.Xu.gu();a.sort((l,d)=>function(g,y){const V=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R(20277,{ye:I})}};return V(g)-V(y)}(l.type,d.type)||this.Hu(l.doc,d.doc)),this.sc(r),s=s??!1;const o=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,a.length!==0||c?{snapshot:new Ut(this.query,e.Ju,i,a,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:o}:{oc:o}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new zi,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=x(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new Go(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new jo(r))}),t}uc(e){this.Gu=e.Qo,this.ju=x();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return Ut.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const Js="SyncEngine";class nf{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rf{constructor(e){this.key=e,this.lc=!1}}class sf{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ec={},this.hc=new Tt(o=>Co(o),Nr),this.Tc=new Map,this.Pc=new Set,this.Rc=new q(v.comparator),this.Ic=new Map,this.Ac=new Bs,this.Vc={},this.dc=new Map,this.fc=st.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function af(n,e,t=!0){const r=Yo(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await Qo(r,e,t,!0),s}async function of(n,e){const t=Yo(n);await Qo(t,e,!0,!1)}async function Qo(n,e,t,r){const s=await xd(n.localStore,H(e)?e:Ce(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let o;return r&&(o=await uf(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Mo(n.remoteStore,s),o}async function uf(n,e,t,r,s){n.gc=(d,f,g)=>async function(V,I,C,D){let O=I.view.Zu(C);O.Fo&&(O=await qi(V.localStore,I.query,!1).then(({documents:Ge})=>I.view.Zu(Ge,O)));const U=D&&D.targetChanges.get(I.targetId),Le=D&&D.targetMismatches.get(I.targetId)!=null,Ie=I.view.applyChanges(O,V.isPrimaryClient,U,Le);return Qi(V,I.targetId,Ie.oc),Ie.snapshot}(n,d,f,g);const i=await qi(n.localStore,e,!0),a=new tf(e,i.Qo),o=a.Zu(i.documents),u=Sn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=a.applyChanges(o,n.isPrimaryClient,u);Qi(n,t,c.oc);const l=new nf(e,t,a);return n.hc.set(e,l),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),c.snapshot}async function cf(n,e,t){const r=S(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(a=>!Nr(a,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await as(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Gs(r.remoteStore,s.targetId),cs(r,s.targetId)}).catch(Ft)):(cs(r,s.targetId),await as(r.localStore,s.targetId,!0))}async function lf(n,e){const t=S(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gs(t.remoteStore,r.targetId))}async function hf(n,e,t){const r=yf(n);try{const s=await function(a,o){const u=S(a),c=M.now(),l=o.reduce((g,y)=>g.add(y.key),x());let d,f;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=ce(),V=x();return u.Uo.getEntries(g,l).next(I=>{y=I,y.forEach((C,D)=>{D.isValidDocument()||(V=V.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,y)).next(I=>{d=I;const C=[];for(const D of o){const O=Ju(D,d.get(D.key).overlayedDocument);O!=null&&C.push(new yt(D.key,O,Ra(O.value.mapValue),ve.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,C,o)}).next(I=>{f=I;const C=I.applyToLocalDocumentSet(d,V);return u.documentOverlayCache.saveOverlays(g,I.batchId,C)})}).then(()=>({batchId:f.batchId,changes:ja(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,o,u){let c=a.Vc[a.currentUser.toKey()];c||(c=new q(N)),c=c.insert(o,u),a.Vc[a.currentUser.toKey()]=c}(r,s.batchId,t),await Nn(r,s.changes),await Or(r.remoteStore)}catch(s){const i=Xs(s,"Failed to persist write");t.reject(i)}}async function Wo(n,e){const t=S(n);try{const r=await bd(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ic.get(i);a&&(A(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lc=!0:s.modifiedDocuments.size>0?A(a.lc,14607):s.removedDocuments.size>0&&(A(a.lc,42227),a.lc=!1))}),await Nn(t,r,e)}catch(r){await Ft(r)}}function Gi(n,e,t){const r=S(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,a)=>{const o=a.view.Du(e);o.snapshot&&s.push(o.snapshot)}),function(a,o){const u=S(a);u.onlineState=o;let c=!1;u.queries.forEach((l,d)=>{for(const f of d.wu)f.Du(o)&&(c=!0)}),c&&Ys(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function df(n,e,t){const r=S(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let a=new q(v.comparator);a=a.insert(i,re.newNoDocument(i,b.min()));const o=x().add(i),u=new bn(b.min(),new Map,new q(N),a,ce(),o);await Wo(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),Zs(r)}else await as(r.localStore,e,!1).then(()=>cs(r,e,t)).catch(Ft)}async function ff(n,e){const t=S(n),r=e.batch.batchId;try{const s=await Pd(t.localStore,e);Ho(t,r,null),Ko(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Nn(t,s)}catch(s){await Ft(s)}}async function mf(n,e,t){const r=S(n);try{const s=await function(a,o){const u=S(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,o).next(d=>(A(d!==null,37113),l=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,e);Ho(r,e,t),Ko(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Nn(r,s)}catch(s){await Ft(s)}}function Ko(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function Ho(n,e,t){const r=S(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||Xo(n,r)})}function Xo(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Gs(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),Zs(n))}function Qi(n,e,t){for(const r of t)r instanceof jo?(n.Ac.addReference(r.key,e),_f(n,r)):r instanceof Go?(E(Js,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||Xo(n,r.key)):R(19791,{wc:r})}function _f(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(E(Js,"New document in limbo: "+t),n.Pc.add(r),Zs(n))}function Zs(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new v(L.fromString(e)),r=n.fc.next();n.Ic.set(r,new rf(t)),n.Rc=n.Rc.insert(t,r),Mo(n.remoteStore,new Fe(Ce(Ba(t.path)),r,"TargetPurposeLimboResolution",Ar.yn))}}async function Nn(n,e,t){const r=S(n),s=[],i=[],a=[];r.hc.isEmpty()||(r.hc.forEach((o,u)=>{a.push(r.gc(u,e,t).then(c=>{if((c||t)&&r.isPrimaryClient){const l=c?!c.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,l?"current":"not-current")}if(c){s.push(c);const l=zs.fo(u.targetId,c);i.push(l)}}))}),await Promise.all(a),r.Ec.hn(s),await async function(u,c){const l=S(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>_.forEach(c,f=>_.forEach(f.Ao,g=>l.persistence.referenceDelegate.addReference(d,f.targetId,g)).next(()=>_.forEach(f.Vo,g=>l.persistence.referenceDelegate.removeReference(d,f.targetId,g)))))}catch(d){if(!qt(d))throw d;E(js,"Failed to update sequence numbers: "+d)}for(const d of c){const f=d.targetId;if(!d.fromCache){const g=l.No.get(f),y=g.snapshotVersion,V=g.withLastLimboFreeSnapshotVersion(y);l.No=l.No.insert(f,V)}}}(r.localStore,i))}async function pf(n,e){const t=S(n);if(!t.currentUser.isEqual(e)){E(Js,"User change. New user:",e.toKey());const r=await Lo(t.localStore,e);t.currentUser=e,function(i,a){i.dc.forEach(o=>{o.forEach(u=>{u.reject(new w(p.CANCELLED,a))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nn(t,r.qo)}}function gf(n,e){const t=S(n),r=t.Ic.get(e);if(r&&r.lc)return x().add(r.key);{let s=x();const i=t.Tc.get(e);if(!i)return s;for(const a of i??[]){const o=t.hc.get(a);s=s.unionWith(o.view.Yu)}return s}}function Yo(n){const e=S(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=df.bind(null,e),e.Ec.hn=Jd.bind(null,e.eventManager),e.Ec.yc=Zd.bind(null,e.eventManager),e}function yf(n){const e=S(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ff.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mf.bind(null,e),e}class dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ir(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return Vd(this.persistence,new Ad,e.initialUser,this.serializer)}vc(e){return new Oo($s.w_,this.serializer)}Sc(e){return new Wd}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dr.provider={build:()=>new dr};class Tf extends dr{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){A(this.persistence.referenceDelegate instanceof lr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pl(r,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?oe.withCacheSize(this.cacheSizeBytes):oe.DEFAULT;return new Oo(r=>lr.w_(r,t),this.serializer)}}class ls{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pf.bind(null,this.syncEngine),await Gd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Hd}()}createDatastore(e){const t=Ir(e.databaseInfo.databaseId),r=rl(e.databaseInfo);return ul(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,o){return new Dd(r,s,i,a,o)}(this.localStore,this.datastore,e.asyncQueue,t=>Gi(this.syncEngine,t,0),function(){return Si.Je()?new Si:new Zc}())}createSyncEngine(e,t){return function(s,i,a,o,u,c,l){const d=new sf(s,i,a,o,u,c);return l&&(d.mc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=S(t);E(Oe,"RemoteStore shutting down."),r.ca.add(5),await xn(r),r.Ea.shutdown(),r.ha.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ls.provider={build:()=>new ls};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const at="FirestoreClient";class Ef{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ne.UNAUTHENTICATED,this.clientId=ms.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{E(at,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(E(at,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Xs(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gr(n,e){n.asyncQueue.verifyOperationInProgress(),E(at,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Lo(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Wi(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wf(n);E(at,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bi(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Bi(e.remoteStore,s)),n._onlineComponents=e}async function wf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){E(at,"Using user provided OfflineComponentProvider");try{await Gr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===p.FAILED_PRECONDITION||s.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Re("Error using user provided cache. Falling back to memory cache: "+t),await Gr(n,new dr)}}else E(at,"Using default OfflineComponentProvider"),await Gr(n,new Tf(void 0));return n._offlineComponents}async function Jo(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(E(at,"Using user provided OnlineComponentProvider"),await Wi(n,n._uninitializedComponentsProvider._online)):(E(at,"Using default OnlineComponentProvider"),await Wi(n,new ls))),n._onlineComponents}function If(n){return Jo(n).then(e=>e.syncEngine)}async function Af(n){const e=await Jo(n),t=e.eventManager;return t.onListen=af.bind(null,e.syncEngine),t.onUnlisten=cf.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=of.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lf.bind(null,e.syncEngine),t}function vf(n,e,t={}){const r=new Ke;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,o,u,c){const l=new Qd({next:f=>{l.Aa(),a.enqueueAndForget(()=>Yd(i,d)),f.fromCache&&u.source==="server"?c.reject(new w(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new ef(o instanceof sn?Zh(o):o,l,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Xd(i,d)}(await Af(n),n.asyncQueue,e,t,r)),r.promise}function Rf(n,e){const t=new Ke;return n.asyncQueue.enqueueAndForget(async()=>hf(await If(n),e,t)),t.promise}/**
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
 */let Zo=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Vr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Vf=class extends Zo{data(){return super.data()}};/**
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
 */class Pf{convertValue(e,t="none"){switch(W(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ze(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw R(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return gt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[ln].arrayValue?.values?.map(r=>B(r.doubleValue));return new le(t)}convertGeoPoint(e){return new Ne(B(e.latitude),B(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(kt(e));default:return null}}convertTimestamp(e){const t=Je(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=L.fromString(e);A(eo(r),9688,{name:e});const s=new un(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(t)||ze(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function eu(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */const Ki="AsyncQueue";class Hi{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new io(this,"async_queue_retry"),this.jc=()=>{const r=jr();r&&E(Ki,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Hc=e;const t=jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new Ke;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!qt(e))throw e;E(Ki,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Wc=!0,e().catch(r=>{throw this.Qc=r,this.Wc=!1,ze("INTERNAL UNHANDLED ERROR: ",Xi(r)),r}).then(r=>(this.Wc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=Hs.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Qc&&R(47125,{el:Xi(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Xi(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class kn extends vr{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Hi,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hi(e),this._firestoreClient=void 0,await e}}}function Ym(n,e){const t=typeof n=="object"?n:aa(),r=typeof n=="string"?n:Zn,s=oa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ha("firestore");i&&Tl(s,...i)}return s}function tu(n){if(n._terminated)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bf(n),n._firestoreClient}function bf(n){const e=n._freezeSettings(),t=ll(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ef(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Sf extends Pf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ee(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}class $n{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ct extends Zo{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new w(p.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ct._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ct._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ct._jsonSchema={type:j("string",Ct._jsonSchemaVersion),bundleSource:j("string","DocumentSnapshot"),bundleName:j("string"),bundle:j("string")};class Xn extends Ct{data(e={}){return super.data(e)}}class xt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new $n(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xn(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new w(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(o=>{H(s._snapshot.query)?is(s._snapshot.query):ws(s.query._query);const u=new Xn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $n(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const u=new Xn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $n(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),l=a.indexOf(o.doc.key)),{type:Cf(o.type),doc:u,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new w(p.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ms.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Cf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */xt._jsonSchemaVersion="firestore/querySnapshot/1.0",xt._jsonSchema={type:j("string",xt._jsonSchemaVersion),bundleSource:j("string","QuerySnapshot"),bundleName:j("string"),bundle:j("string")};/**
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
 */function xf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Jm(n){n=mt(n,Rr);const e=mt(n.firestore,kn),t=tu(e),r=new Sf(e);return xf(n._query),vf(t,n._query).then(s=>new xt(e,r,n,s))}function Zm(n,e,t){n=mt(n,X);const r=mt(n.firestore,kn),s=eu(n.converter,e,t),i=lo(r);return ei(r,[ho(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ve.none())])}function e_(n){return ei(mt(n.firestore,kn),[new Es(n._key,ve.none())])}function t_(n,e){const t=mt(n.firestore,kn),r=El(n),s=eu(n.converter,e),i=lo(n.firestore);return ei(t,[ho(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ve.exists(!1))]).then(()=>r)}function ei(n,e){const t=tu(n);return Rf(t,e)}const Yi="@firebase/firestore",Ji="4.17.1";(function(e,t=!0){Nu(ca),ua(new ma("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),o=new kn(new Hc(r.getProvider("auth-internal")),new Jc(a,r.getProvider("app-check-internal")),Bu(a,s),a);return i={useFetchStreams:t,...i},o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yn(Yi,Ji,e),Yn(Yi,Ji,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
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
 */const nu="firebasestorage.googleapis.com",ru="storageBucket",Nf=2*60*1e3,kf=10*60*1e3,Df=1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $ extends la{constructor(e,t,r=0){super(Qr(e),`Firebase Storage: ${t} (${Qr(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var F;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(F||(F={}));function Qr(n){return"storage/"+n}function ti(){const n="An unknown error occurred, please check the error payload for server response.";return new $(F.UNKNOWN,n)}function Of(n){return new $(F.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Lf(n){return new $(F.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Uf(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $(F.UNAUTHENTICATED,n)}function Mf(){return new $(F.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ff(n){return new $(F.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function su(){return new $(F.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iu(){return new $(F.CANCELED,"User canceled the upload/download.")}function qf(n){return new $(F.INVALID_URL,"Invalid URL '"+n+"'.")}function Bf(n){return new $(F.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $f(){return new $(F.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ru+"' property when initializing the app?")}function au(){return new $(F.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zf(){return new $(F.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function jf(){return new $(F.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gf(n){return new $(F.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hs(n){return new $(F.INVALID_ARGUMENT,n)}function ou(){return new $(F.APP_DELETED,"The Firebase app was deleted.")}function Qf(n){return new $(F.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function on(n,e){return new $(F.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xt(n){throw new $(F.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ge.makeFromUrl(e,t)}catch{return new ge(e,"")}if(r.path==="")return r;throw Bf(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function c(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${l}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},V=t===nu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,I="([^?#]*)",C=new RegExp(`^https?://${V}/${s}/${I}`,"i"),O=[{regex:o,indices:u,postModify:i},{regex:g,indices:y,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let U=0;U<O.length;U++){const Le=O[U],Ie=Le.regex.exec(e);if(Ie){const Ge=Ie[Le.indices.bucket];let Wt=Ie[Le.indices.path];Wt||(Wt=""),r=new ge(Ge,Wt),Le.postModify(r);break}}if(r==null)throw qf(e);return r}}class Wf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Kf(n,e,t){let r=1,s=null,i=null,a=!1,o=0;function u(){return o===2}let c=!1;function l(...I){c||(c=!0,e.apply(null,I))}function d(I){s=setTimeout(()=>{s=null,n(g,u())},I)}function f(){i&&clearTimeout(i)}function g(I,...C){if(c){f();return}if(I){f(),l.call(null,I,...C);return}if(u()||a){f(),l.call(null,I,...C);return}r<64&&(r*=2);let O;o===1?(o=2,O=0):O=(r+Math.random())*1e3,d(O)}let y=!1;function V(I){y||(y=!0,f(),!c&&(s!==null?(I||(o=2),clearTimeout(s),d(0)):I||(o=1)))}return d(0),i=setTimeout(()=>{a=!0,V(!0)},t),V}function Hf(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Xf(n){return n!==void 0}function Yf(n){return typeof n=="function"}function Jf(n){return typeof n=="object"&&!Array.isArray(n)}function Lr(n){return typeof n=="string"||n instanceof String}function Zi(n){return ni()&&n instanceof Blob}function ni(){return typeof Blob<"u"}function ea(n,e,t,r){if(r<e)throw hs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw hs(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Dn(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function uu(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var dt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(dt||(dt={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function cu(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zf{constructor(e,t,r,s,i,a,o,u,c,l,d,f=!0,g=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=d,this.retry=f,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,V)=>{this.resolve_=y,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=o=>{const u=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const o=i.getErrorCode()===dt.NO_ERROR,u=i.getStatus();if(!o||cu(u,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===dt.ABORT;r(!1,new zn(!1,null,l));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new zn(c,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,o=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(o,o.getResponse());Xf(u)?i(u):i()}catch(u){a(u)}else if(o!==null){const u=ti();u.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,u)):a(u)}else if(s.canceled){const u=this.appDelete_?ou():iu();a(u)}else{const u=su();a(u)}};this.canceled_?t(!1,new zn(!1,null,!0)):this.backoffId_=Kf(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zn{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function em(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function tm(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function rm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function sm(n,e,t,r,s,i,a=!0,o=!1){const u=uu(n.urlParams),c=n.url+u,l=Object.assign({},n.headers);return nm(l,e),em(l,t),tm(l,i),rm(l,r),new Zf(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function im(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function am(...n){const e=im();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ni())return new Blob(n);throw new $(F.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function om(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function um(n){if(typeof atob>"u")throw Gf("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wr{constructor(e,t){this.data=e,this.contentType=t||null}}function cm(n,e){switch(n){case Se.RAW:return new Wr(lu(e));case Se.BASE64:case Se.BASE64URL:return new Wr(hu(n,e));case Se.DATA_URL:return new Wr(hm(e),dm(e))}throw ti()}function lu(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lm(n){let e;try{e=decodeURIComponent(n)}catch{throw on(Se.DATA_URL,"Malformed data URL.")}return lu(e)}function hu(n,e){switch(n){case Se.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw on(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Se.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw on(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=um(e)}catch(s){throw s.message.includes("polyfill")?s:on(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class du{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw on(Se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=fm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hm(n){const e=new du(n);return e.base64?hu(Se.BASE64,e.rest):lm(e.rest)}function dm(n){return new du(n).contentType}function fm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class We{constructor(e,t){let r=0,s="";Zi(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Zi(this.data_)){const r=this.data_,s=om(r,e,t);return s===null?null:new We(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new We(r,!0)}}static getBlob(...e){if(ni()){const t=e.map(r=>r instanceof We?r.data_:r);return new We(am.apply(null,t))}else{const t=e.map(a=>Lr(a)?cm(Se.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let o=0;o<a.length;o++)s[i++]=a[o]}),new We(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function fu(n){let e;try{e=JSON.parse(n)}catch{return null}return Jf(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function _m(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function mu(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function pm(n,e){return e}class ie{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||pm}}let jn=null;function gm(n){return!Lr(n)||n.length<2?n:mu(n)}function _u(){if(jn)return jn;const n=[];n.push(new ie("bucket")),n.push(new ie("generation")),n.push(new ie("metageneration")),n.push(new ie("name","fullPath",!0));function e(i,a){return gm(a)}const t=new ie("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new ie("size");return s.xform=r,n.push(s),n.push(new ie("timeCreated")),n.push(new ie("updated")),n.push(new ie("md5Hash",null,!0)),n.push(new ie("cacheControl",null,!0)),n.push(new ie("contentDisposition",null,!0)),n.push(new ie("contentEncoding",null,!0)),n.push(new ie("contentLanguage",null,!0)),n.push(new ie("contentType",null,!0)),n.push(new ie("metadata","customMetadata",!0)),jn=n,jn}function ym(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ge(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Tm(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return ym(r,n),r}function pu(n,e,t){const r=fu(e);return r===null?null:Tm(n,r,t)}function Em(n,e,t,r){const s=fu(e);if(s===null||!Lr(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(c=>{const l=n.bucket,d=n.fullPath,f="/b/"+a(l)+"/o/"+a(d),g=Dn(f,t,r),y=uu({alt:"media",token:c});return g+y})[0]}function gu(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Qt{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Be(n){if(!n)throw ti()}function ri(n,e){function t(r,s){const i=pu(n,s,e);return Be(i!==null),i}return t}function wm(n,e){function t(r,s){const i=pu(n,s,e);return Be(i!==null),Em(i,s,n.host,n._protocol)}return t}function On(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Mf():s=Uf():t.getStatus()===402?s=Lf(n.bucket):t.getStatus()===403?s=Ff(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function yu(n){const e=On(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Of(n.path)),i.serverResponse=s.serverResponse,i}return t}function Im(n,e,t){const r=e.fullServerUrl(),s=Dn(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new Qt(s,i,ri(n,t),a);return o.errorHandler=yu(e),o}function Am(n,e,t){const r=e.fullServerUrl(),s=Dn(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new Qt(s,i,wm(n,t),a);return o.errorHandler=yu(e),o}function vm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Tu(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=vm(null,e)),r}function Rm(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let O="";for(let U=0;U<2;U++)O=O+Math.random().toString().slice(2);return O}const u=o();a["Content-Type"]="multipart/related; boundary="+u;const c=Tu(e,r,s),l=gu(c,t),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+u+"--",g=We.getBlob(d,r,f);if(g===null)throw au();const y={name:c.fullPath},V=Dn(i,n.host,n._protocol),I="POST",C=n.maxUploadRetryTime,D=new Qt(V,I,ri(n,t),C);return D.urlParams=y,D.headers=a,D.body=g.uploadData(),D.errorHandler=On(e),D}class fr{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function si(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Be(!1)}return Be(!!t&&(e||["active"]).indexOf(t)!==-1),t}function Vm(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=Tu(e,r,s),o={name:a.fullPath},u=Dn(i,n.host,n._protocol),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},d=gu(a,t),f=n.maxUploadRetryTime;function g(V){si(V);let I;try{I=V.getResponseHeader("X-Goog-Upload-URL")}catch{Be(!1)}return Be(Lr(I)),I}const y=new Qt(u,c,g,f);return y.urlParams=o,y.headers=l,y.body=d,y.errorHandler=On(e),y}function Pm(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const l=si(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Be(!1)}d||Be(!1);const f=Number(d);return Be(!isNaN(f)),new fr(f,r.size(),l==="final")}const a="POST",o=n.maxUploadRetryTime,u=new Qt(t,a,i,o);return u.headers=s,u.errorHandler=On(e),u}const ta=256*1024;function bm(n,e,t,r,s,i,a,o){const u=new fr(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw zf();const c=u.total-u.current;let l=c;s>0&&(l=Math.min(l,s));const d=u.current,f=d+l;let g="";l===0?g="finalize":c===l?g="upload, finalize":g="upload";const y={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${u.current}`},V=r.slice(d,f);if(V===null)throw au();function I(U,Le){const Ie=si(U,["active","final"]),Ge=u.current+l,Wt=r.size();let Ur;return Ie==="final"?Ur=ri(e,i)(U,Le):Ur=null,new fr(Ge,Wt,Ie==="final",Ur)}const C="POST",D=e.maxUploadRetryTime,O=new Qt(t,C,I,D);return O.headers=y,O.body=V.uploadData(),O.progressCallback=o||null,O.errorHandler=On(n),O}const ue={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kr(n){switch(n){case"running":case"pausing":case"canceling":return ue.RUNNING;case"paused":return ue.PAUSED;case"success":return ue.SUCCESS;case"canceled":return ue.CANCELED;case"error":return ue.ERROR;default:return ue.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sm{constructor(e,t,r){if(Yf(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function It(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=dt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=dt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=dt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Xt("cannot .send() more than once");if(mr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xm extends Cm{initXhr(){this.xhr_.responseType="text"}}function bt(){return new xm}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nm{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=_u(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(F.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(cu(s.status,[]))if(i)s=su();else{this.sleepTime=Math.max(this.sleepTime*2,Df),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(F.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=Vm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,bt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=Pm(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,bt,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ta*this._chunkMultiplier,t=new fr(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=bm(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const o=this._ref.storage._makeRequest(a,bt,s,i,!1);this._request=o,o.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ta*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=Im(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,bt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=Rm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,bt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iu(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Kr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new Sm(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Kr(this._state)){case ue.SUCCESS:It(this._resolve.bind(null,this.snapshot))();break;case ue.CANCELED:case ue.ERROR:const t=this._reject;It(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Kr(this._state)){case ue.RUNNING:case ue.PAUSED:e.next&&It(e.next.bind(e,this.snapshot))();break;case ue.SUCCESS:e.complete&&It(e.complete.bind(e))();break;case ue.CANCELED:case ue.ERROR:e.error&&It(e.error.bind(e,this._error))();break;default:e.error&&It(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pt{constructor(e,t){this._service=e,t instanceof ge?this._location=t:this._location=ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new pt(e,t)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mu(this._location.path)}get storage(){return this._service}get parent(){const e=mm(this._location.path);if(e===null)return null;const t=new ge(this._location.bucket,e);return new pt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Qf(e)}}function km(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Nm(n,new We(e),t)}function Dm(n){n._throwIfRoot("getDownloadURL");const e=Am(n.storage,n._location,_u());return n.storage.makeRequestWithTokens(e,bt).then(t=>{if(t===null)throw jf();return t})}function Om(n,e){const t=_m(n._location.path,e),r=new ge(n._location.bucket,t);return new pt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Lm(n){return/^[A-Za-z]+:\/\//.test(n)}function Um(n,e){return new pt(n,e)}function Eu(n,e){if(n instanceof ii){const t=n;if(t._bucket==null)throw $f();const r=new pt(t,t._bucket);return e!=null?Eu(r,e):r}else return e!==void 0?Om(n,e):n}function Mm(n,e){if(e&&Lm(e)){if(n instanceof ii)return Um(n,e);throw hs("To use ref(service, url), the first argument must be a Storage instance.")}else return Eu(n,e)}function na(n,e){const t=e?.[ru];return t==null?null:ge.makeFromBucketSpec(t,n)}function Fm(n,e,t,r={}){n.host=`${e}:${t}`;const s=mr(e);s&&da(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:fa(i,n.app.options.projectId))}class ii{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=nu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nf,this._maxUploadRetryTime=kf,this._requests=new Set,s!=null?this._bucket=ge.makeFromBucketSpec(s,this._host):this._bucket=na(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=na(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ea("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ea("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ia(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Wf(ou());{const a=sm(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const ra="@firebase/storage",sa="0.14.5";/**
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
 */const wu="storage";function n_(n,e,t){return n=$e(n),km(n,e,t)}function r_(n){return n=$e(n),Dm(n)}function s_(n,e){return n=$e(n),Mm(n,e)}function i_(n=aa(),e){n=$e(n);const r=oa(n,wu).getImmediate({identifier:e}),s=ha("storage");return s&&qm(r,...s),r}function qm(n,e,t,r={}){Fm(n,e,t,r)}/**
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
 */function Bm(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ii(t,r,s,e,ca)}function $m(){ua(new ma(wu,Bm,"PUBLIC").setMultipleInstances(!0)),Yn(ra,sa,""),Yn(ra,sa,"esm2020")}$m();export{i_ as a,r_ as b,t_ as c,Wm as d,Jm as e,Zm as f,Ym as g,El as h,e_ as i,s_ as r,Km as s,n_ as u};

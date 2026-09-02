import{_ as na,g as ra,a as sa,b as ia,r as Wn,S as aa}from"./vendor-firebase-core-BrhLp2YP.js";import{L as yu,I as at,l as Le,F as oa,A as ua,j as Ne,p as ur,t as ca,d as Tu,B as la,R as rs,G as Eu,m as wu,M as Iu,H as Au,J as vu,X as Vu,K as Ru,N as Cr,W as Nn,O as Pu,S as ti,C as ha}from"./vendor-misc-6FZmOMZM.js";/**
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
 */let Ot="12.18.0";function bu(n){Ot=n}/**
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
 */const lt=new yu("@firebase/firestore");function wt(){return lt.logLevel}function w(n,...e){if(lt.logLevel<=Le.DEBUG){const t=e.map(ss);lt.debug(`Firestore (${Ot}): ${n}`,...t)}}function Fe(n,...e){if(lt.logLevel<=Le.ERROR){const t=e.map(ss);lt.error(`Firestore (${Ot}): ${n}`,...t)}}function Ae(n,...e){if(lt.logLevel<=Le.WARN){const t=e.map(ss);lt.warn(`Firestore (${Ot}): ${n}`,...t)}}function ss(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function V(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,da(n,r,t)}function da(n,e,t){let r=`FIRESTORE (${Ot}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Fe(r),new Error(r)}function I(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||da(e,s,r)}function C(n,e){return n}/**
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
 */function Cu(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class is{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Cu(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function x(n,e){return n<e?-1:n>e?1:0}function Fr(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Sr(s)===Sr(i)?x(s,i):Sr(s)?1:-1}return x(n.length,e.length)}const Su=55296,xu=57343;function Sr(n){const e=n.charCodeAt(0);return e>=Su&&e<=xu}function Ct(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class M{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new M(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new M(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dn(this.root,e,this.comparator,!0)}}class Dn{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Z.RED,this.left=s??Z.EMPTY,this.right=i??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Z(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Z.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw V(43730,{key:this.key,value:this.value});if(this.right.isRed())throw V(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw V(27949);return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw V(57766)}get value(){throw V(16141)}get color(){throw V(16727)}get left(){throw V(29726)}get right(){throw V(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(e){this.comparator=e,this.data=new M(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ni(this.data.getIterator())}getIteratorFrom(e){return new ni(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof W)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new W(this.comparator);return t.data=e,t}}class ni{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends oa{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const Re="__name__";class Ve{constructor(e,t,r){t===void 0?t=0:t>e.length&&V(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&V(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ve.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ve?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ve.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return x(e.length,t.length)}static compareSegments(e,t){const r=Ve.isNumericId(e),s=Ve.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ve.extractNumericId(e).compare(Ve.extractNumericId(t)):Fr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return at.fromString(e.substring(4,e.length-2))}}class k extends Ve{construct(e,t,r){return new k(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new k(t)}static emptyPath(){return new k([])}}const Nu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let ge=class It extends Ve{construct(e,t,r){return new It(e,t,r)}static isValidIdentifier(e){return Nu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Re}static keyField(){return new It([Re])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}};/**
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
 */class we{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new we([])}unionWith(e){let t=new W(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new we(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ct(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function Kn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Du(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function fa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(k.fromString(e))}static fromName(e){return new A(k.fromString(e).popFirst(5))}static empty(){return new A(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&k.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return k.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new k(e.slice()))}}/**
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
 */function ma(n,e,t){if(!t)throw new E(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ku(n,e,t,r){if(e===!0&&r===!0)throw new E(_.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ri(n){if(!A.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function si(n){if(A.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wn(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function cr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":V(12329,{type:typeof n})}function ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cr(n);throw new E(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function G(n,e){const t={typeString:n};return e&&(t.value=e),t}function In(n,e){if(!wn(n))throw new E(_.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new E(_.INVALID_ARGUMENT,t);return!0}/**
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
 */const ii=-62135596800,ai=1e6;class O{static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ai);return new O(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ii)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ai}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:O._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(In(e,O._jsonSchema))return new O(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ii;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}O._jsonSchemaVersion="firestore/timestamp/1.0",O._jsonSchema={type:G("string",O._jsonSchemaVersion),seconds:G("number"),nanoseconds:G("number")};/**
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
 */class _a extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class K{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _a("Invalid base64 string: "+i):i}}(e);return new K(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new K(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}K.EMPTY_BYTE_STRING=new K("");const Lu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ke(n){if(I(!!n,39018),typeof n=="string"){let e=0;const t=Lu.exec(n);if(I(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:F(n.seconds),nanos:F(n.nanos)}}function F(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function He(n){return typeof n=="string"?K.fromBase64String(n):K.fromUint8Array(n)}/**
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
 */const pa="server_timestamp",ga="__type__",ya="__previous_value__",Ta="__local_write_time__";function lr(n){return(n?.mapValue?.fields||{})[ga]?.stringValue===pa}function An(n){const e=n.mapValue.fields[ya];return lr(e)?An(e):e}function St(n){const e=Ke(n.mapValue.fields[Ta].timestampValue);return new O(e.seconds,e.nanos)}/**
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
 */class Ou{constructor(e,t,r,s,i,a,o,u,c,l,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=d,this._customHeaders=f,this.grpcFlowControlWindow=g}}const Hn="(default)";class sn{constructor(e,t){this.projectId=e,this.database=t||Hn}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}function Uu(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(n.options.projectId,e)}/**
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
 */const as=-1;function hr(n){return n==null}function an(n){return n===0&&1/n==-1/0}function Mu(n){return typeof n=="number"&&Number.isInteger(n)&&!an(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Fu(n){return typeof n=="string"}/**
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
 */const Ea="__type__",qu="__max__",kn={mapValue:{}},wa="__vector__",on="value",xt={nullValue:"NULL_VALUE"},le={booleanValue:!0},X={booleanValue:!1};function H(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lr(n)?4:Bu(n)?9007199254740991:Yn(n)?10:11:V(28295,{value:n})}function Ee(n,e,t){if(n===e)return!0;const r=H(n);if(r!==H(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return St(n).isEqual(St(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=Ke(i.timestampValue),u=Ke(a.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return He(i.bytesValue).isEqual(He(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return F(i.geoPointValue.latitude)===F(a.geoPointValue.latitude)&&F(i.geoPointValue.longitude)===F(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,o){if("integerValue"in i&&"integerValue"in a)return F(i.integerValue)===F(a.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in a)u=F(i.doubleValue),c=F(a.doubleValue);else{if(!o?.t)return!1;u=F(i.integerValue??i.doubleValue),c=F(a.integerValue??a.doubleValue)}return u===c?!!o?.i||an(u)===an(c):!!(o===void 0||o.o)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return Ct(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Ee(s,i,t));case 10:case 11:return function(i,a,o){const u=i.mapValue.fields||{},c=a.mapValue.fields||{};if(Kn(u)!==Kn(c))return!1;for(const l in u)if(u.hasOwnProperty(l)&&(c[l]===void 0||!Ee(u[l],c[l],o)))return!1;return!0}(n,e,t);default:return V(52216,{left:n})}}function un(n,e){return(n.values||[]).find(t=>Ee(t,e))!==void 0}function he(n,e){if(n===e)return 0;const t=H(n),r=H(e);if(t!==r)return x(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(i,a){const o=F(i.integerValue||i.doubleValue),u=F(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(n,e);case 3:return oi(n.timestampValue,e.timestampValue);case 4:return oi(St(n),St(e));case 5:return Fr(n.stringValue,e.stringValue);case 6:return function(i,a){const o=He(i),u=He(a);return o.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const o=i.split("/"),u=a.split("/");for(let c=0;c<o.length&&c<u.length;c++){const l=x(o[c],u[c]);if(l!==0)return l}return x(o.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const o=x(F(i.latitude),F(a.latitude));return o!==0?o:x(F(i.longitude),F(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ui(n.arrayValue,e.arrayValue);case 10:return function(i,a){const o=i.fields||{},u=a.fields||{},c=o[on]?.arrayValue,l=u[on]?.arrayValue,d=x(c?.values?.length||0,l?.values?.length||0);return d!==0?d:ui(c,l)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===kn.mapValue&&a===kn.mapValue)return 0;if(i===kn.mapValue)return 1;if(a===kn.mapValue)return-1;const o=i.fields||{},u=Object.keys(o),c=a.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let d=0;d<u.length&&d<l.length;++d){const f=Fr(u[d],l[d]);if(f!==0)return f;const g=he(o[u[d]],c[l[d]]);if(g!==0)return g}return x(u.length,l.length)}(n.mapValue,e.mapValue);default:throw V(23264,{u:t})}}function oi(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=Ke(n),r=Ke(e),s=x(t.seconds,r.seconds);return s!==0?s:x(t.nanos,r.nanos)}function ui(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=he(t[s],r[s]);if(i!==void 0&&i!==0)return i}return x(t.length,r.length)}function Nt(n){return qr(n)}function qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ke(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return He(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return A.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=qr(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${qr(t.fields[a])}`;return s+"}"}(n.mapValue):V(61005,{value:n})}function Bn(n){switch(H(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=An(n);return e?16+Bn(e):16;case 5:return 2*n.stringValue.length;case 6:return He(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Bn(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return mt(r.fields,(i,a)=>{s+=i.length+Bn(a)}),s}(n.mapValue);default:throw V(13486,{value:n})}}function ci(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Pe(n){return!!n&&"integerValue"in n}function it(n){return!!n&&"doubleValue"in n}function Ye(n){return Pe(n)||it(n)}function Dt(n){return!!n&&"arrayValue"in n}function _e(n){return!!n&&"nullValue"in n}function de(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ot(n){return!!n&&"mapValue"in n}function Yn(n){return(n?.mapValue?.fields||{})[Ea]?.stringValue===wa}function Br(n){return(n?.mapValue?.fields||{})[on]?.arrayValue}function Yt(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return mt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Yt(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yt(n.arrayValue.values[t]);return e}return{...n}}function Bu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qu}/**
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
 */class me{constructor(e){this.value=e}static empty(){return new me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ot(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yt(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=Yt(a):s.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ot(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ee(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ot(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){mt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new me(Yt(this.value))}}function Ia(n){const e=[];return mt(n.fields,(t,r)=>{const s=new ge([t]);if(ot(r)){const i=Ia(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new we(e)}/**
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
 */function dr(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:an(e)?"-0":e}}function os(n){return{integerValue:""+n}}function us(n,e,t){return Mu(e)?os(e):dr(n,e)}/**
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
 */class fr{constructor(){this._=void 0}}function $u(n,e,t){return n instanceof cn?function(s,i){const a={fields:{[ga]:{stringValue:pa},[Ta]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lr(i)&&(i=An(i)),i&&(a.fields[ya]=i),{mapValue:a}}(t,e):n instanceof ln?va(n,e):n instanceof hn?Va(n,e):n instanceof dn?function(s,i){const a=Aa(s,i),o=Zn(a)+Zn(s.l);return Pe(a)&&Pe(s.l)?os(o):dr(s.serializer,o)}(n,e):n instanceof Jn?function(s,i){return li(s,i,Math.min)}(n,e):n instanceof Xn?function(s,i){return li(s,i,Math.max)}(n,e):void 0}function ju(n,e,t){return n instanceof ln?va(n,e):n instanceof hn?Va(n,e):t}function Aa(n,e){return n instanceof dn?Ye(e)?e:{integerValue:0}:null}class cn extends fr{}class ln extends fr{constructor(e){super(),this.elements=e}}function va(n,e){const t=Ra(e);for(const r of n.elements)t.some(s=>Ee(s,r))||t.push(r);return{arrayValue:{values:t}}}class hn extends fr{constructor(e){super(),this.elements=e}}function Va(n,e){let t=Ra(e);for(const r of n.elements)t=t.filter(s=>!Ee(s,r));return{arrayValue:{values:t}}}class cs extends fr{constructor(e,t){super(),this.serializer=e,this.l=t}}class dn extends cs{}class Jn extends cs{}class Xn extends cs{}function li(n,e,t){if(!Ye(e))return n.l;const r=t(Zn(e),Zn(n.l));return Pe(e)&&Pe(n.l)?os(r):dr(n.serializer,r)}function Zn(n){return F(n.integerValue||n.doubleValue)}function Ra(n){return Dt(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class zu{constructor(e,t){this.field=e,this.transform=t}}function Gu(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ln&&s instanceof ln||r instanceof hn&&s instanceof hn?Ct(r.elements,s.elements,Ee):r instanceof dn&&s instanceof dn||r instanceof Jn&&s instanceof Jn||r instanceof Xn&&s instanceof Xn?Ee(r.l,s.l):r instanceof cn&&s instanceof cn}(n.transform,e.transform)}class Qu{constructor(e,t){this.version=e,this.transformResults=t}}class Ie{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ie}static exists(e){return new Ie(void 0,e)}static updateTime(e){return new Ie(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $n(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class mr{}function Pa(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ls(n.key,Ie.none()):new vn(n.key,n.data,Ie.none());{const t=n.data,r=me.empty();let s=new W(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new _t(n.key,r,new we(s.toArray()),Ie.none())}}function Wu(n,e,t){n instanceof vn?function(s,i,a){const o=s.value.clone(),u=di(s.fieldTransforms,i,a.transformResults);o.setAll(u),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(n,e,t):n instanceof _t?function(s,i,a){if(!$n(s.precondition,i))return void i.convertToUnknownDocument(a.version);const o=di(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ba(s)),u.setAll(o),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Jt(n,e,t,r){return n instanceof vn?function(i,a,o,u){if(!$n(i.precondition,a))return o;const c=i.value.clone(),l=fi(i.fieldTransforms,u,a);return c.setAll(l),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof _t?function(i,a,o,u){if(!$n(i.precondition,a))return o;const c=fi(i.fieldTransforms,u,a),l=a.data;return l.setAll(ba(i)),l.setAll(c),a.convertToFoundDocument(a.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(n,e,t,r):function(i,a,o){return $n(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(n,e,t)}function Ku(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Aa(r.transform,s||null);i!=null&&(t===null&&(t=me.empty()),t.set(r.field,i))}return t||null}function hi(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ct(r,s,(i,a)=>Gu(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vn extends mr{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _t extends mr{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ba(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function di(n,e,t){const r=new Map;I(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,o=e.data.field(i.field);r.set(i.field,ju(a,o,t[s]))}return r}function fi(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,$u(i,a,e))}return r}class ls extends mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hu extends mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class er{constructor(e,t){this.position=e,this.inclusive=t}}function mi(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=A.comparator(A.fromName(a.referenceValue),t.key):r=he(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _i(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ee(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ca{}class z extends Ca{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ju(e,t,r):t==="array-contains"?new ec(e,r):t==="in"?new tc(e,r):t==="not-in"?new nc(e,r):t==="array-contains-any"?new rc(e,r):new z(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Xu(e,r):new Zu(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(he(t,this.value)):t!==null&&H(this.value)===H(t)&&this.matchesComparison(he(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends Ca{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new ve(e,t)}matches(e){return Sa(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function Sa(n){return n.op==="and"}function xa(n){return Yu(n)&&Sa(n)}function Yu(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function $r(n){if(n instanceof z)return n.field.canonicalString()+n.op.toString()+Nt(n.value);if(xa(n))return n.filters.map(e=>$r(e)).join(",");{const e=n.filters.map(t=>$r(t)).join(",");return`${n.op}(${e})`}}function Na(n,e){return n instanceof z?function(r,s){return s instanceof z&&r.op===s.op&&r.field.isEqual(s.field)&&Ee(r.value,s.value)}(n,e):n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,o)=>i&&Na(a,s.filters[o]),!0):!1}(n,e):void V(19439)}function Da(n){return n instanceof z?function(t){return`${t.field.canonicalString()} ${t.op} ${Nt(t.value)}`}(n):n instanceof ve?function(t){return t.op.toString()+" {"+t.getFilters().map(Da).join(" ,")+"}"}(n):"Filter"}class Ju extends z{constructor(e,t,r){super(e,t,r),this.key=A.fromName(r.referenceValue)}matches(e){const t=A.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xu extends z{constructor(e,t){super(e,"in",t),this.keys=ka("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Zu extends z{constructor(e,t){super(e,"not-in",t),this.keys=ka("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ka(n,e){return(e.arrayValue?.values||[]).map(t=>A.fromName(t.referenceValue))}class ec extends z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Dt(t)&&un(t.arrayValue,this.value)}}class tc extends z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&un(this.value.arrayValue,t)}}class nc extends z{constructor(e,t){super(e,"not-in",t)}matches(e){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!un(this.value.arrayValue,t)}}class rc extends z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Dt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>un(this.value.arrayValue,r))}}/**
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
 */class fn{constructor(e,t="asc"){this.field=e,this.dir=t}}function sc(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class b{static fromTimestamp(e){return new b(e)}static min(){return new b(new O(0,0))}static max(){return new b(new O(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class re{constructor(e,t,r,s,i,a,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new re(e,0,b.min(),b.min(),b.min(),me.empty(),0)}static newFoundDocument(e,t,r,s){return new re(e,1,t,b.min(),r,s,0)}static newNoDocument(e,t){return new re(e,2,t,b.min(),b.min(),me.empty(),0)}static newUnknownDocument(e,t){return new re(e,3,t,b.min(),b.min(),me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const mn=-1;function ic(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=b.fromTimestamp(r===1e9?new O(t+1,0):new O(t,r));return new Je(s,A.empty(),e)}function ac(n){return new Je(n.readTime,n.key,mn)}class Je{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Je(b.min(),A.empty(),mn)}static max(){return new Je(b.max(),A.empty(),mn)}}function oc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=A.comparator(n.documentKey,e.documentKey),t!==0?t:x(n.largestBatchId,e.largestBatchId))}/**
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
 */class uc{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.R=null}}function pi(n,e=null,t=[],r=[],s=null,i=null,a=null){return new uc(n,e,t,r,s,i,a)}function La(n){const e=C(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$r(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Nt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Nt(r)).join(",")),e.R=t}return e.R}function Oa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sc(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Na(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_i(n.startAt,e.startAt)&&_i(n.endAt,e.endAt)}function st(n){return!!n.isCorePipeline}function Ua(n){return!!n.path&&A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ut{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function cc(n,e,t,r,s,i,a,o){return new Ut(n,e,t,r,s,i,a,o)}function Ma(n){return new Ut(n)}function gi(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lc(n){return A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fa(n){return n.collectionGroup!==null}function Xt(n){const e=C(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new W(ge.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new fn(i,r))}),t.has(ge.keyField().canonicalString())||e.I.push(new fn(ge.keyField(),r))}return e.I}function Ce(n){const e=C(n);return e.A||(e.A=hc(e,Xt(n))),e.A}function hc(n,e){if(n.limitType==="F")return pi(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fn(s.field,i)});const t=n.endAt?new er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new er(n.startAt.position,n.startAt.inclusive):null;return pi(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function jr(n,e){const t=n.filters.concat([e]);return new Ut(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function dc(n,e){const t=n.explicitOrderBy.concat([e]);return new Ut(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function zr(n,e,t){return new Ut(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fc(n,e){return Oa(Ce(n),Ce(e))&&n.limitType===e.limitType}function Zt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Da(s)).join(", ")}]`),hr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Nt(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Nt(s)).join(",")),`Target(${r})`}(Ce(n))}; limitType=${n.limitType})`}function _r(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):A.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Xt(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,o,u){const c=mi(a,o,u);return a.inclusive?c<=0:c<0}(r.startAt,Xt(r),s)||r.endAt&&!function(a,o,u){const c=mi(a,o,u);return a.inclusive?c>=0:c>0}(r.endAt,Xt(r),s))}(n,e)}function hs(n){return(e,t)=>{let r=!1;for(const s of Xt(n)){const i=mc(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mc(n,e,t){const r=n.field.isKeyField()?A.comparator(e.key,t.key):function(i,a,o){const u=a.data.field(i),c=o.data.field(i);return u!==null&&c!==null?he(u,c):V(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return V(19790,{direction:n.dir})}}/**
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
 */class _c{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var j,D;function pc(n){switch(n){case _.OK:return V(64938);case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0;default:return V(15467,{code:n})}}function qa(n){if(n===void 0)return Fe("GRPC error has no .code"),_.UNKNOWN;switch(n){case j.OK:return _.OK;case j.CANCELLED:return _.CANCELLED;case j.UNKNOWN:return _.UNKNOWN;case j.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case j.INTERNAL:return _.INTERNAL;case j.UNAVAILABLE:return _.UNAVAILABLE;case j.UNAUTHENTICATED:return _.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case j.NOT_FOUND:return _.NOT_FOUND;case j.ALREADY_EXISTS:return _.ALREADY_EXISTS;case j.PERMISSION_DENIED:return _.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case j.ABORTED:return _.ABORTED;case j.OUT_OF_RANGE:return _.OUT_OF_RANGE;case j.UNIMPLEMENTED:return _.UNIMPLEMENTED;case j.DATA_LOSS:return _.DATA_LOSS;default:return V(39323,{code:n})}}(D=j||(j={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fa(this.inner)}size(){return this.innerSize}}/**
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
 */const gc=new M(A.comparator);function ue(){return gc}const Ba=new M(A.comparator);function At(...n){let e=Ba;for(const t of n)e=e.insert(t.key,t);return e}function $a(n){let e=Ba;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $e(){return en()}function ja(){return en()}function en(){return new pt(n=>n.toString(),(n,e)=>n.isEqual(e))}const yc=new M(A.comparator),Tc=new W(A.comparator);function S(...n){let e=Tc;for(const t of n)e=e.add(t);return e}const Ec=new W(x);function wc(){return Ec}/**
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
 */function Ic(){return new TextEncoder}/**
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
 */const Ac=new at([4294967295,4294967295],0);function yi(n){const e=Ic().encode(n),t=new Iu;return t.update(e),new Uint8Array(t.digest())}function Ti(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new at([t,r],0),new at([s,i],0)]}class ds{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kt(`Invalid padding: ${t}`);if(r<0)throw new Kt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kt(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=at.fromNumber(this.m)}S(e,t,r){let s=e.add(t.multiply(at.fromNumber(r)));return s.compare(Ac)===1&&(s=new at([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=yi(e),[r,s]=Ti(t);for(let i=0;i<this.hashCount;i++){const a=this.S(r,s,i);if(!this.v(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ds(i,s,t);return r.forEach(o=>a.insert(o)),a}insert(e){if(this.m===0)return;const t=yi(e),[r,s]=Ti(t);for(let i=0;i<this.hashCount;i++){const a=this.S(r,s,i);this.D(a)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vn{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Rn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vn(b.min(),s,new M(x),ue(),ue(),S())}}class Rn{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rn(r,t,S(),S(),S())}}/**
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
 */class jn{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class za{constructor(e,t){this.targetId=e,this.O=t}}class Ga{constructor(e,t,r=K.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ei{constructor(e){this.targetId=e,this.M=0,this.N=wi(),this.L=K.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=S(),t=S(),r=S();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:V(38017,{changeType:i})}}),new Rn(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=wi()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,I(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Gt="WatchChangeAggregator";class vc{constructor(e){this.Z=e,this.X=new Map,this.ee=ue(),this.te=Ln(),this.ne=ue(),this.re=Ln(),this.ie=new M(x)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:V(56790,{state:e.state})}else w(Gt,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){return st(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Ua(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const a=new A(st(i)?k.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,a,re.newNoDocument(a,b.min()))}else I(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Te(t);if(a!==r){const o=this.Pe(e),u=o?this.Re(o,e,a):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,o;try{a=He(r).toUint8Array()}catch(u){if(u instanceof _a)return Ae("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{o=new ds(a,s,i)}catch(u){return Ae(u instanceof Kt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return o.m===0?null:o}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Z.Ae(),o=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,a)=>{const o=this.he(a);if(o){if(i.current&&this.le(o.target)){const u=st(o.target)?k.fromString(o.target.getPipelineDocuments()[0]):o.target.path,c=new A(u);this.fe(c).has(a)||this.me(a,c)||this.oe(a,c,re.newNoDocument(c,e))}i.q&&(t.set(a,i.K()),i.W())}});let r=S();this.re.forEach((i,a)=>{let o=!0;a.forEachWhile(u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(r=r.add(i))}),this.ee.forEach((i,a)=>a.setReadTime(e)),this.ne.forEach((i,a)=>a.setReadTime(e));const s=new Vn(e,t,this.ie,this.ee,this.ne,r);return this.ee=ue(),this.te=Ln(),this.ne=ue(),this.re=Ln(),this.ie=new M(x),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void w(Gt,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),st(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(st(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):w(Gt,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(w(Gt,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ei(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new W(x),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new W(x),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||w(Gt,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new Ei(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Ln(){return new M(A.comparator)}function wi(){return new M(A.comparator)}const Vc={asc:"ASCENDING",desc:"DESCENDING"},Rc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pc={and:"AND",or:"OR"};class bc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gr(n,e){return n.useProto3Json||hr(e)?e:{value:e}}function tr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fs(n){const e=Ke(n);return new O(e.seconds,e.nanos)}function Qa(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zn(n,e){return tr(n,e.toTimestamp())}function Se(n){return I(!!n,49232),b.fromTimestamp(fs(n))}function ms(n,e){return Qr(n,e).canonicalString()}function Qr(n,e){const t=function(s){return new k(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wa(n){const e=k.fromString(n);return I(Xa(e),10190,{key:e.toString()}),e}function nr(n,e){return ms(n.databaseId,e.path)}function xr(n,e){const t=Wa(e);if(t.get(1)!==n.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new A(Ha(t))}function Ka(n,e){return ms(n.databaseId,e)}function Cc(n){const e=Wa(n);return e.length===4?k.emptyPath():Ha(e)}function Wr(n){return new k(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ha(n){return I(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ii(n,e,t){return{name:nr(n,e),fields:t.value.mapValue.fields}}function Sc(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:V(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(I(l===void 0||typeof l=="string",58123),K.fromBase64String(l||"")):(I(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),K.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const l=c.code===void 0?_.UNKNOWN:qa(c.code);return new E(l,c.message||"")}(a);t=new Ga(r,s,i,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xr(n,r.document.name),i=Se(r.document.updateTime),a=r.document.createTime?Se(r.document.createTime):b.min(),o=new me({mapValue:{fields:r.document.fields}}),u=re.newFoundDocument(s,i,a,o),c=r.targetIds||[],l=r.removedTargetIds||[];t=new jn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xr(n,r.document),i=r.readTime?Se(r.readTime):b.min(),a=re.newNoDocument(s,i),o=r.removedTargetIds||[];t=new jn([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xr(n,r.document),i=r.removedTargetIds||[];t=new jn([],i,s,null)}else{if(!("filter"in e))return V(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new _c(s,i),o=r.targetId;t=new za(o,a)}}return t}function xc(n,e){let t;if(e instanceof vn)t={update:Ii(n,e.key,e.value)};else if(e instanceof ls)t={delete:nr(n,e.key)};else if(e instanceof _t)t={update:Ii(n,e.key,e.data),updateMask:Bc(e.fieldMask)};else{if(!(e instanceof Hu))return V(16599,{we:e.type});t={verify:nr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const o=a.transform;if(o instanceof cn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dn)return{fieldPath:a.field.canonicalString(),increment:o.l};if(o instanceof Jn)return{fieldPath:a.field.canonicalString(),minimum:o.l};if(o instanceof Xn)return{fieldPath:a.field.canonicalString(),maximum:o.l};throw V(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zn(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V(27497)}(n,e.precondition)),t}function Nc(n,e){return n&&n.length>0?(I(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Se(s.updateTime):Se(i);return a.isEqual(b.min())&&(a=Se(i)),new Qu(a,s.transformResults||[])}(t,e))):[]}function Dc(n,e){return{documents:[Ka(n,e.path)]}}function kc(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ka(n,s);const i=function(c){if(c.length!==0)return Ja(ve.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:vt(f.field),direction:Mc(f.dir)}}(l))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=Gr(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{be:t,parent:s}}function Lc(n){let e=Cc(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){I(r===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(d){const f=Ya(d);return f instanceof ve&&xa(f)?f.getFilters():[f]}(t.where));let a=[];t.orderBy&&(a=function(d){return d.map(f=>function(y){return new fn(Vt(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(t.orderBy));let o=null;t.limit&&(o=function(d){let f;return f=typeof d=="object"?d.value:d,hr(f)?null:f}(t.limit));let u=null;t.startAt&&(u=function(d){const f=!!d.before,g=d.values||[];return new er(g,f)}(t.startAt));let c=null;return t.endAt&&(c=function(d){const f=!d.before,g=d.values||[];return new er(g,f)}(t.endAt)),cc(e,s,a,i,o,"F",u,c)}function Oc(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uc(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Ya(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Vt(t.unaryFilter.field);return z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vt(t.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vt(t.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vt(t.unaryFilter.field);return z.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return V(61313);default:return V(60726)}}(n):n.fieldFilter!==void 0?function(t){return z.create(Vt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return V(58110);default:return V(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ve.create(t.compositeFilter.filters.map(r=>Ya(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return V(1026)}}(t.compositeFilter.op))}(n):V(30097,{filter:n})}function Mc(n){return Vc[n]}function Fc(n){return Rc[n]}function qc(n){return Pc[n]}function vt(n){return{fieldPath:n.canonicalString()}}function Vt(n){return ge.fromServerFormat(n.fieldPath)}function Ja(n){return n instanceof z?function(t){if(t.op==="=="){if(de(t.value))return{unaryFilter:{field:vt(t.field),op:"IS_NAN"}};if(_e(t.value))return{unaryFilter:{field:vt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(de(t.value))return{unaryFilter:{field:vt(t.field),op:"IS_NOT_NAN"}};if(_e(t.value))return{unaryFilter:{field:vt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vt(t.field),op:Fc(t.op),value:t.value}}}(n):n instanceof ve?function(t){const r=t.getFilters().map(s=>Ja(s));return r.length===1?r[0]:{compositeFilter:{op:qc(t.op),filters:r}}}(n):V(54877,{filter:n})}function Bc(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Za(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function _n(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function eo(n){return{stringValue:n}}/**
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
 */function pr(n){return new bc(n,!0)}/**
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
 */class Te{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Te(K.fromBase64String(e))}catch(t){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Te(K.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Te._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(In(e,Te._jsonSchema))return Te.fromBase64String(e.bytes)}}Te._jsonSchemaVersion="firestore/bytes/1.0",Te._jsonSchema={type:G("string",Te._jsonSchemaVersion),bytes:G("string")};/**
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
 */class _s{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function $c(){return new _s(Re)}/**
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
 */class ps{constructor(e){this._methodName=e}}/**
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
 */class xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xe._jsonSchemaVersion}}static fromJSON(e){if(In(e,xe._jsonSchema))return new xe(e.latitude,e.longitude)}}xe._jsonSchemaVersion="firestore/geoPoint/1.0",xe._jsonSchema={type:G("string",xe._jsonSchemaVersion),latitude:G("number"),longitude:G("number")};/**
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
 */class ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class to{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class zc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Gc{constructor(e){this.ve=e,this.currentUser=ne.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){I(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new ze;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new ze,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},o=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),a())};this.ve.onInit(u=>o(u)),setTimeout(()=>{if(!this.auth){const u=this.ve.getImmediate({optional:!0});u?o(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ze)}},0),a()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(I(typeof r.accessToken=="string",31837,{Fe:r}),new to(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return I(e===null||typeof e=="string",2055,{Oe:e}),new ne(e)}}class Qc{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class Wc{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new Qc(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ai{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kc{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,na(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){I(this.xe===void 0,3512);const r=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.qe;return this.qe=i.token,w("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Ai(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(I(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Ai(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function no(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class Hc{Ke(e){}shutdown(){}}/**
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
 */const vi="ConnectivityMonitor";class Vi{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){w(vi,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){w(vi,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let On=null;function Kr(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
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
 */const Nr="RestConnection",Yc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Jc{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===Hn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const a=Kr(),o=this.nt(e,t.toUriEncodedString());w(Nr,`Sending RPC '${e}' ${a}:`,o,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(o),l=ur(c);return this.it(e,o,u,r,l).then(d=>(w(Nr,`Received RPC '${e}' ${a}: `,d),d),d=>{throw Ae(Nr,`RPC '${e}' ${a} failed with error: `,d,"url: ",o,"request:",r),d})}st(e,t,r,s,i,a){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ot}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=Yc[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Xc{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
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
 */const te="WebChannelConnection",Qt=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Rt extends Jc{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Rt.gt){const e=Au();Qt(e,vu.STAT_EVENT,t=>{t.stat===ti.PROXY?w(te,"STAT_EVENT: detected buffering proxy"):t.stat===ti.NOPROXY&&w(te,"STAT_EVENT: detected no buffering proxy")}),Rt.gt=!0}}it(e,t,r,s,i){const a=Kr();return new Promise((o,u)=>{const c=new Vu;c.setWithCredentials(!0),c.listenOnce(Ru.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cr.NO_ERROR:const d=c.getResponseJson();w(te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(d)),o(d);break;case Cr.TIMEOUT:w(te,`RPC '${e}' ${a} timed out`),u(new E(_.DEADLINE_EXCEEDED,"Request time out"));break;case Cr.HTTP_ERROR:const f=c.getStatus();if(w(te,`RPC '${e}' ${a} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g?.error;if(y&&y.status&&y.message){const P=function(N){const L=N.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(L)>=0?L:_.UNKNOWN}(y.status);u(new E(P,y.message))}else u(new E(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new E(_.UNAVAILABLE,"Connection failed."));break;default:V(9055,{yt:e,streamId:a,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{w(te,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(s);w(te,`RPC '${e}' ${a} sending request:`,s),c.send(t,"POST",l,r,15)})}St(e,t,r){const s=Kr(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(o.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(o.useFetchStreams=!0),this.rt(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const c=i.join("");w(te,`Creating RPC '${e}' stream ${s}: ${c}`,o);const l=a.createWebChannel(c,o);this.vt(l);let d=!1,f=!1;const g=new Xc({_t:y=>{f?w(te,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(w(te,`Opening RPC '${e}' stream ${s} transport.`),l.open(),d=!0),w(te,`RPC '${e}' stream ${s} sending:`,y),l.send(y))},ot:()=>l.close()});return Qt(l,Nn.EventType.OPEN,()=>{f||(w(te,`RPC '${e}' stream ${s} transport opened.`),g.Rt())}),Qt(l,Nn.EventType.CLOSE,()=>{f||(f=!0,w(te,`RPC '${e}' stream ${s} transport closed`),g.At(),this.Dt(l))}),Qt(l,Nn.EventType.ERROR,y=>{f||(f=!0,Ae(te,`RPC '${e}' stream ${s} transport errored. Name:`,y.name,"Message:",y.message),g.At(new E(_.UNAVAILABLE,"The operation could not be completed")))}),Qt(l,Nn.EventType.MESSAGE,y=>{if(!f){const P=y.data[0];I(!!P,16349);const v=P,N=v?.error||v[0]?.error;if(N){w(te,`RPC '${e}' stream ${s} received error:`,N);const L=N.status;let U=function(Be){const Et=j[Be];if(Et!==void 0)return qa(Et)}(L),q=N.message;L==="NOT_FOUND"&&q.includes("database")&&q.includes("does not exist")&&q.includes(this.databaseId.database)&&Ae(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),U===void 0&&(U=_.INTERNAL,q="Unknown error status: "+L+" with message "+N.message),f=!0,g.At(new E(U,q)),l.close()}else w(te,`RPC '${e}' stream ${s} received:`,P),g.Vt(P)}}),Rt.ft(),setTimeout(()=>{g.It()},0),g}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Pu()}}/**
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
 */function Zc(n){return new Rt(n)}Rt.gt=!1;class ro{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
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
 */const Ri="PersistentStream";class so{constructor(e,t,r,s,i,a,o,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=u,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new ro(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(Fe(t.toString()),Fe("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qt===t&&this.an(r,s)},r=>{e(()=>{const s=new E(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return w(Ri,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Qt===e?t():(w(Ri,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class el extends so{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=Sc(this.serializer,e),r=function(i){if(!("targetChange"in i))return b.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?b.min():a.readTime?Se(a.readTime):b.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=Wr(this.serializer),t.addTarget=function(i,a){let o;const u=a.target;if(o=st(u)?{pipelineQuery:Uc(i,u)}:Ua(u)?{documents:Dc(i,u)}:{query:kc(i,u).be},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Qa(i,a.resumeToken);const c=Gr(i,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(b.min())>0){o.readTime=tr(i,a.snapshotVersion.toTimestamp());const c=Gr(i,a.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=Oc(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=Wr(this.serializer),t.removeTarget=e,this.tn(t)}}class tl extends so{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return I(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,I(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){I(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=Nc(e.writeResults,e.commitTime),r=Se(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=Wr(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xc(this.serializer,r))};this.tn(t)}}/**
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
 */class nl{}class rl extends nl{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.tt(e,Qr(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(_.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.st(e,Qr(t,r),s,a,o,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new E(_.UNKNOWN,a.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function sl(n,e,t,r){return new rl(n,e,t,r)}/**
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
 */const il="ComponentProvider",Pi=new Map;function al(n,e,t,r,s){return new Ou(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,no(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const bi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},io=41943040;class oe{static withCacheSize(e){return new oe(e,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}oe.DEFAULT_COLLECTION_PERCENTILE=10,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oe.DEFAULT=new oe(io,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oe.DISABLED=new oe(-1,0,0);/**
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
 */class gr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}gr.yn=-1;/**
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
 */const ol="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ul{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mt(n){if(n.code!==_.FAILED_PRECONDITION||n.message!==ol)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&V(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,r)=>{t(e)})}static reject(e){return new p((t,r)=>{r(e)})}static waitFor(e){return new p((t,r)=>{let s=0,i=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next(s=>s?p.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new p((r,s)=>{const i=e.length,a=new Array(i);let o=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(l=>{a[c]=l,++o,o===i&&r(a)},l=>s(l))}})}static doWhile(e,t){return new p((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function cl(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ft(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Ci="LruGarbageCollector",ll=1048576;function Si([n,e],[t,r]){const s=x(n,t);return s===0?x(e,r):s}class hl{constructor(e){this.Jn=e,this.buffer=new W(Si),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Si(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dl{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){w(Ci,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ft(t)?w(Ci,"Ignoring IndexedDB error during garbage collection: ",t):await Mt(t)}await this.tr(3e5)})}}class fl{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return p.resolve(gr.yn);const r=new hl(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(bi)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bi):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,a,o,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,a=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,o=Date.now(),this.removeTargets(e,r,t))).next(d=>(i=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),wt()<=Le.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-l}ms
	Determined least recently used ${s} in `+(o-a)+`ms
	Removed ${i} targets in `+(u-o)+`ms
	Removed ${d} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function ml(n,e){return new fl(n,e)}/**
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
 */const ao="firestore.googleapis.com",xi=!0;class Ni{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ao,this.ssl=xi}else this.host=e.host,this.ssl=e.ssl??xi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=io;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ll)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(ku("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=no(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new E(_.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const o of i)if(r[o]!==s[o])return!1;return!0}(this._customHeaders,e._customHeaders)}}let yr=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ni({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ni(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jc;switch(r.type){case"firstParty":return new Wc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pi.get(t);r&&(w(il,"Removing Datastore"),Pi.delete(t),r.terminate())}(this),Promise.resolve()}};function _l(n,e,t,r={}){n=ht(n,yr);const s=ur(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${e}:${t}`;s&&ca(`https://${o}`),i.host!==ao&&i.host!==o&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:o,ssl:s,emulatorOptions:r};if(!Tu(u,a)&&(n._setSettings(u),r.mockUserToken)){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ne.MOCK_USER;else{c=la(r.mockUserToken,n._app?.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ne(d)}n._authCredentials=new zc(new to(c,l))}}/**
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
 */class gt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gt(this.firestore,e,this._query)}}class Q{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q(this.firestore,e,this._key)}toJSON(){return{type:Q._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(In(t,Q._jsonSchema))return new Q(e,r||null,new A(k.fromString(t.referencePath)))}}Q._jsonSchemaVersion="firestore/documentReference/1.0",Q._jsonSchema={type:G("string",Q._jsonSchemaVersion),referencePath:G("string")};class Ge extends gt{constructor(e,t,r){super(e,t,Ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Q(this.firestore,null,new A(e))}withConverter(e){return new Ge(this.firestore,e,this._path)}}function jm(n,e,...t){if(n=Ne(n),ma("collection","path",e),n instanceof yr){const r=k.fromString(e,...t);return si(r),new Ge(n,null,r)}{if(!(n instanceof Q||n instanceof Ge))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(e,...t));return si(r),new Ge(n.firestore,null,r)}}function pl(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=is.newId()),ma("doc","path",e),n instanceof yr){const r=k.fromString(e,...t);return ri(r),new Q(n,null,new A(r))}{if(!(n instanceof Q||n instanceof Ge))throw new E(_.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(e,...t));return ri(r),new Q(n.firestore,n instanceof Ge?n.converter:null,new A(r))}}/**
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
 */class ce{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ce._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(In(e,ce._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ce(e.vectorValues);throw new E(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ce._jsonSchemaVersion="firestore/vectorValue/1.0",ce._jsonSchema={type:G("string",ce._jsonSchemaVersion),vectorValues:G("object")};/**
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
 */const gl=/^__.*__$/;class yl{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _t(e,this.data,this.fieldMask,t,this.fieldTransforms):new vn(e,this.data,t,this.fieldTransforms)}}function oo(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V(40011,{dataSource:n})}}class gs{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new gs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return rr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(oo(this.dataSource)&&gl.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Tl{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||pr(e)}createContext(e,t,r,s=!1){return new gs({dataSource:e,methodName:t,targetDoc:r,path:ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ys(n){const e=n._freezeSettings(),t=pr(n._databaseId);return new Tl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function uo(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);ho("Data must be an object, but it was:",a,r);const o=co(r,a);let u,c;if(i.merge)u=new we(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const l=[];for(const d of i.mergeFields){const f=Pn(e,d,t);if(!a.contains(f))throw new E(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Al(l,f)||l.push(f)}u=new we(l),c=a.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=a.fieldTransforms;return new yl(new me(o),u,c)}class Ts extends ps{_toFieldTransform(e){return new zu(e.path,new cn)}isEqual(e){return e instanceof Ts}}function El(n,e,t,r=!1){return kt(t,n.createContext(r?4:3,e))}function kt(n,e,t){if(lo(n=Ne(n)))return ho("Unsupported field value:",e,n),co(n,e);if(n instanceof ps)return function(s,i){if(!oo(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let o=0;for(const u of s){let c=kt(u,i.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),a.push(c),o++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=Ne(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return us(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=O.fromDate(s);return{timestampValue:tr(i.serializer,o)}}if(s instanceof O){const o=new O(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tr(i.serializer,o)}}if(s instanceof xe)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Te)return{bytesValue:Qa(i.serializer,s._byteString)};if(s instanceof Q){const o=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(o))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ms(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ce)return function(u,c){const l=u instanceof ce?u.toArray():u;return{mapValue:{fields:{[Ea]:{stringValue:wa},[on]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return dr(c.serializer,f)})}}}}}}(s,i);if(Za(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${cr(s)}`)}(n,e)}function co(n,e){const t={};return fa(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mt(n,(r,s)=>{const i=kt(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function lo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof O||n instanceof xe||n instanceof Te||n instanceof Q||n instanceof ps||n instanceof ce||Za(n))}function ho(n,e,t){if(!lo(t)||!wn(t)){const r=cr(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Pn(n,e,t){if((e=Ne(e))instanceof _s)return e._internalPath;if(typeof e=="string")return Il(n,e);throw rr("Field path arguments must be of type string or ",n,!1,void 0,t)}const wl=new RegExp("[~\\*/\\[\\]]");function Il(n,e,t){if(e.search(wl)>=0)throw rr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _s(...e.split("."))._internalPath}catch{throw rr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function rr(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new E(_.INVALID_ARGUMENT,o+n+u)}function Al(n,e){return n.some(t=>t.isEqual(e))}function fo(n){return typeof n._readUserData=="function"}/**
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
 */class se{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=me.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let o;i.nestedOptions&&wn(a)?o={mapValue:{fields:new se(i.nestedOptions).getOptionsProto(t,a)}}:a&&(o=kt(a,t)??void 0),o&&r.set(ge.fromServerFormat(i.serverName),o)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Du(r,(a,o)=>[ge.fromServerFormat(o),a!==void 0?kt(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function vl(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!wn(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function zm(){return new Ts("serverTimestamp")}function Vl(n){return new ce(n)}/**
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
 */function T(n){let e;return n instanceof yt?n:(e=wn(n)?Sl(n):n instanceof Array?xl(n):mo(n,void 0),e)}function Dr(n){if(n instanceof yt)return n;if(n instanceof ce)return pn(n);if(Array.isArray(n))return pn(Vl(n));throw new Error("Unsupported value: "+typeof n)}function Es(n){return Fu(n)?Gn(n):T(n)}class yt{constructor(){this._protoValueType="ProtoValue"}add(e){return new m("add",[this,T(e)],"add")}asBoolean(){if(this instanceof Xe)return this;if(this instanceof Bt)return new po(this);if(this instanceof qt)return new Cl(this);if(this instanceof m)return new _o(this);throw new E("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new m("subtract",[this,T(e)],"subtract")}multiply(e){return new m("multiply",[this,T(e)],"multiply")}divide(e){return new m("divide",[this,T(e)],"divide")}mod(e){return new m("mod",[this,T(e)],"mod")}equal(e){return new m("equal",[this,T(e)],"equal").asBoolean()}notEqual(e){return new m("not_equal",[this,T(e)],"notEqual").asBoolean()}lessThan(e){return new m("less_than",[this,T(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new m("less_than_or_equal",[this,T(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new m("greater_than",[this,T(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new m("greater_than_or_equal",[this,T(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>T(s));return new m("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new m("array_contains",[this,T(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ht(e.map(T),"arrayContainsAll"):e;return new m("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ht(e.map(T),"arrayContainsAny"):e;return new m("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new m("array_reverse",[this])}arrayLength(){return new m("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ht(e.map(T),"equalAny"):e;return new m("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ht(e.map(T),"notEqualAny"):e;return new m("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new m("exists",[this],"exists").asBoolean()}charLength(){return new m("char_length",[this],"charLength")}like(e){return new m("like",[this,T(e)],"like").asBoolean()}regexContains(e){return new m("regex_contains",[this,T(e)],"regexContains").asBoolean()}regexFind(e){return new m("regex_find",[this,T(e)],"regexFind")}regexFindAll(e){return new m("regex_find_all",[this,T(e)],"regexFindAll")}regexMatch(e){return new m("regex_match",[this,T(e)],"regexMatch").asBoolean()}stringContains(e){return new m("string_contains",[this,T(e)],"stringContains").asBoolean()}startsWith(e){return new m("starts_with",[this,T(e)],"startsWith").asBoolean()}endsWith(e){return new m("ends_with",[this,T(e)],"endsWith").asBoolean()}toLower(){return new m("to_lower",[this],"toLower")}toUpper(){return new m("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(T(e)),new m("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(T(e)),new m("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(T(e)),new m("rtrim",t,"rtrim")}type(){return new m("type",[this])}isType(e){return new m("is_type",[this,pn(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(T);return new m("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new m("string_index_of",[this,T(e)],"stringIndexOf")}stringRepeat(e){return new m("string_repeat",[this,T(e)],"stringRepeat")}stringReplaceAll(e,t){return new m("string_replace_all",[this,T(e),T(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new m("string_replace_one",[this,T(e),T(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(T);return new m("concat",[this,...r],"concat")}reverse(){return new m("reverse",[this],"reverse")}arrayFilter(e,t){return new m("array_filter",[this,T(e),t],"arrayFilter")}arrayTransform(e,t){return new m("array_transform",[this,T(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new m("array_transform",[this,T(e),T(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,T(e)];return t!==void 0&&r.push(T(t)),new m("array_slice",r,"arraySlice")}arrayFirst(){return new m("array_first",[this],"arrayFirst")}arrayFirstN(e){return new m("array_first_n",[this,T(e)],"arrayFirstN")}arrayLast(){return new m("array_last",[this],"arrayLast")}arrayLastN(e){return new m("array_last_n",[this,T(e)],"arrayLastN")}arrayMaximum(){return new m("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new m("maximum_n",[this,T(e)],"arrayMaximumN")}arrayMinimum(){return new m("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new m("minimum_n",[this,T(e)],"arrayMinimumN")}arrayIndexOf(e){return new m("array_index_of",[this,T(e),T("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new m("array_index_of",[this,T(e),T("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new m("array_index_of_all",[this,T(e)],"arrayIndexOfAll")}byteLength(){return new m("byte_length",[this],"byteLength")}ceil(){return new m("ceil",[this])}floor(){return new m("floor",[this])}abs(){return new m("abs",[this])}exp(){return new m("exp",[this])}mapGet(e){return new m("map_get",[this,pn(e)],"mapGet")}mapSet(e,t,...r){const s=[this,T(e),T(t),...r.map(T)];return new m("map_set",s,"mapSet")}mapKeys(){return new m("map_keys",[this],"mapKeys")}mapValues(){return new m("map_values",[this],"mapValues")}mapEntries(){return new m("map_entries",[this],"mapEntries")}getField(e){return new m("get_field",[this,T(e)],"get_field")}count(){return fe._create("count",[this],"count")}sum(){return fe._create("sum",[this],"sum")}average(){return fe._create("average",[this],"average")}minimum(){return fe._create("minimum",[this],"minimum")}maximum(){return fe._create("maximum",[this],"maximum")}first(){return fe._create("first",[this],"first")}last(){return fe._create("last",[this],"last")}arrayAgg(){return fe._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return fe._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return fe._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new m("maximum",[this,...r.map(T)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new m("minimum",[this,...r.map(T)],"minimum")}vectorLength(){return new m("vector_length",[this],"vectorLength")}cosineDistance(e){return new m("cosine_distance",[this,Dr(e)],"cosineDistance")}dotProduct(e){return new m("dot_product",[this,Dr(e)],"dotProduct")}euclideanDistance(e){return new m("euclidean_distance",[this,Dr(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new m("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new m("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new m("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new m("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new m("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new m("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new m("timestamp_add",[this,T(e),T(t)],"timestampAdd")}timestampSubtract(e,t){return new m("timestamp_subtract",[this,T(e),T(t)],"timestampSubtract")}timestampDiff(e,t){return new m("timestamp_diff",[this,Es(e),T(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,T(e)];return t&&r.push(T(t)),new m("timestamp_extract",r,"timestampExtract")}documentId(){return new m("document_id",[this],"documentId")}parent(){return new m("parent",[this],"parent")}substring(e,t){const r=T(e);return new m("substring",t===void 0?[this,r]:[this,r,T(t)],"substring")}arrayGet(e){return new m("array_get",[this,T(e)],"arrayGet")}isError(){return new m("is_error",[this],"isError").asBoolean()}ifError(e){const t=new m("if_error",[this,T(e)],"ifError");return e instanceof Xe?t.asBoolean():t}isAbsent(){return new m("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new m("map_remove",[this,T(e)],"mapRemove")}mapMerge(e,...t){const r=T(e),s=t.map(T);return new m("map_merge",[this,r,...s],"mapMerge")}pow(e){return new m("pow",[this,T(e)])}trunc(e){return e===void 0?new m("trunc",[this]):new m("trunc",[this,T(e)],"trunc")}round(e){return e===void 0?new m("round",[this]):new m("round",[this,T(e)],"round")}collectionId(){return new m("collection_id",[this])}length(){return new m("length",[this])}ln(){return new m("ln",[this])}sqrt(){return new m("sqrt",[this])}stringReverse(){return new m("string_reverse",[this])}ifAbsent(e){return new m("if_absent",[this,T(e)],"ifAbsent")}ifNull(e){return new m("if_null",[this,T(e)],"ifNull")}coalesce(e,...t){return new m("coalesce",[this,T(e),...t.map(T)],"coalesce")}join(e){return new m("join",[this,T(e)],"join")}log10(){return new m("log10",[this])}arraySum(){return new m("sum",[this])}split(e){return new m("split",[this,T(e)])}timestampTruncate(e,t){const r=[this,T(e)];return t&&r.push(T(t)),new m("timestamp_trunc",r)}ascending(){return Nl(this)}descending(){return Dl(this)}as(e){return new Pl(this,e,"as")}}class fe{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new fe(e,t);return s._methodName=r,s}as(e){return new Rl(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Rl{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Pl{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ht extends yt{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class qt extends yt{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new m("geo_distance",[this,T(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Gn(n){return bl(n,"field")}function bl(n,e){return new qt(typeof n=="string"?Re===n?$c()._internalPath:Pn("field",n):n._internalPath,e)}class Bt extends yt{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Bt(e,void 0);return t._protoValue=e,t}_toProto(e){return I(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,vl(this._protoValue)||(this._protoValue=kt(this.value,e))}}function pn(n,e){return mo(n,"constant")}function mo(n,e){const t=new Bt(n,e);return typeof n=="boolean"?new po(t):t}class m extends yt{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new se({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Xe extends yt{get _methodName(){return this._expr._methodName}countIf(){return fe._create("count_if",[this],"countIf")}not(){return new m("not",[this],"not").asBoolean()}conditional(e,t){return new m("conditional",[this,e,t],"conditional")}ifError(e){const t=T(e),r=new m("if_error",[this,t],"ifError");return t instanceof Xe?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class _o extends Xe{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class po extends Xe{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Cl extends Xe{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Sl(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(pn(r)),t.push(T(s))}return new m("map",t,"map")}function xl(n){return function(t,r){return new m("array",t.map(s=>T(s)),r)}(n,"array")}function Nl(n){return new go(Es(n),"ascending","ascending")}function Dl(n){return new go(Es(n),"descending","descending")}class go{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:eo(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class ye{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class yo extends ye{get _name(){return"add_fields"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[_n(e,this.fields)]}}_readUserData(e){super._readUserData(e),Ze(this.fields,e)}}class To extends ye{get _name(){return"aggregate"}get _optionsUtil(){return new se({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[_n(e,this.accumulators),_n(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ze(this.groups,e),Ze(this.accumulators,e)}}class Eo extends ye{get _name(){return"distinct"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[_n(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ze(this.groups,e)}}class Tr extends ye{get _name(){return"collection"}get _optionsUtil(){return new se({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class Er extends ye{get _name(){return"collection_group"}get _optionsUtil(){return new se({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class ws extends ye{get _name(){return"database"}get _optionsUtil(){return new se({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Is extends ye{get _name(){return"documents"}get _optionsUtil(){return new se({})}constructor(e,t){if(super(t),!e||e.length===0)throw new E(_.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new E(_.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class wr extends ye{get _name(){return"where"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Ze(this.condition,e)}}class dt extends ye{get _name(){return"limit"}get _optionsUtil(){return new se({})}constructor(e,t){I(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[us(e,this.limit)]}}}class Di extends ye{get _name(){return"offset"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[us(e,this.offset)]}}}class kl extends ye{get _name(){return"select"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[_n(e,this.selections)]}}_readUserData(e){super._readUserData(e),Ze(this.selections,e)}}class Oe extends ye{get _name(){return"sort"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Ze(this.orderings,e)}}class As extends ye{get _name(){return"replace_with"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),eo(As.Pr)]}}_readUserData(e){super._readUserData(e),Ze(this.map,e)}}As.Pr="full_replace";function Ze(n,e){return fo(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
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
 */class tn{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return fo(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Ar("where",e),t.push(new wr(e,{})),new tn(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new dt(e,{})),new tn(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new Oe(this.Ar("sort",e.orderings),{})):r.push(new Oe(this.Ar("sort",[e,...t]),{})),new tn(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class ae{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ir(this)}getPipelineCollectionGroup(){return vs(this)}getPipelineCollectionId(){return Ll(this)}getPipelineDocuments(){return Hr(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==Eo.name&&s._name!==To.name||(r="keyless"),s._name===kl.name&&r==="exact"&&(r="augmented"),s._name===yo.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Qe(this)}}function Qe(n){const e=n.stages[0];return e instanceof Tr||e instanceof Er||e instanceof ws||e instanceof Is?e._name:"unknown"}function Ir(n){if(Qe(n)==="collection")return n.stages[0].Er}function vs(n){if(Qe(n)==="collection_group")return n.stages[0].collectionId}function Ll(n){switch(Qe(n)){case"collection":return k.fromString(Ir(n)).lastSegment();case"collection_group":return vs(n);default:return}}function Hr(n){if(Qe(n)==="documents")return n.stages[0].hr}class h{constructor(e,t){this.type=e,this.value=t}static dr(){return new h("ERROR",void 0)}static mr(){return new h("UNSET",void 0)}static pr(){return new h("NULL",xt)}static newValue(e){return _e(e)?new h("NULL",xt):function(r){return!!r&&"booleanValue"in r}(e)?new h("BOOLEAN",e):Pe(e)?new h("INT",e):it(e)?new h("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new h("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new h("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new h("BYTES",e):e.referenceValue?new h("REFERENCE",e):e.geoPointValue?new h("GEO_POINT",e):Dt(e)?new h("ARRAY",e):Yn(e)?new h("VECTOR",e):ot(e)?new h("MAP",e):new h("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function nn(n){if(!n.gr())return n.value}function wo(n){return n instanceof Xe?n._expr:n}function R(n){if((n=wo(n))instanceof qt)return new Ol(n);if(n instanceof Bt)return new Ul(n);if(n instanceof Ht)return new Ml(n);if(n instanceof m){if(n.name==="add")return new Bl(n);if(n.name==="subtract")return new $l(n);if(n.name==="multiply")return new jl(n);if(n.name==="divide")return new zl(n);if(n.name==="mod")return new Gl(n);if(n.name==="and")return new Ql(n);if(n.name==="equal")return new sh(n);if(n.name==="not_equal")return new ih(n);if(n.name==="less_than")return new ah(n);if(n.name==="less_than_or_equal")return new oh(n);if(n.name==="greater_than")return new uh(n);if(n.name==="greater_than_or_equal")return new ch(n);if(n.name==="array_concat")return new lh(n);if(n.name==="array_reverse")return new hh(n);if(n.name==="array_contains")return new dh(n);if(n.name==="array_contains_all")return new fh(n);if(n.name==="array_contains_any")return new mh(n);if(n.name==="array_length")return new _h(n);if(n.name==="array_element")return new ph(n);if(n.name==="equal_any")return new Io(n);if(n.name==="not_equal_any")return new Kl(n);if(n.name==="is_nan")return new Hl(n);if(n.name==="is_not_nan")return new Yl(n);if(n.name==="is_null")return new Jl(n);if(n.name==="is_not_null")return new Xl(n);if(n.name==="is_error")return new Zl(n);if(n.name==="exists")return new eh(n);if(n.name==="not")return new Ar(n);if(n.name==="or")return new Wl(n);if(n.name==="xor")return new Vs(n);if(n.name==="conditional")return new th(n);if(n.name==="maximum")return new nh(n);if(n.name==="minimum")return new rh(n);if(n.name==="reverse")return new gh(n);if(n.name==="replace_first")return new yh(n);if(n.name==="replace_all")return new Th(n);if(n.name==="char_length")return new Eh(n);if(n.name==="byte_length")return new wh(n);if(n.name==="like")return new Ih(n);if(n.name==="regex_contains")return new Ah(n);if(n.name==="regex_match")return new vh(n);if(n.name==="string_contains")return new Vh(n);if(n.name==="starts_with")return new Rh(n);if(n.name==="ends_with")return new Ph(n);if(n.name==="to_lower")return new bh(n);if(n.name==="to_upper")return new Ch(n);if(n.name==="trim")return new Sh(n);if(n.name==="string_concat")return new xh(n);if(n.name==="map_get")return new Nh(n);if(n.name==="cosine_distance")return new Dh(n);if(n.name==="dot_product")return new kh(n);if(n.name==="euclidean_distance")return new Lh(n);if(n.name==="vector_length")return new Oh(n);if(n.name==="unix_micros_to_timestamp")return new Bh(n);if(n.name==="timestamp_to_unix_micros")return new zh(n);if(n.name==="unix_millis_to_timestamp")return new $h(n);if(n.name==="timestamp_to_unix_millis")return new Gh(n);if(n.name==="unix_seconds_to_timestamp")return new jh(n);if(n.name==="timestamp_to_unix_seconds")return new Qh(n);if(n.name==="timestamp_add")return new Wh(n);if(n.name==="timestamp_subtract")return new Kh(n)}throw new Error(`Unknown Expr : ${n}`)}class Ol{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Re)return h.newValue({referenceValue:nr(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return h.newValue({timestampValue:zn(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return h.newValue({timestampValue:zn(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?lr(r)?h.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:zn(i.serializer,b.fromTimestamp(St(a)))};if(i.serverTimestampBehavior==="previous"){const o=An(a);if(o)return o}return{nullValue:"NULL_VALUE"}}(e,r)):h.newValue(r):h.mr()}}class Ul{constructor(e){this.expr=e}evaluate(e,t){return h.newValue(this.expr._getValue())}}class Ml{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>R(s).evaluate(e,t));return r.some(s=>s.gr())?h.dr():h.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function ee(n){return it(n)?Number(n.doubleValue):Number(n.integerValue)}function De(n){return BigInt(n.integerValue)}const Fl=BigInt("0x7fffffffffffffff"),ql=-BigInt("0x8000000000000000");class bn{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length>=2,24778);const r=R(this.expr.params[0]).evaluate(e,t),s=R(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const a of this.expr.params.slice(2)){const o=R(a).evaluate(e,t);i=this.wr(i,o)}return i}wr(e,t){if(e.gr()||t.gr())return h.dr();if(e.yr()||t.yr())return h.pr();const r=e.value,s=t.value;if(!it(r)&&!Pe(r)||!it(s)&&!Pe(s))return h.dr();if(it(r)||it(s)){const i=this.br(r,s);return i?h.newValue(i):h.dr()}if(Pe(r)&&Pe(s)){const i=this.Sr(r,s);return i===void 0?h.dr():typeof i=="number"?h.newValue({doubleValue:i}):i<ql||i>Fl?h.dr():h.newValue({integerValue:`${i}`})}return h.dr()}}function qe(n,e){return H(n)!==H(e)?"TYPE_MISMATCH":de(n)||de(e)?"NOT_EQ":_e(n)&&_e(e)?"EQ":_e(n)||_e(e)?"NULL":Dt(n)&&Dt(e)?function(r,s){if(r.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let a=0;a<(r.values?.length??0);a++){const o=r.values[a],u=s.values[a];switch(qe(o,u)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:V(44609,{vr:o,Dr:u})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Yn(n)&&Yn(e)||ot(n)&&ot(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(Kn(i)!==Kn(a))return"NOT_EQ";let o=!1;for(const u in i)if(i.hasOwnProperty(u)){if(a[u]===void 0)return"NOT_EQ";switch(qe(i[u],a[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":o=!0}}return o?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Ee(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class Bl extends bn{Sr(e,t){return De(e)+De(t)}br(e,t){return{doubleValue:ee(e)+ee(t)}}}class $l extends bn{constructor(e){super(e),this.expr=e}Sr(e,t){return De(e)-De(t)}br(e,t){return{doubleValue:ee(e)-ee(t)}}}class jl extends bn{constructor(e){super(e),this.expr=e}Sr(e,t){return De(e)*De(t)}br(e,t){return{doubleValue:ee(e)*ee(t)}}}class zl extends bn{constructor(e){super(e),this.expr=e}Sr(e,t){const r=De(t);if(r!==BigInt(0))return De(e)/r}br(e,t){const r=ee(t);return r===0?{doubleValue:an(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:ee(e)/r}}}class Gl extends bn{constructor(e){super(e),this.expr=e}Sr(e,t){const r=De(t);if(r!==BigInt(0))return De(e)%r}br(e,t){const r=ee(t);if(r!==0)return{doubleValue:ee(e)%r}}}class Ql{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=R(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return h.newValue(X);break;case"NULL":s=!0;break;default:r=!0}}return r?h.dr():s?h.pr():h.newValue(le)}}class Ar{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,9634);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return h.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return h.pr();default:return h.dr()}}}class Wl{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=R(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return h.newValue(le);break;case"NULL":s=!0;break;default:r=!0}}return r?h.dr():s?h.pr():h.newValue(X)}}class Vs{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=R(i).evaluate(e,t);switch(a.type){case"BOOLEAN":r=Vs.xor(r,!!a.value?.booleanValue);break;case"NULL":s=!0;break;default:return h.dr()}}return s?h.pr():h.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Io{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,55094);let r=!1;const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return h.dr()}const i=R(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();for(const a of i.value?.arrayValue?.values??[])switch(_e(s.value)&&_e(a)?"EQ":qe(s.value,a)){case"EQ":return h.newValue(le);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:V(44608,{value:s.value,candidate:a})}return r?h.pr():h.newValue(X)}}class Kl{constructor(e){this.expr=e}evaluate(e,t){return new Ar(new m("not",[new m("equal_any",this.expr.params)])).evaluate(e,t)}}class Hl{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,23322);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return h.newValue(X);case"DOUBLE":return h.newValue({booleanValue:isNaN(ee(r.value))});case"NULL":return h.pr();default:return h.dr()}}}class Yl{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===1,50406),new Ar(new m("not",[new m("is_nan",this.expr.params)])).evaluate(e,t)}}class Jl{constructor(e){this.expr=e}evaluate(e,t){switch(I(this.expr.params.length===1,23123),R(this.expr.params[0]).evaluate(e,t).type){case"NULL":return h.newValue(le);case"UNSET":case"ERROR":return h.dr();default:return h.newValue(X)}}}class Xl{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===1,23167),new Ar(new m("not",[new m("is_null",this.expr.params)])).evaluate(e,t)}}class Zl{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===1,5228),R(this.expr.params[0]).evaluate(e,t).type==="ERROR"?h.newValue(le):h.newValue(X)}}class eh{constructor(e){this.expr=e}evaluate(e,t){switch(I(this.expr.params.length===1,6877),R(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return h.dr();case"UNSET":return h.newValue(X);default:return h.newValue(le)}}}class th{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===3,11706);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?R(this.expr.params[1]).evaluate(e,t):R(this.expr.params[2]).evaluate(e,t);case"NULL":return R(this.expr.params[2]).evaluate(e,t);default:return h.dr()}}}class nh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>R(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||he(i.value,s.value)>0?i:s}return s===void 0?h.pr():s}}class rh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>R(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||he(i.value,s.value)<0?i:s}return s===void 0?h.pr():s}}class $t{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return h.dr()}const s=R(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return h.dr()}return this.Cr(r,s)}}class sh extends $t{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return h.newValue(le);if(e.yr()||t.yr()||de(e.value)||de(t.value)||H(e.value)!==H(t.value))return h.newValue(X);switch(qe(e.value,t.value)){case"EQ":return h.newValue(le);case"NOT_EQ":return h.newValue(X);case"NULL":return h.pr();default:V(44615,{left:e,right:t})}}}class ih extends $t{constructor(e){super(e),this.expr=e}Cr(e,t){switch(qe(e.value,t.value)){case"EQ":return h.newValue(X);case"NOT_EQ":case"TYPE_MISMATCH":return h.newValue(le);case"NULL":return h.pr();default:V(44614,{left:e,right:t})}}}class ah extends $t{constructor(e){super(e),this.expr=e}Cr(e,t){return H(e.value)!==H(t.value)||de(e.value)||de(t.value)?h.newValue(X):h.newValue({booleanValue:he(e.value,t.value)<0})}}class oh extends $t{constructor(e){super(e),this.expr=e}Cr(e,t){return H(e.value)!==H(t.value)||de(e.value)||de(t.value)?h.newValue(X):qe(e.value,t.value)==="EQ"?h.newValue(le):h.newValue({booleanValue:he(e.value,t.value)<0})}}class uh extends $t{constructor(e){super(e),this.expr=e}Cr(e,t){return H(e.value)!==H(t.value)||de(e.value)||de(t.value)?h.newValue(X):h.newValue({booleanValue:he(e.value,t.value)>0})}}class ch extends $t{constructor(e){super(e),this.expr=e}Cr(e,t){return H(e.value)!==H(t.value)||de(e.value)||de(t.value)?h.newValue(X):qe(e.value,t.value)==="EQ"?h.newValue(le):h.newValue({booleanValue:he(e.value,t.value)>0})}}class lh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class hh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,216);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"ARRAY":{const s=r.value.arrayValue?.values??[];return h.newValue({arrayValue:{values:[...s].reverse()}})}default:return h.dr()}}}class dh{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===2,52884),new Io(new m("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class fh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,1392);let r=!1;const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}const i=R(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const a=i.value?.arrayValue?.values??[],o=s.value?.arrayValue?.values??[];for(const u of a){let c=!1;r=!1;for(const l of o){switch(_e(u)&&_e(l)?"EQ":qe(u,l)){case"EQ":c=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:V(44613,{value:l,search:u})}if(c)break}if(!c)return h.newValue(X)}return h.newValue(le)}}class mh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,2680);let r=!1;const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}const i=R(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const a=i.value?.arrayValue?.values??[],o=s.value?.arrayValue?.values??[];for(const u of o)for(const c of a)switch(_e(u)&&_e(c)?"EQ":qe(u,c)){case"EQ":return h.newValue(le);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:V(60403,{value:u,search:c})}return r?h.pr():h.newValue(X)}}class _h{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,38605);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"ARRAY":return h.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return h.dr()}}}class ph{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class gh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,1508);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"BYTES":{const s=r.value?.bytesValue;if(typeof s=="string"){const i=K.fromBase64String(s).toUint8Array();return i.reverse(),h.newValue({bytesValue:K.fromUint8Array(i).toBase64()})}return h.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=r.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),a=Array.from(i,o=>o.segment).reverse();return h.newValue({stringValue:a.join("")})}default:return h.dr()}}}class yh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Th{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Eh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,19400);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return h.pr();case"STRING":{const s=function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const l=a.codePointAt(u+1);l!==void 0&&l>=56320&&l<=57343?(o+=1,u++):o+=1}else o+=1;else o+=1;else{if(!(c<=1114111))return;o+=1,u++}}return o}(r.value.stringValue);return s===void 0?h.dr():h.newValue({integerValue:s})}default:return h.dr()}}}class wh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,8486);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const s=r.value?.bytesValue;return typeof s=="string"?h.newValue({integerValue:K.fromBase64String(s).toUint8Array().length}):h.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c>=55296&&c<=57343){if(!(c<=56319))return;{const l=a.codePointAt(u+1);if(l===void 0||!(l>=56320&&l<=57343))return;o+=4,u++}}else if(c<=127)o+=1;else if(c<=2047)o+=2;else if(c<=65535)o+=3;else{if(!(c<=1114111))return;o+=4,u++}}return o}(r.value?.stringValue);return s===void 0?h.dr():h.newValue({integerValue:s})}case"NULL":return h.pr();default:return h.dr()}}}class jt{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return h.dr()}const i=R(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return h.dr()}return r?h.pr():this.Fr(s.value?.stringValue,i.value?.stringValue)}}class Ih extends jt{Fr(e,t){try{const r=function(a){let o="";for(let u=0;u<a.length;u++){const c=a.charAt(u);switch(c){case"_":o+=".";break;case"%":o+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":o+="\\"+c;break;default:o+=c}}return"^"+o+"$"}(t),s=rs.compile(r);return h.newValue({booleanValue:s.matches(e)})}catch(r){return Ae(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),h.dr()}}}class Ah extends jt{Fr(e,t){try{const r=rs.compile(t);return h.newValue({booleanValue:r.test(e)})}catch{return Ae(`Invalid regex pattern found in regex_contains: ${t}, returning error`),h.dr()}}}class vh extends jt{Fr(e,t){try{return h.newValue({booleanValue:rs.compile(t).matches(e)})}catch{return Ae(`Invalid regex pattern found in regex_match: ${t}, returning error`),h.dr()}}}class Vh extends jt{Fr(e,t){return h.newValue({booleanValue:e.includes(t)})}}class Rh extends jt{Fr(e,t){return h.newValue({booleanValue:e.startsWith(t)})}}class Ph extends jt{Fr(e,t){return h.newValue({booleanValue:e.endsWith(t)})}}class bh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,29079);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return h.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return h.pr();default:return h.dr()}}}class Ch{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,60487);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return h.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return h.pr();default:return h.dr()}}}class Sh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,28544);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return h.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return h.pr();default:return h.dr()}}}class xh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>R(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return h.dr()}return i?h.pr():h.newValue({stringValue:s})}}class Nh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,4483);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return h.mr();case"MAP":break;default:return h.dr()}const s=R(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return h.dr();const i=r.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?h.mr():h.newValue(i)}}class Rs{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return h.dr()}const i=R(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const a=Br(s.value),o=Br(i.value);if(a===void 0||o===void 0||a.values?.length!==o.values?.length)return h.dr();const u=this.Or(a,o);return u===void 0||isNaN(u)?h.dr():h.newValue({doubleValue:u})}}class Dh extends Rs{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return;let i=0,a=0,o=0;for(let c=0;c<r.length;c++){if(!Ye(r[c])||!Ye(s[c]))return;const l=ee(r[c]),d=ee(s[c]);i+=l*d,a+=l*l,o+=d*d}const u=Math.sqrt(a)*Math.sqrt(o);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class kh extends Rs{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Ye(r[a])||!Ye(s[a]))return;i+=ee(r[a])*ee(s[a])}return i}}class Lh extends Rs{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Ye(r[a])||!Ye(s[a]))return;const o=ee(r[a]),u=ee(s[a]);i+=Math.pow(o-u,2)}return Math.sqrt(i)}}class Oh{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,39044);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const s=Br(r.value);return h.newValue({integerValue:s?.values?.length??0})}case"NULL":return h.pr();default:return h.dr()}}}const gn=BigInt(-62135596800),yn=BigInt(253402300799),sr=BigInt(1e3),We=BigInt(1e6),Uh=gn*sr,Mh=yn*sr+BigInt(999),Fh=gn*We,qh=yn*We+BigInt(999999);function Ps(n){return n>=Fh&&n<=qh}function Ao(n){return n>=gn&&n<=yn}function Tn(n,e){const t=BigInt(n);return!(t<gn||t>yn)&&!(e<0||e>=1e9)&&(t!==gn||e===0)&&!(t===yn&&e>999999999)}function vo(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function bs(n){return BigInt(n.seconds)*We+BigInt(Math.trunc(n.nanoseconds/1e3))}class Cs{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return h.pr();default:return h.dr()}}}class Bh extends Cs{toTimestamp(e){if(!Ps(e))return h.dr();let t=Number(e/We),r=Number(e%We*BigInt(1e3));const s=vo(t,r);return t=s.seconds,r=s.nanos,Tn(t,r)?h.newValue({timestampValue:{seconds:t,nanos:r}}):h.dr()}}class $h extends Cs{toTimestamp(e){if(!function(a){return a>=Uh&&a<=Mh}(e))return h.dr();let t=Number(e/sr),r=Number(e%sr*BigInt(1e6));const s=vo(t,r);return t=s.seconds,r=s.nanos,Tn(t,r)?h.newValue({timestampValue:{seconds:t,nanos:r}}):h.dr()}}class jh extends Cs{toTimestamp(e){if(!Ao(e))return h.dr();const t=Number(e);return h.newValue({timestampValue:{seconds:t,nanos:0}})}}class Ss{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=R(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return h.pr();default:return h.dr()}const s=fs(r.value.timestampValue);return Tn(s.seconds,s.nanoseconds)?this.Mr(s):h.dr()}}class zh extends Ss{Mr(e){const t=bs(e);return Ps(t)?h.newValue({integerValue:`${t.toString()}`}):h.dr()}}class Gh extends Ss{Mr(e){const t=bs(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?h.newValue({integerValue:r.toString()}):h.newValue({integerValue:(r-BigInt(1)).toString()})}}class Qh extends Ss{Mr(e){const t=BigInt(e.seconds);return Ao(t)?h.newValue({integerValue:t.toString()}):h.dr()}}class Vo{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return h.dr()}const i=R(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(L){switch(L){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return h.dr();break;case"NULL":r=!0;break;default:return h.dr()}const o=R(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":r=!0;break;default:return h.dr()}if(r)return h.pr();const u=BigInt(o.value.integerValue);let c;try{switch(a){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return h.dr()}if(a!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(a)))return h.dr()}catch(N){return Ae(`Error during timestamp arithmetic: ${N}`),h.dr()}const l=fs(s.value.timestampValue);if(!Tn(l.seconds,l.nanoseconds))return h.dr();const d=bs(l),f=this.Lr(d,c);if(!Ps(f))return h.dr();const g=Number(f/We),y=f%We,P=Number((y<0?y+We:y)*BigInt(1e3)),v=y<0?g-1:g;return Tn(v,P)?h.newValue({timestampValue:{seconds:v,nanos:P}}):h.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Wh extends Vo{Lr(e,t){return e+t}}class Kh extends Vo{Lr(e,t){return e-t}}function En(n){if((n=wo(n))instanceof qt)return`fld(${n.fieldName})`;if(n instanceof Bt)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Q?`ref(${t.path})`:t instanceof ce?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof m)return`fn(${n.name},[${n.params.map(En).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(En).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Hh(n){if(n instanceof yo)return`${n._name}(${Un(n.fields)})`;if(n instanceof To){let e=`${n._name}(${Un(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Un(n.groups)})`),e}if(n instanceof Eo)return`${n._name}(${Un(n.groups)})`;if(n instanceof Tr)return`${n._name}(${n.Er})`;if(n instanceof Er)return`${n._name}(${n.collectionId})`;if(n instanceof ws)return`${n._name}()`;if(n instanceof Is)return`${n._name}(${n.hr.sort()})`;if(n instanceof wr)return`${n._name}(${En(n.condition)})`;if(n instanceof dt)return`${n._name}(${n.limit})`;if(n instanceof Oe)return`${n._name}(${function(t){return t.map(r=>`${En(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Un(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${En(t)}`).join(",")}`}function Me(n){return n.stages.map(e=>Hh(e)).join("|")}function Ro(n,e){return Me(n)===Me(e)}function Y(n){return n instanceof ae}function ki(n){return Y(n)?Me(n):Zt(n)}function Po(n){return Y(n)?Me(n):function(t){return`${La(Ce(t))}|lt:${t.limitType}`}(n)}function vr(n,e){return n instanceof ae&&e instanceof ae?Ro(n,e):!(n instanceof ae&&!(e instanceof ae)||!(n instanceof ae)&&e instanceof ae)&&fc(n,e)}function bo(n){return st(n)?Me(n):La(n)}function Co(n,e){return n instanceof ae&&e instanceof ae?Ro(n,e):!(n instanceof ae&&!(e instanceof ae)||!(n instanceof ae)&&e instanceof ae)&&Oa(n,e)}function Yh(n,e){const t=function(s){let i=!1;const a=[];for(const o of s)if(o instanceof Oe)if(i=!0,o.orderings.some(u=>u.expr instanceof qt&&u.expr.fieldName===Re))a.push(o);else{const u=o.orderings.map(c=>c);u.push(Gn(Re).ascending()),a.push(new Oe(u,{}))}else o instanceof dt&&(i||(a.push(new Oe([Gn(Re).ascending()],{})),i=!0)),a.push(o);return i||a.push(new Oe([Gn(Re).ascending()],{})),a}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new ae(n.userDataReader.serializer,t,e)}/**
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
 */class Jh{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Wu(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Jt(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Jt(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ja();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(s.key)?null:o;const u=Pa(a,o);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),S())}isEqual(e){return this.batchId===e.batchId&&Ct(this.mutations,e.mutations,(t,r)=>hi(t,r))&&Ct(this.baseMutations,e.baseMutations,(t,r)=>hi(t,r))}}class xs{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){I(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return yc}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new xs(e,t,r,s)}}/**
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
 */const So="";function Xh(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Li(e)),e=Zh(n.get(t),e);return Li(e)}function Zh(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case So:t+="";break;default:t+=i}}return t}function Li(n){return n+So+""}/**
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
 */class ed{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ue{constructor(e,t,r,s,i=b.min(),a=b.min(),o=K.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=u}withSequenceNumber(e){return new Ue(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class td{constructor(e){this.qr=e}}function nd(n){const e=Lc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zr(e,e.limit,"L"):e}/**
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
 */class rd{constructor(){this.Yi=new sd}addToCollectionParentIndex(e,t){return this.Yi.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}deleteAllFieldIndexes(e){return p.resolve()}createTargetIndexes(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(Je.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(Je.min())}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class sd{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new W(k.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new W(k.comparator)).toArray()}}/**
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
 */class et{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new et(0)}static ws(){return new et(-1)}}// Copyright 2024 Google LLC* @license
function xo(n,e){let t=e;for(const r of n.stages)t=ad({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function Vr(n,e){return xo(n,[e]).length>0}function id(n,e){return Y(n)?Vr(n,e):_r(n,e)}function ad(n,e,t){if(e instanceof Tr)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&`/${o.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof wr)return function(s,i,a){return a.filter(o=>{const u=nn(R(i.condition).evaluate(s,o));return u!==void 0&&Ee(u,le)})}(n,e,t);if(e instanceof Er)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&o.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof ws)return function(s,i,a){return a.filter(o=>o.isFoundDocument())}(0,0,t);if(e instanceof Is)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&i.Tr.has(o.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof dt)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof Oe)return function(s,i,a){const o=i.orderings.map(u=>({Os:R(u.expr),direction:u.direction}));return[...a].sort((u,c)=>{for(const{Os:l,direction:d}of o){const f=nn(l.evaluate(s,u)),g=nn(l.evaluate(s,c)),y=he(f??xt,g??xt);if(y!==0)return d==="ascending"?y:-y}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Yr(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Oe)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=nn(R(s.expr).evaluate({serializer:n.serializer},t)),a=nn(R(s.expr).evaluate({serializer:n.serializer},r)),o=he(i||xt,a||xt);if(o!==0)return s.direction==="ascending"?o:-o}return 0}}function kr(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof dt)return{limit:t.limit}}}/**
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
 */class od{constructor(){this.changes=new pt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ud{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cd{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Jt(r.mutation,s,we.empty(),O.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,S()).next(()=>r))}getLocalViewOfDocuments(e,t,r=S()){const s=$e();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=At();return i.forEach((o,u)=>{a=a.insert(o,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=$e();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,S()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,o)=>{t.set(a,o)})})}computeViews(e,t,r,s){let i=ue();const a=en(),o=function(){return en()}();return t.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof _t)?i=i.insert(c.key,c):l!==void 0?(a.set(c.key,l.mutation.getFieldMask()),Jt(l.mutation,c,l.mutation.getFieldMask(),O.now())):a.set(c.key,we.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>a.set(c,l)),t.forEach((c,l)=>o.set(c,new ud(l,a.get(c)??null))),o))}recalculateAndSaveOverlays(e,t){const r=en();let s=new M((a,o)=>a-o),i=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const o of a)o.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=r.get(u)||we.empty();l=o.applyToLocalView(c,l),r.set(u,l);const d=(s.get(o.batchId)||S()).add(u);s=s.insert(o.batchId,d)})}).next(()=>{const a=[],o=s.getReverseIterator();for(;o.hasNext();){const u=o.getNext(),c=u.key,l=u.value,d=ja();l.forEach(f=>{if(!i.has(f)){const g=Pa(t.get(f),r.get(f));g!==null&&d.set(f,g),i=i.add(f)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,d))}return p.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Y(t)?this.getDocumentsMatchingPipeline(e,t,r,s):lc(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):p.resolve($e());let o=mn,u=i;return a.next(c=>p.forEach(c,(l,d)=>(o<d.largestBatchId&&(o=d.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,S())).next(l=>({batchId:o,changes:$a(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new A(t)).next(r=>{let s=At();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=At();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,u=>{const c=function(d,f){return new Ut(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(l=>{l.forEach((d,f)=>{a=a.insert(d,f)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,o=>_r(t,o)))}getDocumentsMatchingPipeline(e,t,r,s){if(Qe(t)==="collection_group"){const i=vs(t);let a=At();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,u=>{const c=function(d,f){const g=d.stages.map(y=>y instanceof Er?new Tr(f.canonicalString(),{}):y);return new ae(d.serializer,g)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(l=>{l.forEach((d,f)=>{a=a.insert(d,f)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,Qe(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let o=S();for(const u of Hr(t))o=o.add(A.fromPath(u));return this.remoteDocumentCache.getEntries(e,o);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new E("invalid-argument",`Invalid pipeline source to execute offline: ${Me(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,o=>Vr(t,o)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const o=a.getKey();t.get(o)===null&&(t=t.insert(o,re.newInvalidDocument(o)))});let s=At();return t.forEach((i,a)=>{const o=e.get(i);o!==void 0&&Jt(o.mutation,a,we.empty(),O.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(Qe(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,k.fromString(Ir(t)),r);case"collection_group":throw new E("invalid-argument",`Unexpected collection group pipeline: ${Me(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Hr(t).map(s=>A.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new E("invalid-argument",`Failed to get overlays for pipeline: ${Me(t)}`)}}}/**
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
 */class ld{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return p.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Se(s.createTime)}}(t)),p.resolve()}getNamedQuery(e,t){return p.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,function(s){return{name:s.name,query:nd(s.bundledQuery),readTime:Se(s.readTime)}}(t)),p.resolve()}}/**
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
 */class hd{constructor(){this.overlays=new M(A.comparator),this.Ws=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$e();return p.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=$e();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),p.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),p.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ws.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ws.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const s=$e(),i=t.length+1,a=new A(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const u=o.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return p.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new M((c,l)=>c-l);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=$e(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const o=$e(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>o.set(c,l)),!(o.size()>=s)););return p.resolve(o)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ws.get(s.largestBatchId).delete(r.key);this.Ws.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ed(t,r));let i=this.Ws.get(t);i===void 0&&(i=S(),this.Ws.set(t,i)),this.Ws.set(t,i.add(r.key))}}/**
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
 */class dd{constructor(){this.sessionToken=K.EMPTY_BYTE_STRING}getSessionToken(e){return p.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,p.resolve()}}/**
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
 */class Ns{constructor(){this.Gs=new W(J.zs),this.js=new W(J.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new J(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new J(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new A(new k([])),r=new J(t,e),s=new J(t,e+1),i=[];return this.js.forEachInRange([r,s],a=>{this.Ys(a),i.push(a.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new A(new k([])),r=new J(t,e),s=new J(t,e+1);let i=S();return this.js.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new J(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class J{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return A.comparator(e.key,t.key)||x(e.n_,t.n_)}static Hs(e,t){return x(e.n_,t.n_)||A.comparator(e.key,t.key)}}/**
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
 */class fd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new W(J.zs)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Jh(i,t,r,s);this.mutationQueue.push(a);for(const o of s)this.r_=this.r_.add(new J(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return p.resolve(a)}lookupMutationBatch(e,t){return p.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?as:this.Wr-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new J(t,0),s=new J(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],a=>{const o=this.i_(a.n_);i.push(o)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new W(x);return t.forEach(s=>{const i=new J(s,0),a=new J(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,a],o=>{r=r.add(o.n_)})}),p.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;A.isDocumentKey(i)||(i=i.child(""));const a=new J(new A(i),0);let o=new W(x);return this.r_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(o=o.add(u.n_)),!0)},a),p.resolve(this.__(o))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){I(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return p.forEach(t.mutations,s=>{const i=new J(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new J(t,0),s=this.r_.firstAfterOrEqual(r);return p.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class md{constructor(e){this.a_=e,this.docs=function(){return new M(A.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():re.newInvalidDocument(t))}getEntries(e,t){let r=ue();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),p.resolve(r)}getAllEntries(e){let t=ue();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),p.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;Y(t)?(i=k.fromString(Ir(t)),a=l=>Vr(t,l)):(i=t.path,a=l=>_r(t,l));let o=ue();const u=new A(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||oc(ac(d),r)<=0||(s.has(d.key)||a(d))&&(o=o.insert(d.key,d.mutableCopy()))}return p.resolve(o)}getAllFromCollectionGroup(e,t,r,s){V(9500)}u_(e,t){return p.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _d(this)}getSize(e){return p.resolve(this.size)}}class _d extends od{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),p.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
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
 */class pd{constructor(e){this.persistence=e,this.c_=new pt(t=>bo(t),Co),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.l_=0,this.E_=new Ns,this.targetCount=0,this.h_=et.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),p.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new et(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.vs(t),p.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((a,o)=>{o.sequenceNumber<=t&&r.get(o.targetId)===null&&(this.c_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.E_.containsKey(t))}}/**
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
 */class No{constructor(e,t){this.T_={},this.overlays={},this.P_=new gr(0),this.R_=!1,this.R_=!0,this.I_=new dd,this.referenceDelegate=e(this),this.A_=new pd(this),this.indexManager=new rd,this.remoteDocumentCache=function(s){return new md(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new td(t),this.d_=new ld(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new fd(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){w("MemoryPersistence","Starting transaction:",e);const s=new gd(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return p.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class gd extends ul{constructor(e){super(),this.currentSequenceNumber=e}}class Ds{constructor(e){this.persistence=e,this.g_=new Ns,this.y_=null}static w_(e){return new Ds(e)}get b_(){if(this.y_)return this.y_;throw V(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),p.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.b_,r=>{const s=A.fromPath(r);return this.S_(e,s).next(i=>{i||t.removeEntry(s,b.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.S_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}S_(e,t){return p.or([()=>p.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class ir{constructor(e,t){this.persistence=e,this.v_=new pt(r=>Xh(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ml(this,t)}static w_(e,t){return new ir(e,t)}f_(){}m_(e){return p.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return p.forEach(this.v_,(r,s)=>this.Fs(e,r,s).next(i=>i?p.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,a=>this.Fs(e,a,t).next(o=>{o||(r++,i.removeEntry(a,b.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),p.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),p.resolve()}removeReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),p.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),p.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bn(e.data.value)),t}Fs(e,t,r){return p.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return p.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ks{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=S(),s=S();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ks(e,t.fromCache,r,s)}}/**
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
 */function yd(n,e){return A.comparator(n.key,e.key)}/**
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
 */class Td{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ed{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return Eu()?8:cl(wu())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.So(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.vo(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Td;return this.Do(e,t,a).next(o=>{if(i.result=o,this.po)return this.xo(e,t,a,o.size)})}).next(()=>i.result)}xo(e,t,r,s){return Y(t)?p.resolve():r.documentReadCount<this.yo?(wt()<=Le.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",Zt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),p.resolve()):(wt()<=Le.DEBUG&&w("QueryEngine","Query:",Zt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(wt()<=Le.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",Zt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ce(t))):p.resolve())}So(e,t){if(Y(t))return p.resolve(null);let r=t;if(gi(r))return p.resolve(null);let s=Ce(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=zr(r,null,"F"),s=Ce(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const o=S(...a);return this.bo.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Co(r,u);return this.Fo(r,l,o,c.readTime)?this.So(e,zr(r,null,"F")):this.Oo(e,l,r,c)}))})))}vo(e,t,r,s){return(Y(t)?function(a){for(const o of a.stages){if(o instanceof dt||o instanceof Di)return!1;if(o instanceof wr){if(o.condition instanceof _o&&o.condition._expr.name==="exists"&&o.condition._expr.params[0]instanceof qt&&o.condition._expr.params[0].fieldName===Re)continue;return!1}}return!0}(t):gi(t))||s.isEqual(b.min())?p.resolve(null):this.bo.getDocuments(e,r).next(i=>{const a=this.Co(t,i);return this.Fo(t,a,r,s)?p.resolve(null):(wt()<=Le.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ki(t)),this.Oo(e,a,t,ic(s,mn)).next(o=>o))})}Co(e,t){let r,s;return Y(e)?(r=new W(yd),s=i=>Vr(e,i)):(r=new W(hs(e)),s=i=>_r(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Fo(e,t,r,s){if(Y(e))return function(o){return o.stages.some(u=>u instanceof dt||u instanceof Di)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return wt()<=Le.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ki(t)),this.bo.getDocumentsMatchingQuery(e,t,Je.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ls="LocalStore",wd=3e8;class Id{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new M(x),this.Lo=new pt(i=>bo(i),Co),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cd(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function Ad(n,e,t,r){return new Id(n,e,t,r)}async function Do(n,e){const t=C(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],o=[];let u=S();for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(r,u).next(c=>({qo:c,removedBatchIds:a,addedBatchIds:o}))})})}function vd(n,e){const t=C(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(o,u,c,l){const d=c.batch,f=d.keys();let g=p.resolve();return f.forEach(y=>{g=g.next(()=>l.getEntry(u,y)).next(P=>{const v=c.docVersions.get(y);I(v!==null,48541),P.version.compareTo(v)<0&&(d.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),l.addEntry(P)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(u,d))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let u=S();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(u=u.add(o.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ko(n){const e=C(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function Vd(n,e){const t=C(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const o=[];e.targetChanges.forEach((l,d)=>{const f=s.get(d);if(!f)return;o.push(t.A_.removeMatchingKeys(i,l.removedDocuments,d).next(()=>t.A_.addMatchingKeys(i,l.addedDocuments,d)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(K.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(d,g),function(P,v,N){return P.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=wd?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(f,g,l)&&o.push(t.A_.updateTargetData(i,g))});let u=ue(),c=S();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),o.push(Rd(i,a,e.documentUpdates).next(l=>{u=l.$o,c=l.Ko})),!r.isEqual(b.min())){const l=t.A_.getLastRemoteSnapshotVersion(i).next(d=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));o.push(l)}return p.waitFor(o).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.No=s,i))}function Rd(n,e,t){let r=S(),s=S();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ue();return t.forEach((o,u)=>{const c=i.get(o);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(o)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(o,u.readTime),a=a.insert(o,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),a=a.insert(o,u)):w(Ls,"Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",u.version)}),{$o:a,Ko:s}})}function Pd(n,e){const t=C(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=as),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bd(n,e){const t=C(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,p.resolve(s)):t.A_.allocateTargetId(r).next(a=>(s=new Ue(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function Jr(n,e,t){const r=C(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ft(a))throw a;w(Ls,`Failed to update sequence numbers for target ${e}: ${a}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function Oi(n,e,t){const r=C(n);let s=b.min(),i=S();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,c,l){const d=C(u),f=d.Lo.get(l);return f!==void 0?p.resolve(d.No.get(f)):d.A_.getTargetData(c,l)}(r,a,Y(e)?e:Ce(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(a,o.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(a,e,t?s:b.min(),t?i:S())).next(o=>(Cd(r,o),{documents:o,Qo:i})))}function Cd(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||b.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
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
 */class Sd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Fe(t),this.Zo=!1):w("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
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
 */const ke="RemoteStore";class xd{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new et(1e3),this.ua=new et(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(a=>{r.enqueueAndForget(async()=>{Tt(this)&&(w(ke,"Restarting streams for network reachability change."),await async function(u){const c=C(u);c.ca.add(4),await Cn(c),c.ha.set("Unknown"),c.ca.delete(4),await Rr(c)}(this))})}),this.ha=new Sd(r,s)}}async function Rr(n){if(Tt(n))for(const e of n.la)await e(!0)}async function Cn(n){for(const e of n.la)await e(!1)}function Xr(n,e){return n._a.get(e)||void 0}function Lo(n,e){const t=C(n),r=Xr(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(o,u){const c=Xr(o,u);c!==void 0&&o.oa.delete(c);const l=function(f,g){return g%2!=0?f.ua.next():f.aa.next()}(o,u);return o._a.set(u,l),o.oa.set(l,u),l}(t,e.targetId);w(ke,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Ue(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),Fs(t)?Ms(t):zt(t).Jt()&&Us(t,i)}function Os(n,e){const t=C(n),r=zt(t),s=Xr(t,e);w(ke,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&Oo(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Tt(t)&&t.ha.set("Unknown"))}function Us(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void w(ke,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}zt(n).Tn(e)}function Oo(n,e){n.Ta.H(e),zt(n).Pn(e)}function Ms(n){n.Ta=new vc({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):S()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),zt(n).start(),n.ha.Xo()}function Fs(n){return Tt(n)&&!zt(n).Ht()&&n.sa.size>0}function Tt(n){return C(n).ca.size===0}function Uo(n){n.Ta=void 0}async function Nd(n){n.ha.set("Online")}async function Dd(n){n.sa.forEach((e,t)=>{Us(n,e)})}async function kd(n,e){Uo(n),Fs(n)?(n.ha.na(e),Ms(n)):n.ha.set("Unknown")}async function Ld(n,e,t){if(n.ha.set("Online"),e instanceof Ga&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const o of i.targetIds){if(s.sa.has(o)){const u=s.oa.get(o);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s._a.delete(u),s.oa.delete(o)),s.sa.delete(o)}s.Ta.removeTarget(o)}}(n,e)}catch(r){w(ke,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ar(n,r)}else if(e instanceof jn?n.Ta.se(e):e instanceof za?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(b.min()))try{const r=await ko(n.localStore);t.compareTo(r)>=0&&await function(i,a){const o=i.Ta.de(a);o.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.sa.get(l);d&&i.sa.set(l,d.withResumeToken(c.resumeToken,a))}}),o.targetMismatches.forEach((c,l)=>{const d=i.sa.get(c);if(!d)return;i.sa.set(c,d.withResumeToken(K.EMPTY_BYTE_STRING,d.snapshotVersion)),Oo(i,c);const f=new Ue(d.target,c,l,d.sequenceNumber);Us(i,f)});const u=function(l,d){const f=new Map;d.targetChanges.forEach((y,P)=>{const v=l.oa.get(P);v!==void 0&&f.set(v,y)});let g=new M(x);return d.targetMismatches.forEach((y,P)=>{const v=l.oa.get(y);v!==void 0&&(g=g.insert(v,P))}),new Vn(d.snapshotVersion,f,g,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)}(i,o);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){w(ke,"Failed to raise snapshot:",r),await ar(n,r)}}async function ar(n,e,t){if(!Ft(e))throw e;n.ca.add(1),await Cn(n),n.ha.set("Offline"),t||(t=()=>ko(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w(ke,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await Rr(n)})}function Mo(n,e){return e().catch(t=>ar(n,t,e))}async function Pr(n){const e=C(n),t=tt(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:as;for(;Od(e);)try{const s=await Pd(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,Ud(e,s)}catch(s){await ar(e,s)}Fo(e)&&qo(e)}function Od(n){return Tt(n)&&n.ia.length<10}function Ud(n,e){n.ia.push(e);const t=tt(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function Fo(n){return Tt(n)&&!tt(n).Ht()&&n.ia.length>0}function qo(n){tt(n).start()}async function Md(n){tt(n).dn()}async function Fd(n){const e=tt(n);for(const t of n.ia)e.In(t.mutations)}async function qd(n,e,t){const r=n.ia.shift(),s=xs.from(r,e,t);await Mo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Pr(n)}async function Bd(n,e){e&&tt(n).Rn&&await async function(r,s){if(function(a){return pc(a)&&a!==_.ABORTED}(s.code)){const i=r.ia.shift();tt(r).Zt(),await Mo(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pr(r)}}(n,e),Fo(n)&&qo(n)}async function Ui(n,e){const t=C(n);t.asyncQueue.verifyOperationInProgress(),w(ke,"RemoteStore received new credentials");const r=Tt(t);t.ca.add(3),await Cn(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Rr(t)}async function $d(n,e){const t=C(n);e?(t.ca.delete(2),await Rr(t)):e||(t.ca.add(2),await Cn(t),t.ha.set("Unknown"))}function zt(n){return n.Pa||(n.Pa=function(t,r,s){const i=C(t);return i.mn(),new el(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:Nd.bind(null,n),lt:Dd.bind(null,n),ht:kd.bind(null,n),hn:Ld.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),Fs(n)?Ms(n):n.ha.set("Unknown")):(await n.Pa.stop(),Uo(n))})),n.Pa}function tt(n){return n.Ra||(n.Ra=function(t,r,s){const i=C(t);return i.mn(),new tl(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:Md.bind(null,n),ht:Bd.bind(null,n),An:Fd.bind(null,n),Vn:qd.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await Pr(n)):(await n.Ra.stop(),n.ia.length>0&&(w(ke,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
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
 */class jd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Fe("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class qs{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,o=new qs(e,t,a,s,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bs(n,e){if(Fe("AsyncQueue",`${e}: ${n}`),Ft(n))return new E(_.UNAVAILABLE,`${e}: ${n}`);throw n}class Mi{constructor(){this.activeTargetIds=wc()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zd{constructor(){this.du=new Mi,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new Mi,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Lr(){return typeof document<"u"?document:null}/**
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
 */class ut{static emptySet(e){return new ut(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||A.comparator(t.key,r.key):(t,r)=>A.comparator(t.key,r.key),this.keyedMap=At(),this.sortedSet=new M(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ut;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Fi{constructor(){this.mu=new M(A.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):V(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Lt{constructor(e,t,r,s,i,a,o,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(o=>{a.push({type:0,doc:o})}),new Lt(e,t,ut.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Gd{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.Su())}}class Qd{constructor(){this.queries=qi(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,r){const s=C(t),i=s.queries;s.queries=qi(),i.forEach((a,o)=>{for(const u of o.wu)u.onError(r)})})(this,new E(_.ABORTED,"Firestore shutting down"))}}function qi(){return new pt(n=>Po(n),vr)}async function Wd(n,e){const t=C(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(r=2):(i=new Gd,r=e.Su()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const o=Bs(a,`Initialization of query '${Y(e.query)?Me(e.query):Zt(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&$s(t)}async function Kd(n,e){const t=C(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wu.indexOf(e);a>=0&&(i.wu.splice(a,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Hd(n,e){const t=C(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const o of a.wu)o.xu(s)&&(r=!0);a.yu=s}}r&&$s(t)}function Yd(n,e,t){const r=C(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function $s(n){n.vu.forEach(e=>{e.next()})}var Zr;(function(n){n.Default="default",n.Cache="cache"})(Zr||(Zr={}));class Jd{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=Lt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==Zr.Cache}}/**
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
 */class Bo{constructor(e){this.key=e}}class $o{constructor(e){this.key=e}}class Xd{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=S(),this.mutatedKeys=S(),this.Hu=Y(e)?Yr(e):hs(e),this.Ju=new ut(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new Fi,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal((d,f)=>{const g=s.get(d),y=id(this.query,f)?f:null,P=!!g&&this.mutatedKeys.has(g.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;g&&y?g.data.isEqual(y.data)?P!==v&&(r.track({type:3,doc:y}),N=!0):this.tc(g,y)||(r.track({type:2,doc:y}),N=!0,(u&&this.Hu(y,u)>0||c&&this.Hu(y,c)<0)&&(o=!0)):!g&&y?(r.track({type:0,doc:y}),N=!0):g&&!y&&(r.track({type:1,doc:g}),N=!0,(u||c)&&(o=!0)),N&&(y?(a=a.add(y),i=v?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))});const l=this.nc(this.query);if(l)if(Y(this.query)){const d=[];a.forEach(y=>d.push(y));const f=xo(this.query,d);let g=new ut(Yr(this.query));for(const y of f)g=g.add(y);a.forEach(y=>{g.has(y.key)||(i=i.delete(y.key),r.track({type:1,doc:y}))}),a=g}else{const d=this.rc(this.query);for(;a.size>l;){const f=d==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}}return{Ju:a,Xu:r,Fo:o,mutatedKeys:i}}nc(e){return Y(e)?kr(e)?.limit:e.limit||void 0}rc(e){if(Y(e)){const t=kr(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){if(Y(e)){const r=kr(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const a=e.Xu.gu();a.sort((l,d)=>function(g,y){const P=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V(20277,{ye:v})}};return P(g)-P(y)}(l.type,d.type)||this.Hu(l.doc,d.doc)),this.sc(r),s=s??!1;const o=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,a.length!==0||c?{snapshot:new Lt(this.query,e.Ju,i,a,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:o}:{oc:o}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new Fi,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=S(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new $o(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new Bo(r))}),t}uc(e){this.Gu=e.Qo,this.ju=S();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return Lt.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const js="SyncEngine";class Zd{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ef{constructor(e){this.key=e,this.lc=!1}}class tf{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ec={},this.hc=new pt(o=>Po(o),vr),this.Tc=new Map,this.Pc=new Set,this.Rc=new M(A.comparator),this.Ic=new Map,this.Ac=new Ns,this.Vc={},this.dc=new Map,this.fc=et.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function nf(n,e,t=!0){const r=Ko(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await jo(r,e,t,!0),s}async function rf(n,e){const t=Ko(n);await jo(t,e,!0,!1)}async function jo(n,e,t,r){const s=await bd(n.localStore,Y(e)?e:Ce(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let o;return r&&(o=await sf(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Lo(n.remoteStore,s),o}async function sf(n,e,t,r,s){n.gc=(d,f,g)=>async function(P,v,N,L){let U=v.view.Zu(N);U.Fo&&(U=await Oi(P.localStore,v.query,!1).then(({documents:Et})=>v.view.Zu(Et,U)));const q=L&&L.targetChanges.get(v.targetId),rt=L&&L.targetMismatches.get(v.targetId)!=null,Be=v.view.applyChanges(U,P.isPrimaryClient,q,rt);return $i(P,v.targetId,Be.oc),Be.snapshot}(n,d,f,g);const i=await Oi(n.localStore,e,!0),a=new Xd(e,i.Qo),o=a.Zu(i.documents),u=Rn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=a.applyChanges(o,n.isPrimaryClient,u);$i(n,t,c.oc);const l=new Zd(e,t,a);return n.hc.set(e,l),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),c.snapshot}async function af(n,e,t){const r=C(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(a=>!vr(a,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Os(r.remoteStore,s.targetId),es(r,s.targetId)}).catch(Mt)):(es(r,s.targetId),await Jr(r.localStore,s.targetId,!0))}async function of(n,e){const t=C(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Os(t.remoteStore,r.targetId))}async function uf(n,e,t){const r=_f(n);try{const s=await function(a,o){const u=C(a),c=O.now(),l=o.reduce((g,y)=>g.add(y.key),S());let d,f;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=ue(),P=S();return u.Uo.getEntries(g,l).next(v=>{y=v,y.forEach((N,L)=>{L.isValidDocument()||(P=P.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,y)).next(v=>{d=v;const N=[];for(const L of o){const U=Ku(L,d.get(L.key).overlayedDocument);U!=null&&N.push(new _t(L.key,U,Ia(U.value.mapValue),Ie.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,N,o)}).next(v=>{f=v;const N=v.applyToLocalDocumentSet(d,P);return u.documentOverlayCache.saveOverlays(g,v.batchId,N)})}).then(()=>({batchId:f.batchId,changes:$a(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,o,u){let c=a.Vc[a.currentUser.toKey()];c||(c=new M(x)),c=c.insert(o,u),a.Vc[a.currentUser.toKey()]=c}(r,s.batchId,t),await Sn(r,s.changes),await Pr(r.remoteStore)}catch(s){const i=Bs(s,"Failed to persist write");t.reject(i)}}async function zo(n,e){const t=C(n);try{const r=await Vd(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ic.get(i);a&&(I(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lc=!0:s.modifiedDocuments.size>0?I(a.lc,14607):s.removedDocuments.size>0&&(I(a.lc,42227),a.lc=!1))}),await Sn(t,r,e)}catch(r){await Mt(r)}}function Bi(n,e,t){const r=C(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,a)=>{const o=a.view.Du(e);o.snapshot&&s.push(o.snapshot)}),function(a,o){const u=C(a);u.onlineState=o;let c=!1;u.queries.forEach((l,d)=>{for(const f of d.wu)f.Du(o)&&(c=!0)}),c&&$s(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cf(n,e,t){const r=C(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let a=new M(A.comparator);a=a.insert(i,re.newNoDocument(i,b.min()));const o=S().add(i),u=new Vn(b.min(),new Map,new M(x),a,ue(),o);await zo(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),zs(r)}else await Jr(r.localStore,e,!1).then(()=>es(r,e,t)).catch(Mt)}async function lf(n,e){const t=C(n),r=e.batch.batchId;try{const s=await vd(t.localStore,e);Qo(t,r,null),Go(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Sn(t,s)}catch(s){await Mt(s)}}async function hf(n,e,t){const r=C(n);try{const s=await function(a,o){const u=C(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,o).next(d=>(I(d!==null,37113),l=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,e);Qo(r,e,t),Go(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Sn(r,s)}catch(s){await Mt(s)}}function Go(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function Qo(n,e,t){const r=C(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function es(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||Wo(n,r)})}function Wo(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Os(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),zs(n))}function $i(n,e,t){for(const r of t)r instanceof Bo?(n.Ac.addReference(r.key,e),df(n,r)):r instanceof $o?(w(js,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||Wo(n,r.key)):V(19791,{wc:r})}function df(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(w(js,"New document in limbo: "+t),n.Pc.add(r),zs(n))}function zs(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new A(k.fromString(e)),r=n.fc.next();n.Ic.set(r,new ef(t)),n.Rc=n.Rc.insert(t,r),Lo(n.remoteStore,new Ue(Ce(Ma(t.path)),r,"TargetPurposeLimboResolution",gr.yn))}}async function Sn(n,e,t){const r=C(n),s=[],i=[],a=[];r.hc.isEmpty()||(r.hc.forEach((o,u)=>{a.push(r.gc(u,e,t).then(c=>{if((c||t)&&r.isPrimaryClient){const l=c?!c.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,l?"current":"not-current")}if(c){s.push(c);const l=ks.fo(u.targetId,c);i.push(l)}}))}),await Promise.all(a),r.Ec.hn(s),await async function(u,c){const l=C(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>p.forEach(c,f=>p.forEach(f.Ao,g=>l.persistence.referenceDelegate.addReference(d,f.targetId,g)).next(()=>p.forEach(f.Vo,g=>l.persistence.referenceDelegate.removeReference(d,f.targetId,g)))))}catch(d){if(!Ft(d))throw d;w(Ls,"Failed to update sequence numbers: "+d)}for(const d of c){const f=d.targetId;if(!d.fromCache){const g=l.No.get(f),y=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(y);l.No=l.No.insert(f,P)}}}(r.localStore,i))}async function ff(n,e){const t=C(n);if(!t.currentUser.isEqual(e)){w(js,"User change. New user:",e.toKey());const r=await Do(t.localStore,e);t.currentUser=e,function(i,a){i.dc.forEach(o=>{o.forEach(u=>{u.reject(new E(_.CANCELLED,a))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sn(t,r.qo)}}function mf(n,e){const t=C(n),r=t.Ic.get(e);if(r&&r.lc)return S().add(r.key);{let s=S();const i=t.Tc.get(e);if(!i)return s;for(const a of i??[]){const o=t.hc.get(a);s=s.unionWith(o.view.Yu)}return s}}function Ko(n){const e=C(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cf.bind(null,e),e.Ec.hn=Hd.bind(null,e.eventManager),e.Ec.yc=Yd.bind(null,e.eventManager),e}function _f(n){const e=C(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hf.bind(null,e),e}class or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pr(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return Ad(this.persistence,new Ed,e.initialUser,this.serializer)}vc(e){return new No(Ds.w_,this.serializer)}Sc(e){return new zd}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}or.provider={build:()=>new or};class pf extends or{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){I(this.persistence.referenceDelegate instanceof ir,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dl(r,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?oe.withCacheSize(this.cacheSizeBytes):oe.DEFAULT;return new No(r=>ir.w_(r,t),this.serializer)}}class ts{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ff.bind(null,this.syncEngine),await $d(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qd}()}createDatastore(e){const t=pr(e.databaseInfo.databaseId),r=Zc(e.databaseInfo);return sl(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,o){return new xd(r,s,i,a,o)}(this.localStore,this.datastore,e.asyncQueue,t=>Bi(this.syncEngine,t,0),function(){return Vi.Je()?new Vi:new Hc}())}createSyncEngine(e,t){return function(s,i,a,o,u,c,l){const d=new tf(s,i,a,o,u,c);return l&&(d.mc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=C(t);w(ke,"RemoteStore shutting down."),r.ca.add(5),await Cn(r),r.Ea.shutdown(),r.ha.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ts.provider={build:()=>new ts};/**
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
 */const nt="FirestoreClient";class gf{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ne.UNAUTHENTICATED,this.clientId=is.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{w(nt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(w(nt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bs(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Or(n,e){n.asyncQueue.verifyOperationInProgress(),w(nt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Do(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ji(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yf(n);w(nt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ui(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ui(e.remoteStore,s)),n._onlineComponents=e}async function yf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){w(nt,"Using user provided OfflineComponentProvider");try{await Or(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===_.FAILED_PRECONDITION||s.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ae("Error using user provided cache. Falling back to memory cache: "+t),await Or(n,new or)}}else w(nt,"Using default OfflineComponentProvider"),await Or(n,new pf(void 0));return n._offlineComponents}async function Ho(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(w(nt,"Using user provided OnlineComponentProvider"),await ji(n,n._uninitializedComponentsProvider._online)):(w(nt,"Using default OnlineComponentProvider"),await ji(n,new ts))),n._onlineComponents}function Tf(n){return Ho(n).then(e=>e.syncEngine)}async function Ef(n){const e=await Ho(n),t=e.eventManager;return t.onListen=nf.bind(null,e.syncEngine),t.onUnlisten=af.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rf.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=of.bind(null,e.syncEngine),t}function wf(n,e,t={}){const r=new ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,o,u,c){const l=new jd({next:f=>{l.Aa(),a.enqueueAndForget(()=>Kd(i,d)),f.fromCache&&u.source==="server"?c.reject(new E(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new Jd(o instanceof tn?Yh(o):o,l,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Wd(i,d)}(await Ef(n),n.asyncQueue,e,t,r)),r.promise}function If(n,e){const t=new ze;return n.asyncQueue.enqueueAndForget(async()=>uf(await Tf(n),e,t)),t.promise}/**
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
 */let Yo=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Af(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Pn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Af=class extends Yo{data(){return super.data()}};/**
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
 */class vf{convertValue(e,t="none"){switch(H(e)){case 0:return null;case 1:return e.booleanValue;case 2:return F(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(He(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw V(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return mt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[on].arrayValue?.values?.map(r=>F(r.doubleValue));return new ce(t)}convertGeoPoint(e){return new xe(F(e.latitude),F(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=An(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(St(e));default:return null}}convertTimestamp(e){const t=Ke(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=k.fromString(e);I(Xa(r),9688,{name:e});const s=new sn(r.get(1),r.get(3)),i=new A(r.popFirst(5));return s.isEqual(t)||Fe(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Jo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */const zi="AsyncQueue";class Gi{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new ro(this,"async_queue_retry"),this.jc=()=>{const r=Lr();r&&w(zi,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Hc=e;const t=Lr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Lr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new ze;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!Ft(e))throw e;w(zi,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Wc=!0,e().catch(r=>{throw this.Qc=r,this.Wc=!1,Fe("INTERNAL UNHANDLED ERROR: ",Qi(r)),r}).then(r=>(this.Wc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=qs.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Qc&&V(47125,{el:Qi(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Qi(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class xn extends yr{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Gi,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gi(e),this._firestoreClient=void 0,await e}}}function Wm(n,e){const t=typeof n=="object"?n:ra(),r=typeof n=="string"?n:Hn,s=sa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ua("firestore");i&&_l(s,...i)}return s}function Xo(n){if(n._terminated)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vf(n),n._firestoreClient}function Vf(n){const e=n._freezeSettings(),t=al(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new gf(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Rf extends vf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Te(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}class Mn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pt extends Yo{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new E(_.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pt._jsonSchema={type:G("string",Pt._jsonSchemaVersion),bundleSource:G("string","DocumentSnapshot"),bundleName:G("string"),bundle:G("string")};class Qn extends Pt{data(e={}){return super.data(e)}}class bt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qn(this._firestore,this._userDataWriter,r.key,r,new Mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(o=>{Y(s._snapshot.query)?Yr(s._snapshot.query):hs(s.query._query);const u=new Qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const u=new Qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),l=a.indexOf(o.doc.key)),{type:Pf(o.type),doc:u,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new E(_.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=is.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Pf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V(61501,{type:n})}}/**
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
 */bt._jsonSchemaVersion="firestore/querySnapshot/1.0",bt._jsonSchema={type:G("string",bt._jsonSchemaVersion),bundleSource:G("string","QuerySnapshot"),bundleName:G("string"),bundle:G("string")};/**
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
 */function bf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gs{}class Zo extends Gs{}function Km(n,e,...t){let r=[];e instanceof Gs&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Ws).length,o=i.filter(u=>u instanceof Qs).length;if(a>1||a>0&&o>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Qs extends Zo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qs(e,t,r)}_apply(e){const t=this._parse(e);return eu(e._query,t),new gt(e.firestore,e.converter,jr(e._query,t))}_parse(e){const t=ys(e.firestore);return function(i,a,o,u,c,l,d){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ki(d,l);const y=[];for(const P of d)y.push(Wi(u,i,P));f={arrayValue:{values:y}}}else f=Wi(u,i,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ki(d,l),f=El(o,a,d,l==="in"||l==="not-in");return z.create(c,l,f)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ws extends Gs{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ws(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const o=i.getFlattenedFilters();for(const u of o)eu(a,u),a=jr(a,u)}(e._query,t),new gt(e.firestore,e.converter,jr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ks extends Zo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ks(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fn(i,a)}(e._query,this._field,this._direction);return new gt(e.firestore,e.converter,dc(e._query,t))}}function Hm(n,e="asc"){const t=e,r=Pn("orderBy",n);return Ks._create(r,t)}function Wi(n,e,t){if(typeof(t=Ne(t))=="string"){if(t==="")throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fa(e)&&t.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(k.fromString(t));if(!A.isDocumentKey(r))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ci(n,new A(r))}if(t instanceof Q)return ci(n,t._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cr(t)}.`)}function Ki(n,e){if(!Array.isArray(n)||n.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eu(n,e){const t=function(s,i){for(const a of s)for(const o of a.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ym(n){n=ht(n,gt);const e=ht(n.firestore,xn),t=Xo(e),r=new Rf(e);return bf(n._query),wf(t,n._query).then(s=>new bt(e,r,n,s))}function Jm(n,e,t){n=ht(n,Q);const r=ht(n.firestore,xn),s=Jo(n.converter,e,t),i=ys(r);return Hs(r,[uo(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ie.none())])}function Xm(n){return Hs(ht(n.firestore,xn),[new ls(n._key,Ie.none())])}function Zm(n,e){const t=ht(n.firestore,xn),r=pl(n),s=Jo(n.converter,e),i=ys(n.firestore);return Hs(t,[uo(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ie.exists(!1))]).then(()=>r)}function Hs(n,e){const t=Xo(n);return If(t,e)}const Hi="@firebase/firestore",Yi="4.17.1";(function(e,t=!0){bu(aa),ia(new ha("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),o=new xn(new Gc(r.getProvider("auth-internal")),new Kc(a,r.getProvider("app-check-internal")),Uu(a,s),a);return i={useFetchStreams:t,...i},o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wn(Hi,Yi,e),Wn(Hi,Yi,"esm2020")})();/**
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
 */const tu="firebasestorage.googleapis.com",nu="storageBucket",Cf=2*60*1e3,Sf=10*60*1e3;/**
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
 */class $ extends oa{constructor(e,t,r=0){super(Ur(e),`Firebase Storage: ${t} (${Ur(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ur(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function Ur(n){return"storage/"+n}function Ys(){const n="An unknown error occurred, please check the error payload for server response.";return new $(B.UNKNOWN,n)}function xf(n){return new $(B.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Nf(n){return new $(B.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Df(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $(B.UNAUTHENTICATED,n)}function kf(){return new $(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Lf(n){return new $(B.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Of(){return new $(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Uf(){return new $(B.CANCELED,"User canceled the upload/download.")}function Mf(n){return new $(B.INVALID_URL,"Invalid URL '"+n+"'.")}function Ff(n){return new $(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qf(){return new $(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nu+"' property when initializing the app?")}function Bf(){return new $(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $f(){return new $(B.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jf(n){return new $(B.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ns(n){return new $(B.INVALID_ARGUMENT,n)}function ru(){return new $(B.APP_DELETED,"The Firebase app was deleted.")}function zf(n){return new $(B.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function rn(n,e){return new $(B.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Wt(n){throw new $(B.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class pe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=pe.makeFromUrl(e,t)}catch{return new pe(e,"")}if(r.path==="")return r;throw Ff(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function c(q){q.path_=decodeURIComponent(q.path)}const l="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${l}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},P=t===tu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",N=new RegExp(`^https?://${P}/${s}/${v}`,"i"),U=[{regex:o,indices:u,postModify:i},{regex:g,indices:y,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let q=0;q<U.length;q++){const rt=U[q],Be=rt.regex.exec(e);if(Be){const Et=Be[rt.indices.bucket];let br=Be[rt.indices.path];br||(br=""),r=new pe(Et,br),rt.postModify(r);break}}if(r==null)throw Mf(e);return r}}class Gf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Qf(n,e,t){let r=1,s=null,i=null,a=!1,o=0;function u(){return o===2}let c=!1;function l(...v){c||(c=!0,e.apply(null,v))}function d(v){s=setTimeout(()=>{s=null,n(g,u())},v)}function f(){i&&clearTimeout(i)}function g(v,...N){if(c){f();return}if(v){f(),l.call(null,v,...N);return}if(u()||a){f(),l.call(null,v,...N);return}r<64&&(r*=2);let U;o===1?(o=2,U=0):U=(r+Math.random())*1e3,d(U)}let y=!1;function P(v){y||(y=!0,f(),!c&&(s!==null?(v||(o=2),clearTimeout(s),d(0)):v||(o=1)))}return d(0),i=setTimeout(()=>{a=!0,P(!0)},t),P}function Wf(n){n(!1)}/**
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
 */function Kf(n){return n!==void 0}function Hf(n){return typeof n=="object"&&!Array.isArray(n)}function Js(n){return typeof n=="string"||n instanceof String}function Ji(n){return Xs()&&n instanceof Blob}function Xs(){return typeof Blob<"u"}function Xi(n,e,t,r){if(r<e)throw ns(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ns(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Zs(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function su(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var ct;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ct||(ct={}));/**
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
 */function Yf(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class Jf{constructor(e,t,r,s,i,a,o,u,c,l,d,f=!0,g=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=d,this.retry=f,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,P)=>{this.resolve_=y,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Fn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=o=>{const u=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const o=i.getErrorCode()===ct.NO_ERROR,u=i.getStatus();if(!o||Yf(u,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ct.ABORT;r(!1,new Fn(!1,null,l));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Fn(c,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,o=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(o,o.getResponse());Kf(u)?i(u):i()}catch(u){a(u)}else if(o!==null){const u=Ys();u.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,u)):a(u)}else if(s.canceled){const u=this.appDelete_?ru():Uf();a(u)}else{const u=Of();a(u)}};this.canceled_?t(!1,new Fn(!1,null,!0)):this.backoffId_=Qf(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Wf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fn{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Xf(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Zf(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function em(n,e){e&&(n["X-Firebase-GMPID"]=e)}function tm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function nm(n,e,t,r,s,i,a=!0,o=!1){const u=su(n.urlParams),c=n.url+u,l=Object.assign({},n.headers);return em(l,e),Xf(l,t),Zf(l,i),tm(l,r),new Jf(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,o)}/**
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
 */function rm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sm(...n){const e=rm();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Xs())return new Blob(n);throw new $(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function im(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function am(n){if(typeof atob>"u")throw jf("base-64");return atob(n)}/**
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
 */const be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mr{constructor(e,t){this.data=e,this.contentType=t||null}}function om(n,e){switch(n){case be.RAW:return new Mr(iu(e));case be.BASE64:case be.BASE64URL:return new Mr(au(n,e));case be.DATA_URL:return new Mr(cm(e),lm(e))}throw Ys()}function iu(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function um(n){let e;try{e=decodeURIComponent(n)}catch{throw rn(be.DATA_URL,"Malformed data URL.")}return iu(e)}function au(n,e){switch(n){case be.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw rn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case be.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw rn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=am(e)}catch(s){throw s.message.includes("polyfill")?s:rn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class ou{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw rn(be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=hm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cm(n){const e=new ou(n);return e.base64?au(be.BASE64,e.rest):um(e.rest)}function lm(n){return new ou(n).contentType}function hm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class je{constructor(e,t){let r=0,s="";Ji(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ji(this.data_)){const r=this.data_,s=im(r,e,t);return s===null?null:new je(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new je(r,!0)}}static getBlob(...e){if(Xs()){const t=e.map(r=>r instanceof je?r.data_:r);return new je(sm.apply(null,t))}else{const t=e.map(a=>Js(a)?om(be.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let o=0;o<a.length;o++)s[i++]=a[o]}),new je(s,!0)}}uploadData(){return this.data_}}/**
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
 */function uu(n){let e;try{e=JSON.parse(n)}catch{return null}return Hf(e)?e:null}/**
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
 */function dm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function fm(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function cu(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function mm(n,e){return e}class ie{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||mm}}let qn=null;function _m(n){return!Js(n)||n.length<2?n:cu(n)}function lu(){if(qn)return qn;const n=[];n.push(new ie("bucket")),n.push(new ie("generation")),n.push(new ie("metageneration")),n.push(new ie("name","fullPath",!0));function e(i,a){return _m(a)}const t=new ie("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new ie("size");return s.xform=r,n.push(s),n.push(new ie("timeCreated")),n.push(new ie("updated")),n.push(new ie("md5Hash",null,!0)),n.push(new ie("cacheControl",null,!0)),n.push(new ie("contentDisposition",null,!0)),n.push(new ie("contentEncoding",null,!0)),n.push(new ie("contentLanguage",null,!0)),n.push(new ie("contentType",null,!0)),n.push(new ie("metadata","customMetadata",!0)),qn=n,qn}function pm(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new pe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function gm(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return pm(r,n),r}function hu(n,e,t){const r=uu(e);return r===null?null:gm(n,r,t)}function ym(n,e,t,r){const s=uu(e);if(s===null||!Js(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(c=>{const l=n.bucket,d=n.fullPath,f="/b/"+a(l)+"/o/"+a(d),g=Zs(f,t,r),y=su({alt:"media",token:c});return g+y})[0]}function Tm(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class du{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function fu(n){if(!n)throw Ys()}function Em(n,e){function t(r,s){const i=hu(n,s,e);return fu(i!==null),i}return t}function wm(n,e){function t(r,s){const i=hu(n,s,e);return fu(i!==null),ym(i,s,n.host,n._protocol)}return t}function mu(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=kf():s=Df():t.getStatus()===402?s=Nf(n.bucket):t.getStatus()===403?s=Lf(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Im(n){const e=mu(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=xf(n.path)),i.serverResponse=s.serverResponse,i}return t}function Am(n,e,t){const r=e.fullServerUrl(),s=Zs(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new du(s,i,wm(n,t),a);return o.errorHandler=Im(e),o}function vm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Vm(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=vm(null,e)),r}function Rm(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let U="";for(let q=0;q<2;q++)U=U+Math.random().toString().slice(2);return U}const u=o();a["Content-Type"]="multipart/related; boundary="+u;const c=Vm(e,r,s),l=Tm(c,t),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+u+"--",g=je.getBlob(d,r,f);if(g===null)throw Bf();const y={name:c.fullPath},P=Zs(i,n.host,n._protocol),v="POST",N=n.maxUploadRetryTime,L=new du(P,v,Em(n,t),N);return L.urlParams=y,L.headers=a,L.body=g.uploadData(),L.errorHandler=mu(e),L}/**
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
 */class Pm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ct.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ct.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ct.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Wt("cannot .send() more than once");if(ur(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bm extends Pm{initXhr(){this.xhr_.responseType="text"}}function _u(){return new bm}/**
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
 */class ft{constructor(e,t){this._service=e,t instanceof pe?this._location=t:this._location=pe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ft(e,t)}get root(){const e=new pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cu(this._location.path)}get storage(){return this._service}get parent(){const e=dm(this._location.path);if(e===null)return null;const t=new pe(this._location.bucket,e);return new ft(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zf(e)}}function Cm(n,e,t){n._throwIfRoot("uploadBytes");const r=Rm(n.storage,n._location,lu(),new je(e,!0),t);return n.storage.makeRequestWithTokens(r,_u).then(s=>({metadata:s,ref:n}))}function Sm(n){n._throwIfRoot("getDownloadURL");const e=Am(n.storage,n._location,lu());return n.storage.makeRequestWithTokens(e,_u).then(t=>{if(t===null)throw $f();return t})}function xm(n,e){const t=fm(n._location.path,e),r=new pe(n._location.bucket,t);return new ft(n.storage,r)}/**
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
 */function Nm(n){return/^[A-Za-z]+:\/\//.test(n)}function Dm(n,e){return new ft(n,e)}function pu(n,e){if(n instanceof ei){const t=n;if(t._bucket==null)throw qf();const r=new ft(t,t._bucket);return e!=null?pu(r,e):r}else return e!==void 0?xm(n,e):n}function km(n,e){if(e&&Nm(e)){if(n instanceof ei)return Dm(n,e);throw ns("To use ref(service, url), the first argument must be a Storage instance.")}else return pu(n,e)}function Zi(n,e){const t=e?.[nu];return t==null?null:pe.makeFromBucketSpec(t,n)}function Lm(n,e,t,r={}){n.host=`${e}:${t}`;const s=ur(e);s&&ca(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:la(i,n.app.options.projectId))}class ei{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=tu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cf,this._maxUploadRetryTime=Sf,this._requests=new Set,s!=null?this._bucket=pe.makeFromBucketSpec(s,this._host):this._bucket=Zi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pe.makeFromBucketSpec(this._url,e):this._bucket=Zi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xi("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xi("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(na(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ft(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Gf(ru());{const a=nm(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const ea="@firebase/storage",ta="0.14.5";/**
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
 */const gu="storage";function e_(n,e,t){return n=Ne(n),Cm(n,e,t)}function t_(n){return n=Ne(n),Sm(n)}function n_(n,e){return n=Ne(n),km(n,e)}function r_(n=ra(),e){n=Ne(n);const r=sa(n,gu).getImmediate({identifier:e}),s=ua("storage");return s&&Om(r,...s),r}function Om(n,e,t,r={}){Lm(n,e,t,r)}/**
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
 */function Um(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ei(t,r,s,e,aa)}function Mm(){ia(new ha(gu,Um,"PUBLIC").setMultipleInstances(!0)),Wn(ea,ta,""),Wn(ea,ta,"esm2020")}Mm();export{r_ as a,t_ as b,Zm as c,jm as d,Ym as e,Jm as f,Wm as g,pl as h,Xm as i,Hm as o,Km as q,n_ as r,zm as s,e_ as u};

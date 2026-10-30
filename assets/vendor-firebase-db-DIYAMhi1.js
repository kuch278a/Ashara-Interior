import{_ as ua,g as ca,a as la,b as ha,r as Jn,S as da}from"./vendor-firebase-core-BqBKDcLy.js";import{L as Cu,I as lt,l as Fe,F as fa,A as ma,p as _r,t as _a,d as xu,B as pa,j as De,R as fs,G as Nu,m as ku,M as Du,H as Lu,J as Ou,X as Uu,K as Mu,N as Mr,W as Mn,O as Fu,S as ui,C as ga}from"./vendor-misc-CUDEQPu_.js";/**
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
 */let Ft="12.19.0";function Bu(n){Ft=n}/**
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
 */const pt=new Cu("@firebase/firestore");function Vt(){return pt.logLevel}function E(n,...e){if(pt.logLevel<=Fe.DEBUG){const t=e.map(ms);pt.debug(`Firestore (${Ft}): ${n}`,...t)}}function Ge(n,...e){if(pt.logLevel<=Fe.ERROR){const t=e.map(ms);pt.error(`Firestore (${Ft}): ${n}`,...t)}}function Re(n,...e){if(pt.logLevel<=Fe.WARN){const t=e.map(ms);pt.warn(`Firestore (${Ft}): ${n}`,...t)}}function ms(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function R(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ya(n,r,t)}function ya(n,e,t){let r=`FIRESTORE (${Ft}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ge(r),new Error(r)}function A(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ya(e,s,r)}function S(n,e){return n}/**
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
 */function qu(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class _s{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qu(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function Hr(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Fr(s)===Fr(i)?N(s,i):Fr(s)?1:-1}return N(n.length,e.length)}const $u=55296,zu=57343;function Fr(n){const e=n.charCodeAt(0);return e>=$u&&e<=zu}function kt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class B{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new B(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new B(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fn(this.root,e,this.comparator,!0)}}class Fn{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Z.RED,this.left=s??Z.EMPTY,this.right=i??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Z(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Z.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R(43730,{key:this.key,value:this.value});if(this.right.isRed())throw R(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw R(27949);return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw R(57766)}get value(){throw R(16141)}get color(){throw R(16727)}get left(){throw R(29726)}get right(){throw R(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Q{constructor(e){this.comparator=e,this.data=new B(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ci(this.data.getIterator())}getIteratorFrom(e){return new ci(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Q(this.comparator);return t.data=e,t}}class ci{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends fa{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const Pe="__name__";class Ve{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&R(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ve.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ve?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ve.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return N(e.length,t.length)}static compareSegments(e,t){const r=Ve.isNumericId(e),s=Ve.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ve.extractNumericId(e).compare(Ve.extractNumericId(t)):Hr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lt.fromString(e.substring(4,e.length-2))}}class O extends Ve{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new O(t)}static emptyPath(){return new O([])}}const Gu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let ye=class Pt extends Ve{construct(e,t,r){return new Pt(e,t,r)}static isValidIdentifier(e){return Gu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pe}static keyField(){return new Pt([Pe])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}};/**
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
 */class Ae{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new Ae([])}unionWith(e){let t=new Q(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ae(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function Zn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Et(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ju(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Ta(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(O.fromString(e))}static fromName(e){return new v(O.fromString(e).popFirst(5))}static empty(){return new v(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new O(e.slice()))}}/**
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
 */function Ea(n,e,t){if(!t)throw new w(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qu(n,e,t,r){if(e===!0&&r===!0)throw new w(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function li(n){if(!v.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hi(n){if(v.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vn(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R(12329,{type:typeof n})}function Ce(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ps(n);throw new w(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function G(n,e){const t={typeString:n};return e&&(t.value=e),t}function Pn(n,e){if(!Vn(n))throw new w(p.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new w(p.INVALID_ARGUMENT,t);return!0}/**
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
 */const di=-62135596800,fi=1e6;class U{static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*fi);return new U(t,r)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new w(p.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return U._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,r;if(e>=0n)t=Number(e/1000000000n),r=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),r=0):(t=Number(e/1000000000n-1n),r=Number(s+1000000000n))}return new U(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<di)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fi}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new w(p.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:U._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pn(e,U._jsonSchema))return new U(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-di;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}U._jsonSchemaVersion="firestore/timestamp/1.0",U._jsonSchema={type:G("string",U._jsonSchemaVersion),seconds:G("number"),nanoseconds:G("number")};/**
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
 */class wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class W{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wa("Invalid base64 string: "+i):i}}(e);return new W(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new W(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}W.EMPTY_BYTE_STRING=new W("");const Wu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(n){if(A(!!n,39018),typeof n=="string"){let e=0;const t=Wu.exec(n);if(A(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:q(n.seconds),nanos:q(n.nanos)}}function q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function et(n){return typeof n=="string"?W.fromBase64String(n):W.fromUint8Array(n)}/**
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
 */const Ia="server_timestamp",Aa="__type__",va="__previous_value__",Ra="__local_write_time__";function pr(n){return(n?.mapValue?.fields||{})[Aa]?.stringValue===Ia}function bn(n){const e=n.mapValue.fields[va];return pr(e)?bn(e):e}function Dt(n){const e=Ze(n.mapValue.fields[Ra].timestampValue);return new U(e.seconds,e.nanos)}/**
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
 */class Ku{constructor(e,t,r,s,i,a,o,u,c,l,h,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=h,this._customHeaders=f,this.grpcFlowControlWindow=g}}const er="(default)";class hn{constructor(e,t){this.projectId=e,this.database=t||er}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database===er}isEqual(e){return e instanceof hn&&e.projectId===this.projectId&&e.database===this.database}}function Hu(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(n.options.projectId,e)}/**
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
 */const gs=-1;function gr(n){return n==null}function dn(n){return n===0&&1/n==-1/0}function Yu(n){return typeof n=="number"&&Number.isInteger(n)&&!dn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Xu(n){return typeof n=="string"}/**
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
 */const Va="__type__",Ju="__max__",Bn={mapValue:{}},Pa="__vector__",fn="value",Lt={nullValue:"NULL_VALUE"},he={booleanValue:!0},J={booleanValue:!1};function K(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pr(n)?4:Zu(n)?9007199254740991:tr(n)?10:11:R(28295,{value:n})}function we(n,e,t){if(n===e)return!0;const r=K(n);if(r!==K(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Dt(n).isEqual(Dt(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=Ze(i.timestampValue),u=Ze(a.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return et(i.bytesValue).isEqual(et(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return q(i.geoPointValue.latitude)===q(a.geoPointValue.latitude)&&q(i.geoPointValue.longitude)===q(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,o){if("integerValue"in i&&"integerValue"in a)return q(i.integerValue)===q(a.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in a)u=q(i.doubleValue),c=q(a.doubleValue);else{if(!o?.i)return!1;u=q(i.integerValue??i.doubleValue),c=q(a.integerValue??a.doubleValue)}return u===c?!!o?.o||dn(u)===dn(c):!!(o===void 0||o.u)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return kt(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>we(s,i,t));case 10:case 11:return function(i,a,o){const u=i.mapValue.fields||{},c=a.mapValue.fields||{};if(Zn(u)!==Zn(c))return!1;for(const l in u)if(u.hasOwnProperty(l)&&(c[l]===void 0||!we(u[l],c[l],o)))return!1;return!0}(n,e,t);default:return R(52216,{left:n})}}function mn(n,e){return(n.values||[]).find(t=>we(t,e))!==void 0}function de(n,e){if(n===e)return 0;const t=K(n),r=K(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(i,a){const o=q(i.integerValue||i.doubleValue),u=q(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(n,e);case 3:return mi(n.timestampValue,e.timestampValue);case 4:return mi(Dt(n),Dt(e));case 5:return Hr(n.stringValue,e.stringValue);case 6:return function(i,a){const o=et(i),u=et(a);return o.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const o=i.split("/"),u=a.split("/");for(let c=0;c<o.length&&c<u.length;c++){const l=N(o[c],u[c]);if(l!==0)return l}return N(o.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const o=N(q(i.latitude),q(a.latitude));return o!==0?o:N(q(i.longitude),q(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _i(n.arrayValue,e.arrayValue);case 10:return function(i,a){const o=i.fields||{},u=a.fields||{},c=o[fn]?.arrayValue,l=u[fn]?.arrayValue,h=N(c?.values?.length||0,l?.values?.length||0);return h!==0?h:_i(c,l)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Bn.mapValue&&a===Bn.mapValue)return 0;if(i===Bn.mapValue)return 1;if(a===Bn.mapValue)return-1;const o=i.fields||{},u=Object.keys(o),c=a.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=Hr(u[h],l[h]);if(f!==0)return f;const g=de(o[u[h]],c[l[h]]);if(g!==0)return g}return N(u.length,l.length)}(n.mapValue,e.mapValue);default:throw R(23264,{l:t})}}function mi(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Ze(n),r=Ze(e),s=N(t.seconds,r.seconds);return s!==0?s:N(t.nanos,r.nanos)}function _i(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=de(t[s],r[s]);if(i!==void 0&&i!==0)return i}return N(t.length,r.length)}function Ot(n){return Yr(n)}function Yr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ze(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return et(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return v.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Yr(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Yr(t.fields[a])}`;return s+"}"}(n.mapValue):R(61005,{value:n})}function Qn(n){switch(K(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bn(n);return e?16+Qn(e):16;case 5:return 2*n.stringValue.length;case 6:return et(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qn(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Et(r.fields,(i,a)=>{s+=i.length+Qn(a)}),s}(n.mapValue);default:throw R(13486,{value:n})}}function be(n){return!!n&&"integerValue"in n}function ct(n){return!!n&&"doubleValue"in n}function tt(n){return be(n)||ct(n)}function Ut(n){return!!n&&"arrayValue"in n}function pe(n){return!!n&&"nullValue"in n}function fe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ht(n){return!!n&&"mapValue"in n}function tr(n){return(n?.mapValue?.fields||{})[Va]?.stringValue===Pa}function Xr(n){return(n?.mapValue?.fields||{})[fn]?.arrayValue}function tn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Et(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=tn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tn(n.arrayValue.values[t]);return e}return{...n}}function Zu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ju}/**
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
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ht(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tn(t)}setAll(e){let t=ye.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=tn(a):s.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ht(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ht(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Et(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _e(tn(this.value))}}function ba(n){const e=[];return Et(n.fields,(t,r)=>{const s=new ye([t]);if(ht(r)){const i=ba(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ae(e)}/**
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
 */function yr(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dn(e)?"-0":e}}function ys(n){return{integerValue:""+n}}function Ts(n,e,t){return Yu(e)?ys(e):yr(n,e)}/**
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
 */class Tr{constructor(){this._=void 0}}function ec(n,e,t){return n instanceof nr?function(s,i){const a={fields:{[Aa]:{stringValue:Ia},[Ra]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pr(i)&&(i=bn(i)),i&&(a.fields[va]=i),{mapValue:a}}(t,e):n instanceof _n?Ca(n,e):n instanceof pn?xa(n,e):n instanceof gn?function(s,i){const a=Sa(s,i),o=ir(a)+ir(s.h);return be(a)&&be(s.h)?ys(o):yr(s.serializer,o)}(n,e):n instanceof rr?function(s,i){return pi(s,i,Math.min)}(n,e):n instanceof sr?function(s,i){return pi(s,i,Math.max)}(n,e):void 0}function tc(n,e,t){return n instanceof _n?Ca(n,e):n instanceof pn?xa(n,e):t}function Sa(n,e){return n instanceof gn?tt(e)?e:{integerValue:0}:null}class nr extends Tr{}class _n extends Tr{constructor(e){super(),this.elements=e}}function Ca(n,e){const t=Na(e);for(const r of n.elements)t.some(s=>we(s,r))||t.push(r);return{arrayValue:{values:t}}}class pn extends Tr{constructor(e){super(),this.elements=e}}function xa(n,e){let t=Na(e);for(const r of n.elements)t=t.filter(s=>!we(s,r));return{arrayValue:{values:t}}}class Es extends Tr{constructor(e,t){super(),this.serializer=e,this.h=t}}class gn extends Es{}class rr extends Es{}class sr extends Es{}function pi(n,e,t){if(!tt(e))return n.h;const r=t(ir(e),ir(n.h));return be(e)&&be(n.h)?ys(r):yr(n.serializer,r)}function ir(n){return q(n.integerValue||n.doubleValue)}function Na(n){return Ut(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function nc(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _n&&s instanceof _n||r instanceof pn&&s instanceof pn?kt(r.elements,s.elements,we):r instanceof gn&&s instanceof gn||r instanceof rr&&s instanceof rr||r instanceof sr&&s instanceof sr?we(r.h,s.h):r instanceof nr&&s instanceof nr}(n.transform,e.transform)}class rc{constructor(e,t){this.version=e,this.transformResults=t}}class ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Er{}function ka(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ws(n.key,ve.none()):new Sn(n.key,n.data,ve.none());{const t=n.data,r=_e.empty();let s=new Q(ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new wt(n.key,r,new Ae(s.toArray()),ve.none())}}function sc(n,e,t){n instanceof Sn?function(s,i,a){const o=s.value.clone(),u=yi(s.fieldTransforms,i,a.transformResults);o.setAll(u),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(n,e,t):n instanceof wt?function(s,i,a){if(!Wn(s.precondition,i))return void i.convertToUnknownDocument(a.version);const o=yi(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Da(s)),u.setAll(o),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function nn(n,e,t,r){return n instanceof Sn?function(i,a,o,u){if(!Wn(i.precondition,a))return o;const c=i.value.clone(),l=Ti(i.fieldTransforms,u,a);return c.setAll(l),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof wt?function(i,a,o,u){if(!Wn(i.precondition,a))return o;const c=Ti(i.fieldTransforms,u,a),l=a.data;return l.setAll(Da(i)),l.setAll(c),a.convertToFoundDocument(a.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,a,o){return Wn(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(n,e,t)}function ic(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Sa(r.transform,s||null);i!=null&&(t===null&&(t=_e.empty()),t.set(r.field,i))}return t||null}function gi(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kt(r,s,(i,a)=>nc(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Sn extends Er{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wt extends Er{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Da(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function yi(n,e,t){const r=new Map;A(n.length===t.length,32656,{T:t.length,P:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,o=e.data.field(i.field);r.set(i.field,tc(a,o,t[s]))}return r}function Ti(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ec(i,a,e))}return r}class ws extends Er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ac extends Er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ar{constructor(e,t){this.position=e,this.inclusive=t}}function Ei(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=v.comparator(v.fromName(a.referenceValue),t.key):r=de(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wi(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!we(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class La{}class H extends La{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new uc(e,t,r):t==="array-contains"?new hc(e,r):t==="in"?new dc(e,r):t==="not-in"?new fc(e,r):t==="array-contains-any"?new mc(e,r):new H(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cc(e,r):new lc(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(de(t,this.value)):t!==null&&K(this.value)===K(t)&&this.matchesComparison(de(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Le extends La{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Le(e,t)}matches(e){return Oa(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Oa(n){return n.op==="and"}function Ua(n){return oc(n)&&Oa(n)}function oc(n){for(const e of n.filters)if(e instanceof Le)return!1;return!0}function Jr(n){if(n instanceof H)return n.field.canonicalString()+n.op.toString()+Ot(n.value);if(Ua(n))return n.filters.map(e=>Jr(e)).join(",");{const e=n.filters.map(t=>Jr(t)).join(",");return`${n.op}(${e})`}}function Ma(n,e){return n instanceof H?function(r,s){return s instanceof H&&r.op===s.op&&r.field.isEqual(s.field)&&we(r.value,s.value)}(n,e):n instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,o)=>i&&Ma(a,s.filters[o]),!0):!1}(n,e):void R(19439)}function Fa(n){return n instanceof H?function(t){return`${t.field.canonicalString()} ${t.op} ${Ot(t.value)}`}(n):n instanceof Le?function(t){return t.op.toString()+" {"+t.getFilters().map(Fa).join(" ,")+"}"}(n):"Filter"}class uc extends H{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class cc extends H{constructor(e,t){super(e,"in",t),this.keys=Ba("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lc extends H{constructor(e,t){super(e,"not-in",t),this.keys=Ba("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ba(n,e){return(e.arrayValue?.values||[]).map(t=>v.fromName(t.referenceValue))}class hc extends H{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ut(t)&&mn(t.arrayValue,this.value)}}class dc extends H{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mn(this.value.arrayValue,t)}}class fc extends H{constructor(e,t){super(e,"not-in",t)}matches(e){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mn(this.value.arrayValue,t)}}class mc extends H{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ut(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mn(this.value.arrayValue,r))}}/**
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
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function _c(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class b{static fromTimestamp(e){return new b(e)}static min(){return new b(new U(0,0))}static max(){return new b(new U(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yn=-1;function pc(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=b.fromTimestamp(r===1e9?new U(t+1,0):new U(t,r));return new nt(s,v.empty(),e)}function gc(n){return new nt(n.readTime,n.key,yn)}class nt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nt(b.min(),v.empty(),yn)}static max(){return new nt(b.max(),v.empty(),yn)}}function yc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
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
 */class Tc{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.R=null}}function Ii(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Tc(n,e,t,r,s,i,a)}function qa(n){const e=S(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Jr(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ot(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ot(r)).join(",")),e.R=t}return e.R}function $a(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_c(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ma(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wi(n.startAt,e.startAt)&&wi(n.endAt,e.endAt)}function ut(n){return!!n.isCorePipeline}function za(n){return!!n.path&&v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class wr{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=u,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function Ec(n,e,t,r,s,i,a,o){return new wr(n,e,t,r,s,i,a,o)}function Is(n){return new wr(n)}function Ai(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wc(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ic(n){return n.collectionGroup!==null}function rn(n){const e=S(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Q(ye.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new or(i,r))}),t.has(ye.keyField().canonicalString())||e.A.push(new or(ye.keyField(),r))}return e.A}function xe(n){const e=S(n);return e.V||(e.V=Ac(e,rn(n))),e.V}function Ac(n,e){if(n.limitType==="F")return Ii(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new or(s.field,i)});const t=n.endAt?new ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ar(n.startAt.position,n.startAt.inclusive):null;return Ii(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Zr(n,e,t){return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vc(n,e){return $a(xe(n),xe(e))&&n.limitType===e.limitType}function sn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Fa(s)).join(", ")}]`),gr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ot(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ot(s)).join(",")),`Target(${r})`}(xe(n))}; limitType=${n.limitType})`}function Ir(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):v.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of rn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,o,u){const c=Ei(a,o,u);return a.inclusive?c<=0:c<0}(r.startAt,rn(r),s)||r.endAt&&!function(a,o,u){const c=Ei(a,o,u);return a.inclusive?c>=0:c>0}(r.endAt,rn(r),s))}(n,e)}function As(n){return(e,t)=>{let r=!1;for(const s of rn(n)){const i=Rc(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Rc(n,e,t){const r=n.field.isKeyField()?v.comparator(e.key,t.key):function(i,a,o){const u=a.data.field(i),c=o.data.field(i);return u!==null&&c!==null?de(u,c):R(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R(19790,{direction:n.dir})}}/**
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
 */class Vc{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var z,k;function Pc(n){switch(n){case p.OK:return R(64938);case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0;default:return R(15467,{code:n})}}function Ga(n){if(n===void 0)return Ge("GRPC error has no .code"),p.UNKNOWN;switch(n){case z.OK:return p.OK;case z.CANCELLED:return p.CANCELLED;case z.UNKNOWN:return p.UNKNOWN;case z.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case z.INTERNAL:return p.INTERNAL;case z.UNAVAILABLE:return p.UNAVAILABLE;case z.UNAUTHENTICATED:return p.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case z.NOT_FOUND:return p.NOT_FOUND;case z.ALREADY_EXISTS:return p.ALREADY_EXISTS;case z.PERMISSION_DENIED:return p.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case z.ABORTED:return p.ABORTED;case z.OUT_OF_RANGE:return p.OUT_OF_RANGE;case z.UNIMPLEMENTED:return p.UNIMPLEMENTED;case z.DATA_LOSS:return p.DATA_LOSS;default:return R(39323,{code:n})}}(k=z||(z={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class It{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Et(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ta(this.inner)}size(){return this.innerSize}}/**
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
 */const bc=new B(v.comparator);function ce(){return bc}const ja=new B(v.comparator);function bt(...n){let e=ja;for(const t of n)e=e.insert(t.key,t);return e}function Qa(n){let e=ja;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function We(){return an()}function Wa(){return an()}function an(){return new It(n=>n.toString(),(n,e)=>n.isEqual(e))}const Sc=new B(v.comparator),Cc=new Q(v.comparator);function x(...n){let e=Cc;for(const t of n)e=e.add(t);return e}const xc=new Q(N);function Nc(){return xc}/**
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
 */function kc(){return new TextEncoder}/**
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
 */const Dc=new lt([4294967295,4294967295],0);function vi(n){const e=kc().encode(n),t=new Du;return t.update(e),new Uint8Array(t.digest())}function Ri(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lt([t,r],0),new lt([s,i],0)]}class vs{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Jt(`Invalid padding: ${t}`);if(r<0)throw new Jt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Jt(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=lt.fromNumber(this.p)}v(e,t,r){let s=e.add(t.multiply(lt.fromNumber(r)));return s.compare(Dc)===1&&(s=new lt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=vi(e),[r,s]=Ri(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);if(!this.D(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new vs(i,s,t);return r.forEach(o=>a.insert(o)),a}insert(e){if(this.p===0)return;const t=vi(e),[r,s]=Ri(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);this.C(a)}}C(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Jt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cn{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,xn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Cn(b.min(),s,new B(N),ce(),ce(),x())}}class xn{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xn(r,t,x(),x(),x())}}/**
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
 */class Kn{constructor(e,t,r,s){this.F=e,this.removedTargetIds=t,this.key=r,this.O=s}}class Ka{constructor(e,t){this.targetId=e,this.M=t}}class Ha{constructor(e,t,r=W.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Vi{constructor(e){this.targetId=e,this.N=0,this.L=Pi(),this.B=W.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=x(),t=x(),r=x();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:R(38017,{changeType:i})}}),new xn(this.B,this.U,e,t,r)}G(){this.k=!1,this.L=Pi()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,A(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const Ht="WatchChangeAggregator";class Lc{constructor(e){this.X=e,this.ee=new Map,this.te=ce(),this.ne=qn(),this.re=ce(),this.ie=qn(),this.se=new B(N)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const r=this.ee.get(t);if(r)switch(e.state){case 0:this.ce(t)&&r.K(e.resumeToken);break;case 1:r.Y(),r.q||r.G(),r.K(e.resumeToken);break;case 2:r.Y(),r.q||this.removeTarget(t);break;case 3:this.ce(t)&&(r.Z(),r.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),r.K(e.resumeToken));break;default:R(56790,{state:e.state})}else E(Ht,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((r,s)=>{this.ce(s)&&t(s)})}Ee(e){return ut(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:za(e)}he(e){const t=e.targetId,r=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(r===0){const a=new v(ut(i)?O.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,a,re.newNoDocument(a,b.min()))}else A(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Pe(t);if(a!==r){const o=this.Ie(e),u=o?this.Re(o,e,a):1;if(u!==0){this.le(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,c)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,o;try{a=et(r).toUint8Array()}catch(u){if(u instanceof wa)return Re("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{o=new vs(a,s,i)}catch(u){return Re(u instanceof Jt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return o.p===0?null:o}Re(e,t,r){return t.M.count===r-this.de(e,t.targetId)?0:2}de(e,t){const r=this.X.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.X.Ve(),o=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,a)=>{const o=this.Te(a);if(o){if(i.current&&this.Ee(o.target)){const u=ut(o.target)?O.fromString(o.target.getPipelineDocuments()[0]):o.target.path,c=new v(u);this.me(c).has(a)||this.pe(a,c)||this.ae(a,c,re.newNoDocument(c,e))}i.$&&(t.set(a,i.W()),i.G())}});let r=x();this.ie.forEach((i,a)=>{let o=!0;a.forEachWhile(u=>{const c=this.Te(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(r=r.add(i))}),this.te.forEach((i,a)=>a.setReadTime(e)),this.re.forEach((i,a)=>a.setReadTime(e));const s=new Cn(e,t,this.se,this.te,this.re,r);return this.te=ce(),this.ne=qn(),this.re=ce(),this.ie=qn(),this.se=new B(N),s}oe(e,t){const r=this.ee.get(e);if(!r||!this.ce(e))return void E(Ht,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;r.j(t.key,s),ut(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,r){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),r&&(ut(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,r):this.te=this.te.insert(t,r))):E(Ht,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const r=t.W();return this.X.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}J(e){let t=this.ee.get(e);t||(E(Ht,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Vi(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Q(N),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Q(N),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||E(Ht,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new Vi(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function qn(){return new B(v.comparator)}function Pi(){return new B(v.comparator)}const Oc={asc:"ASCENDING",desc:"DESCENDING"},Uc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mc={and:"AND",or:"OR"};class Fc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function es(n,e){return n.useProto3Json||gr(e)?e:{value:e}}function on(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rs(n){const e=Ze(n);return new U(e.seconds,e.nanos)}function Ya(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hn(n,e){return on(n,e.toTimestamp())}function Ne(n){return A(!!n,49232),b.fromTimestamp(Rs(n))}function Vs(n,e){return ts(n,e).canonicalString()}function ts(n,e){const t=function(s){return new O(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xa(n){const e=O.fromString(n);return A(no(e),10190,{key:e.toString()}),e}function ur(n,e){return Vs(n.databaseId,e.path)}function Br(n,e){const t=Xa(e);if(t.get(1)!==n.databaseId.projectId)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Za(t))}function Ja(n,e){return Vs(n.databaseId,e)}function Bc(n){const e=Xa(n);return e.length===4?O.emptyPath():Za(e)}function ns(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Za(n){return A(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bi(n,e,t){return{name:ur(n,e),fields:t.value.mapValue.fields}}function qc(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(A(l===void 0||typeof l=="string",58123),W.fromBase64String(l||"")):(A(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),W.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const l=c.code===void 0?p.UNKNOWN:Ga(c.code);return new w(l,c.message||"")}(a);t=new Ha(r,s,i,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Br(n,r.document.name),i=Ne(r.document.updateTime),a=r.document.createTime?Ne(r.document.createTime):b.min(),o=new _e({mapValue:{fields:r.document.fields}}),u=re.newFoundDocument(s,i,a,o),c=r.targetIds||[],l=r.removedTargetIds||[];t=new Kn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Br(n,r.document),i=r.readTime?Ne(r.readTime):b.min(),a=re.newNoDocument(s,i),o=r.removedTargetIds||[];t=new Kn([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Br(n,r.document),i=r.removedTargetIds||[];t=new Kn([],i,s,null)}else{if(!("filter"in e))return R(11601,{we:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Vc(s,i),o=r.targetId;t=new Ka(o,a)}}return t}function $c(n,e){let t;if(e instanceof Sn)t={update:bi(n,e.key,e.value)};else if(e instanceof ws)t={delete:ur(n,e.key)};else if(e instanceof wt)t={update:bi(n,e.key,e.data),updateMask:Jc(e.fieldMask)};else{if(!(e instanceof ac))return R(16599,{be:e.type});t={verify:ur(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const o=a.transform;if(o instanceof nr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _n)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gn)return{fieldPath:a.field.canonicalString(),increment:o.h};if(o instanceof rr)return{fieldPath:a.field.canonicalString(),minimum:o.h};if(o instanceof sr)return{fieldPath:a.field.canonicalString(),maximum:o.h};throw R(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hn(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R(27497)}(n,e.precondition)),t}function zc(n,e){return n&&n.length>0?(A(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Ne(s.updateTime):Ne(i);return a.isEqual(b.min())&&(a=Ne(i)),new rc(a,s.transformResults||[])}(t,e))):[]}function Gc(n,e){return{documents:[Ja(n,e.path)]}}function jc(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ja(n,s);const i=function(c){if(c.length!==0)return to(Le.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:St(f.field),direction:Hc(f.dir)}}(l))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=es(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Se:t,parent:s}}function Qc(n){let e=Bc(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){A(r===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(h){const f=eo(h);return f instanceof Le&&Ua(f)?f.getFilters():[f]}(t.where));let a=[];t.orderBy&&(a=function(h){return h.map(f=>function(y){return new or(Ct(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(t.orderBy));let o=null;t.limit&&(o=function(h){let f;return f=typeof h=="object"?h.value:h,gr(f)?null:f}(t.limit));let u=null;t.startAt&&(u=function(h){const f=!!h.before,g=h.values||[];return new ar(g,f)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const f=!h.before,g=h.values||[];return new ar(g,f)}(t.endAt)),Ec(e,s,a,i,o,"F",u,c)}function Wc(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kc(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function eo(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ct(t.unaryFilter.field);return H.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ct(t.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ct(t.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ct(t.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return R(61313);default:return R(60726)}}(n):n.fieldFilter!==void 0?function(t){return H.create(Ct(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return R(58110);default:return R(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Le.create(t.compositeFilter.filters.map(r=>eo(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R(1026)}}(t.compositeFilter.op))}(n):R(30097,{filter:n})}function Hc(n){return Oc[n]}function Yc(n){return Uc[n]}function Xc(n){return Mc[n]}function St(n){return{fieldPath:n.canonicalString()}}function Ct(n){return ye.fromServerFormat(n.fieldPath)}function to(n){return n instanceof H?function(t){if(t.op==="=="){if(fe(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NAN"}};if(pe(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fe(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NOT_NAN"}};if(pe(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:St(t.field),op:Yc(t.op),value:t.value}}}(n):n instanceof Le?function(t){const r=t.getFilters().map(s=>to(s));return r.length===1?r[0]:{compositeFilter:{op:Xc(t.op),filters:r}}}(n):R(54877,{filter:n})}function Jc(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function no(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ro(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Tn(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function so(n){return{stringValue:n}}/**
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
 */function Ar(n){return new Fc(n,!0)}/**
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
 */class Ee{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ee(W.fromBase64String(e))}catch(t){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ee(W.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ee._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pn(e,Ee._jsonSchema))return Ee.fromBase64String(e.bytes)}}Ee._jsonSchemaVersion="firestore/bytes/1.0",Ee._jsonSchema={type:G("string",Ee._jsonSchemaVersion),bytes:G("string")};/**
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
 */class Ps{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Zc(){return new Ps(Pe)}/**
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
 */class io{constructor(e){this._methodName=e}}/**
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
 */class ke{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ke._jsonSchemaVersion}}static fromJSON(e){if(Pn(e,ke._jsonSchema))return new ke(e.latitude,e.longitude)}}ke._jsonSchemaVersion="firestore/geoPoint/1.0",ke._jsonSchema={type:G("string",ke._jsonSchemaVersion),latitude:G("number"),longitude:G("number")};/**
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
 */class He{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ao{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class tl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nl{constructor(e){this.De=e,this.currentUser=ne.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){A(this.Ce===void 0,42304);let r=this.xe;const s=u=>this.xe!==r?(r=this.xe,t(u)):Promise.resolve();let i=new He;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new He,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},o=u=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),a())};this.De.onInit(u=>o(u)),setTimeout(()=>{if(!this.auth){const u=this.De.getImmediate({optional:!0});u?o(u):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new He)}},0),a()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.xe!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(A(typeof r.accessToken=="string",31837,{Oe:r}),new ao(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return A(e===null||typeof e=="string",2055,{Me:e}),new ne(e)}}class rl{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class sl{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r}getToken(){return Promise.resolve(new rl(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Si{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class il{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,ua(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){A(this.Ce===void 0,3512);const r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.$e;return this.$e=i.token,E("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new Si(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(A(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new Si(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function oo(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class al{Qe(e){}shutdown(){}}/**
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
 */const Ci="ConnectivityMonitor";class xi{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){E(Ci,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){E(Ci,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $n=null;function rs(){return $n===null?$n=function(){return 268435456+Math.round(2147483648*Math.random())}():$n++,"0x"+$n.toString(16)}/**
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
 */const qr="RestConnection",ol={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ul{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${r}/databases/${s}`,this.tt=this.databaseId.database===er?`project_id=${r}`:`project_id=${r}&database_id=${s}`}nt(e,t,r,s,i){const a=rs(),o=this.rt(e,t.toUriEncodedString());E(qr,`Sending RPC '${e}' ${a}:`,o,r);const u={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(u,s,i);const{host:c}=new URL(o),l=_r(c);return this.st(e,o,u,r,l).then(h=>(E(qr,`Received RPC '${e}' ${a}: `,h),h),h=>{throw Re(qr,`RPC '${e}' ${a} failed with error: `,h,"url: ",o,"request:",r),h})}_t(e,t,r,s,i,a){return this.nt(e,t,r,s,i)}it(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ft}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const r=ol[e];let s=`${this.Xe}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class cl{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
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
 */const te="WebChannelConnection",Yt=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Nt extends ul{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!Nt.yt){const e=Lu();Yt(e,Ou.STAT_EVENT,t=>{t.stat===ui.PROXY?E(te,"STAT_EVENT: detected buffering proxy"):t.stat===ui.NOPROXY&&E(te,"STAT_EVENT: detected no buffering proxy")}),Nt.yt=!0}}st(e,t,r,s,i){const a=rs();return new Promise((o,u)=>{const c=new Uu;c.setWithCredentials(!0),c.listenOnce(Mu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mr.NO_ERROR:const h=c.getResponseJson();E(te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(h)),o(h);break;case Mr.TIMEOUT:E(te,`RPC '${e}' ${a} timed out`),u(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const f=c.getStatus();if(E(te,`RPC '${e}' ${a} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g?.error;if(y&&y.status&&y.message){const V=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(D)>=0?D:p.UNKNOWN}(y.status);u(new w(V,y.message))}else u(new w(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new w(p.UNAVAILABLE,"Connection failed."));break;default:R(9055,{wt:e,streamId:a,bt:c.getLastErrorCode(),St:c.getLastError()})}}finally{E(te,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(s);E(te,`RPC '${e}' ${a} sending request:`,s),c.send(t,"POST",l,r,15)})}vt(e,t,r){const s=rs(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(o.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(o.useFetchStreams=!0),this.it(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const c=i.join("");E(te,`Creating RPC '${e}' stream ${s}: ${c}`,o);const l=a.createWebChannel(c,o);this.Dt(l);let h=!1,f=!1;const g=new cl({ot:y=>{f?E(te,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(h||(E(te,`Opening RPC '${e}' stream ${s} transport.`),l.open(),h=!0),E(te,`RPC '${e}' stream ${s} sending:`,y),l.send(y))},ut:()=>l.close()});return Yt(l,Mn.EventType.OPEN,()=>{f||(E(te,`RPC '${e}' stream ${s} transport opened.`),g.Rt())}),Yt(l,Mn.EventType.CLOSE,()=>{f||(f=!0,E(te,`RPC '${e}' stream ${s} transport closed`),g.Vt(),this.xt(l))}),Yt(l,Mn.EventType.ERROR,y=>{f||(f=!0,Re(te,`RPC '${e}' stream ${s} transport errored. Name:`,y.name,"Message:",y.message),g.Vt(new w(p.UNAVAILABLE,"The operation could not be completed")))}),Yt(l,Mn.EventType.MESSAGE,y=>{if(!f){const V=y.data[0];A(!!V,16349);const I=V,C=I?.error||I[0]?.error;if(C){E(te,`RPC '${e}' stream ${s} received error:`,C);const D=C.status;let L=function(Ie){const Qe=z[Ie];if(Qe!==void 0)return Ga(Qe)}(D),M=C.message;D==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Re(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=p.INTERNAL,M="Unknown error status: "+D+" with message "+C.message),f=!0,g.Vt(new w(L,M)),l.close()}else E(te,`RPC '${e}' stream ${s} received:`,V),g.dt(V)}}),Nt.gt(),setTimeout(()=>{g.At()},0),g}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,r){super.it(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fu()}}/**
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
 */function ll(n){return new Nt(n)}Nt.yt=!1;class uo{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=r,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),r=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
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
 */const Ni="PersistentStream";class co{constructor(e,t,r,s,i,a,o,u){this.Ct=e,this.Kt=r,this.Qt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=u,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new uo(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.un(r,s)},r=>{e(()=>{const s=new w(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.cn(s)})})}un(e,t){const r=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{r(()=>this.listener.ct())}),this.stream.Et(()=>{r(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{r(()=>this.cn(s))}),this.stream.onMessage(s=>{r(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return E(Ni,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(E(Ni,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hl extends co{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=qc(this.serializer,e),r=function(i){if(!("targetChange"in i))return b.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?b.min():a.readTime?Ne(a.readTime):b.min()}(e);return this.listener.Tn(t,r)}Pn(e){const t={};t.database=ns(this.serializer),t.addTarget=function(i,a){let o;const u=a.target;if(o=ut(u)?{pipelineQuery:Kc(i,u)}:za(u)?{documents:Gc(i,u)}:{query:jc(i,u).Se},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Ya(i,a.resumeToken);const c=es(i,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(b.min())>0){o.readTime=on(i,a.snapshotVersion.toTimestamp());const c=es(i,a.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=Wc(this.serializer,e);r&&(t.labels=r),this.nn(t)}In(e){const t={};t.database=ns(this.serializer),t.removeTarget=e,this.nn(t)}}class dl extends co{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return A(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,A(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){A(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=zc(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.dn(r,t)}fn(){const e={};e.database=ns(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>$c(this.serializer,r))};this.nn(t)}}/**
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
 */class fl{}class ml extends fl{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,r,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.nt(e,ts(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(p.UNKNOWN,i.toString())})}_t(e,t,r,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection._t(e,ts(t,r),s,a,o,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(p.UNKNOWN,a.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function _l(n,e,t,r){return new ml(n,e,t,r)}/**
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
 */const pl="ComponentProvider",ki=new Map;function gl(n,e,t,r,s){return new Ku(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oo(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const Di={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lo=41943040;class oe{static withCacheSize(e){return new oe(e,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}oe.DEFAULT_COLLECTION_PERCENTILE=10,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oe.DEFAULT=new oe(lo,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oe.DISABLED=new oe(-1,0,0);/**
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
 */class vr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.gn(r),this.yn=r=>t.writeSequenceNumber(r))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}vr.wn=-1;/**
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
 */const yl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bt(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==yl)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,r)=>{t(e)})}static reject(e){return new _((t,r)=>{r(e)})}static waitFor(e){return new _((t,r)=>{let s=0,i=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=_.resolve(!1);for(const r of e)t=t.next(s=>s?_.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new _((r,s)=>{const i=e.length,a=new Array(i);let o=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(l=>{a[c]=l,++o,o===i&&r(a)},l=>s(l))}})}static doWhile(e,t){return new _((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function El(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qt(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Li="LruGarbageCollector",wl=1048576;function Oi([n,e],[t,r]){const s=N(n,t);return s===0?N(e,r):s}class Il{constructor(e){this.Yn=e,this.buffer=new Q(Oi),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Oi(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Al{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){E(Li,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qt(t)?E(Li,"Ignoring IndexedDB error during garbage collection: ",t):await Bt(t)}await this.nr(3e5)})}}class vl{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return _.resolve(vr.wn);const r=new Il(t);return this.rr.forEachTarget(e,s=>r.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>r.er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.rr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(E("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(Di)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Di):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let r,s,i,a,o,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,a=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,o=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(c=Date.now(),Vt()<=Fe.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-l}ms
	Determined least recently used ${s} in `+(o-a)+`ms
	Removed ${i} targets in `+(u-o)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function Rl(n,e){return new vl(n,e)}/**
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
 */const ho="firestore.googleapis.com",Ui=!0;class Mi{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ho,this.ssl=Ui}else this.host=e.host,this.ssl=e.ssl??Ui;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=lo;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wl)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Qu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oo(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new w(p.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const o of i)if(r[o]!==s[o])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Rr=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mi({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mi(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new el;switch(r.type){case"firstParty":return new sl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ki.get(t);r&&(E(pl,"Removing Datastore"),ki.delete(t),r.terminate())}(this),Promise.resolve()}};function Vl(n,e,t,r={}){n=Ce(n,Rr);const s=_r(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${e}:${t}`;s&&_a(`https://${o}`),i.host!==ho&&i.host!==o&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:o,ssl:s,emulatorOptions:r};if(!xu(u,a)&&(n._setSettings(u),r.mockUserToken)){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ne.MOCK_USER;else{c=pa(r.mockUserToken,n._app?.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ne(h)}n._authCredentials=new tl(new ao(c,l))}}/**
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
 */class Nn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class j{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new j(this.firestore,e,this._key)}toJSON(){return{type:j._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Pn(t,j._jsonSchema))return new j(e,r||null,new v(O.fromString(t.referencePath)))}}j._jsonSchemaVersion="firestore/documentReference/1.0",j._jsonSchema={type:G("string",j._jsonSchemaVersion),referencePath:G("string")};class Ye extends Nn{constructor(e,t,r){super(e,t,Is(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new j(this.firestore,null,new v(e))}withConverter(e){return new Ye(this.firestore,e,this._path)}}function Hm(n,e,...t){if(n=De(n),Ea("collection","path",e),n instanceof Rr){const r=O.fromString(e,...t);return hi(r),new Ye(n,null,r)}{if(!(n instanceof j||n instanceof Ye))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return hi(r),new Ye(n.firestore,null,r)}}function Pl(n,e,...t){if(n=De(n),arguments.length===1&&(e=_s.newId()),Ea("doc","path",e),n instanceof Rr){const r=O.fromString(e,...t);return li(r),new j(n,null,new v(r))}{if(!(n instanceof j||n instanceof Ye))throw new w(p.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return li(r),new j(n.firestore,n instanceof Ye?n.converter:null,new v(r))}}/**
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
 */class le{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:le._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pn(e,le._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new le(e.vectorValues);throw new w(p.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}le._jsonSchemaVersion="firestore/vectorValue/1.0",le._jsonSchema={type:G("string",le._jsonSchemaVersion),vectorValues:G("object")};/**
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
 */const bl=/^__.*__$/;class Sl{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sn(e,this.data,t,this.fieldTransforms)}}function fo(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R(40011,{dataSource:n})}}class bs{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new bs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return cr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(fo(this.dataSource)&&bl.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Cl{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ar(e)}createContext(e,t,r,s=!1){return new bs({dataSource:e,methodName:t,targetDoc:r,path:ye.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mo(n){const e=n._freezeSettings(),t=Ar(n._databaseId);return new Cl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _o(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);To("Data must be an object, but it was:",a,r);const o=po(r,a);let u,c;if(i.merge)u=new Ae(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Vr(e,h,t);if(!a.contains(f))throw new w(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);kl(l,f)||l.push(f)}u=new Ae(l),c=a.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=a.fieldTransforms;return new Sl(new _e(o),u,c)}function En(n,e,t){if(yo(n=De(n)))return To("Unsupported field value:",e,n),po(n,e);if(n instanceof io)return function(s,i){if(!fo(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let o=0;for(const u of s){let c=En(u,i.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),a.push(c),o++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ts(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=U.fromDate(s);return{timestampValue:on(i.serializer,o)}}if(s instanceof U){const o=new U(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:on(i.serializer,o)}}if(go(s)){const o=U.fromInstant(s),u=new U(o.seconds,1e3*Math.floor(o.nanoseconds/1e3));return{timestampValue:on(i.serializer,u)}}if(s instanceof ke)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ee)return{bytesValue:Ya(i.serializer,s._byteString)};if(s instanceof j){const o=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(o))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Vs(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof le)return function(u,c){const l=u instanceof le?u.toArray():u;return{mapValue:{fields:{[Va]:{stringValue:Pa},[fn]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return yr(c.serializer,f)})}}}}}}(s,i);if(ro(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ps(s)}`)}(n,e)}function po(n,e){const t={};return Ta(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Et(n,(r,s)=>{const i=En(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function go(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function yo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof U||n instanceof ke||n instanceof Ee||n instanceof j||n instanceof io||n instanceof le||go(n)||ro(n))}function To(n,e,t){if(!yo(t)||!Vn(t)){const r=ps(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Vr(n,e,t){if((e=De(e))instanceof Ps)return e._internalPath;if(typeof e=="string")return Nl(n,e);throw cr("Field path arguments must be of type string or ",n,!1,void 0,t)}const xl=new RegExp("[~\\*/\\[\\]]");function Nl(n,e,t){if(e.search(xl)>=0)throw cr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ps(...e.split("."))._internalPath}catch{throw cr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cr(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new w(p.INVALID_ARGUMENT,o+n+u)}function kl(n,e){return n.some(t=>t.isEqual(e))}function Eo(n){return typeof n._readUserData=="function"}/**
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
 */class se{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=_e.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let o;i.nestedOptions&&Vn(a)?o={mapValue:{fields:new se(i.nestedOptions).getOptionsProto(t,a)}}:a&&(o=En(a,t)??void 0),o&&r.set(ye.fromServerFormat(i.serverName),o)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(ju(r,(a,o)=>[ye.fromServerFormat(o),a!==void 0?En(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function Dl(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Vn(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function Ll(n){return new le(n)}/**
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
 */function T(n){let e;return n instanceof At?n:(e=Vn(n)?Bl(n):n instanceof Array?ql(n):wo(n,void 0),e)}function $r(n){if(n instanceof At)return n;if(n instanceof le)return wn(n);if(Array.isArray(n))return wn(Ll(n));throw new Error("Unsupported value: "+typeof n)}function Ss(n){return Xu(n)?Yn(n):T(n)}class At{constructor(){this._protoValueType="ProtoValue"}add(e){return new m("add",[this,T(e)],"add")}asBoolean(){if(this instanceof rt)return this;if(this instanceof zt)return new Ao(this);if(this instanceof $t)return new Fl(this);if(this instanceof m)return new Io(this);throw new w("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new m("subtract",[this,T(e)],"subtract")}multiply(e){return new m("multiply",[this,T(e)],"multiply")}divide(e){return new m("divide",[this,T(e)],"divide")}mod(e){return new m("mod",[this,T(e)],"mod")}equal(e){return new m("equal",[this,T(e)],"equal").asBoolean()}notEqual(e){return new m("not_equal",[this,T(e)],"notEqual").asBoolean()}lessThan(e){return new m("less_than",[this,T(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new m("less_than_or_equal",[this,T(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new m("greater_than",[this,T(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new m("greater_than_or_equal",[this,T(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>T(s));return new m("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new m("array_contains",[this,T(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Zt(e.map(T),"arrayContainsAll"):e;return new m("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Zt(e.map(T),"arrayContainsAny"):e;return new m("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new m("array_reverse",[this])}arrayLength(){return new m("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Zt(e.map(T),"equalAny"):e;return new m("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Zt(e.map(T),"notEqualAny"):e;return new m("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new m("exists",[this],"exists").asBoolean()}charLength(){return new m("char_length",[this],"charLength")}like(e){return new m("like",[this,T(e)],"like").asBoolean()}regexContains(e){return new m("regex_contains",[this,T(e)],"regexContains").asBoolean()}regexFind(e){return new m("regex_find",[this,T(e)],"regexFind")}regexFindAll(e){return new m("regex_find_all",[this,T(e)],"regexFindAll")}regexMatch(e){return new m("regex_match",[this,T(e)],"regexMatch").asBoolean()}stringContains(e){return new m("string_contains",[this,T(e)],"stringContains").asBoolean()}startsWith(e){return new m("starts_with",[this,T(e)],"startsWith").asBoolean()}endsWith(e){return new m("ends_with",[this,T(e)],"endsWith").asBoolean()}toLower(){return new m("to_lower",[this],"toLower")}toUpper(){return new m("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(T(e)),new m("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(T(e)),new m("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(T(e)),new m("rtrim",t,"rtrim")}type(){return new m("type",[this])}isType(e){return new m("is_type",[this,wn(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(T);return new m("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new m("string_index_of",[this,T(e)],"stringIndexOf")}stringRepeat(e){return new m("string_repeat",[this,T(e)],"stringRepeat")}stringReplaceAll(e,t){return new m("string_replace_all",[this,T(e),T(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new m("string_replace_one",[this,T(e),T(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(T);return new m("concat",[this,...r],"concat")}reverse(){return new m("reverse",[this],"reverse")}arrayFilter(e,t){return new m("array_filter",[this,T(e),t],"arrayFilter")}arrayTransform(e,t){return new m("array_transform",[this,T(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new m("array_transform",[this,T(e),T(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,T(e)];return t!==void 0&&r.push(T(t)),new m("array_slice",r,"arraySlice")}arrayFirst(){return new m("array_first",[this],"arrayFirst")}arrayFirstN(e){return new m("array_first_n",[this,T(e)],"arrayFirstN")}arrayLast(){return new m("array_last",[this],"arrayLast")}arrayLastN(e){return new m("array_last_n",[this,T(e)],"arrayLastN")}arrayMaximum(){return new m("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new m("maximum_n",[this,T(e)],"arrayMaximumN")}arrayMinimum(){return new m("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new m("minimum_n",[this,T(e)],"arrayMinimumN")}arrayIndexOf(e){return new m("array_index_of",[this,T(e),T("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new m("array_index_of",[this,T(e),T("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new m("array_index_of_all",[this,T(e)],"arrayIndexOfAll")}byteLength(){return new m("byte_length",[this],"byteLength")}ceil(){return new m("ceil",[this])}floor(){return new m("floor",[this])}abs(){return new m("abs",[this])}exp(){return new m("exp",[this])}mapGet(e){return new m("map_get",[this,wn(e)],"mapGet")}mapSet(e,t,...r){const s=[this,T(e),T(t),...r.map(T)];return new m("map_set",s,"mapSet")}mapKeys(){return new m("map_keys",[this],"mapKeys")}mapValues(){return new m("map_values",[this],"mapValues")}mapEntries(){return new m("map_entries",[this],"mapEntries")}getField(e){return new m("get_field",[this,T(e)],"get_field")}count(){return me._create("count",[this],"count")}sum(){return me._create("sum",[this],"sum")}average(){return me._create("average",[this],"average")}minimum(){return me._create("minimum",[this],"minimum")}maximum(){return me._create("maximum",[this],"maximum")}first(){return me._create("first",[this],"first")}last(){return me._create("last",[this],"last")}arrayAgg(){return me._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return me._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return me._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new m("maximum",[this,...r.map(T)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new m("minimum",[this,...r.map(T)],"minimum")}vectorLength(){return new m("vector_length",[this],"vectorLength")}cosineDistance(e){return new m("cosine_distance",[this,$r(e)],"cosineDistance")}dotProduct(e){return new m("dot_product",[this,$r(e)],"dotProduct")}euclideanDistance(e){return new m("euclidean_distance",[this,$r(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new m("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new m("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new m("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new m("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new m("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new m("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new m("timestamp_add",[this,T(e),T(t)],"timestampAdd")}timestampSubtract(e,t){return new m("timestamp_subtract",[this,T(e),T(t)],"timestampSubtract")}timestampDiff(e,t){return new m("timestamp_diff",[this,Ss(e),T(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,T(e)];return t&&r.push(T(t)),new m("timestamp_extract",r,"timestampExtract")}documentId(){return new m("document_id",[this],"documentId")}parent(){return new m("parent",[this],"parent")}substring(e,t){const r=T(e);return new m("substring",t===void 0?[this,r]:[this,r,T(t)],"substring")}arrayGet(e){return new m("array_get",[this,T(e)],"arrayGet")}isError(){return new m("is_error",[this],"isError").asBoolean()}ifError(e){const t=new m("if_error",[this,T(e)],"ifError");return e instanceof rt?t.asBoolean():t}isAbsent(){return new m("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new m("map_remove",[this,T(e)],"mapRemove")}mapMerge(e,...t){const r=T(e),s=t.map(T);return new m("map_merge",[this,r,...s],"mapMerge")}pow(e){return new m("pow",[this,T(e)])}trunc(e){return e===void 0?new m("trunc",[this]):new m("trunc",[this,T(e)],"trunc")}round(e){return e===void 0?new m("round",[this]):new m("round",[this,T(e)],"round")}collectionId(){return new m("collection_id",[this])}length(){return new m("length",[this])}ln(){return new m("ln",[this])}sqrt(){return new m("sqrt",[this])}stringReverse(){return new m("string_reverse",[this])}ifAbsent(e){return new m("if_absent",[this,T(e)],"ifAbsent")}ifNull(e){return new m("if_null",[this,T(e)],"ifNull")}coalesce(e,...t){return new m("coalesce",[this,T(e),...t.map(T)],"coalesce")}join(e){return new m("join",[this,T(e)],"join")}log10(){return new m("log10",[this])}arraySum(){return new m("sum",[this])}split(e){return new m("split",[this,T(e)])}timestampTruncate(e,t){const r=[this,T(e)];return t&&r.push(T(t)),new m("timestamp_trunc",r)}ascending(){return $l(this)}descending(){return zl(this)}as(e){return new Ul(this,e,"as")}}class me{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new me(e,t);return s._methodName=r,s}as(e){return new Ol(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Ol{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Ul{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Zt extends At{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class $t extends At{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new m("geo_distance",[this,T(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Yn(n){return Ml(n,"field")}function Ml(n,e){return new $t(typeof n=="string"?Pe===n?Zc()._internalPath:Vr("field",n):n._internalPath,e)}class zt extends At{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new zt(e,void 0);return t._protoValue=e,t}_toProto(e){return A(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Dl(this._protoValue)||(this._protoValue=En(this.value,e))}}function wn(n,e){return wo(n,"constant")}function wo(n,e){const t=new zt(n,e);return typeof n=="boolean"?new Ao(t):t}class m extends At{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new se({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class rt extends At{get _methodName(){return this._expr._methodName}countIf(){return me._create("count_if",[this],"countIf")}not(){return new m("not",[this],"not").asBoolean()}conditional(e,t){return new m("conditional",[this,e,t],"conditional")}ifError(e){const t=T(e),r=new m("if_error",[this,t],"ifError");return t instanceof rt?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Io extends rt{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Ao extends rt{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Fl extends rt{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Bl(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(wn(r)),t.push(T(s))}return new m("map",t,"map")}function ql(n){return function(t,r){return new m("array",t.map(s=>T(s)),r)}(n,"array")}function $l(n){return new vo(Ss(n),"ascending","ascending")}function zl(n){return new vo(Ss(n),"descending","descending")}class vo{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:so(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Te{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ro extends Te{get _name(){return"add_fields"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Tn(e,this.fields)]}}_readUserData(e){super._readUserData(e),st(this.fields,e)}}class Vo extends Te{get _name(){return"aggregate"}get _optionsUtil(){return new se({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Tn(e,this.accumulators),Tn(e,this.groups)]}}_readUserData(e){super._readUserData(e),st(this.groups,e),st(this.accumulators,e)}}class Po extends Te{get _name(){return"distinct"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Tn(e,this.groups)]}}_readUserData(e){super._readUserData(e),st(this.groups,e)}}class Pr extends Te{get _name(){return"collection"}get _optionsUtil(){return new se({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class br extends Te{get _name(){return"collection_group"}get _optionsUtil(){return new se({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Cs extends Te{get _name(){return"database"}get _optionsUtil(){return new se({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class xs extends Te{get _name(){return"documents"}get _optionsUtil(){return new se({})}constructor(e,t){if(super(t),!e||e.length===0)throw new w(p.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new w(p.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=r,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Sr extends Te{get _name(){return"where"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),st(this.condition,e)}}class gt extends Te{get _name(){return"limit"}get _optionsUtil(){return new se({})}constructor(e,t){A(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Ts(e,this.limit)]}}}class Fi extends Te{get _name(){return"offset"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Ts(e,this.offset)]}}}class Gl extends Te{get _name(){return"select"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Tn(e,this.selections)]}}_readUserData(e){super._readUserData(e),st(this.selections,e)}}class Be extends Te{get _name(){return"sort"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),st(this.orderings,e)}}class Ns extends Te{get _name(){return"replace_with"}get _optionsUtil(){return new se({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),so(Ns.Ir)]}}_readUserData(e){super._readUserData(e),st(this.map,e)}}Ns.Ir="full_replace";function st(n,e){return Eo(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
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
 */class un{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Vr(e,t){const r=this.userDataReader.createContext(3,e);return Eo(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Vr("where",e),t.push(new Sr(e,{})),new un(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new gt(e,{})),new un(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new Be(this.Vr("sort",e.orderings),{})):r.push(new Be(this.Vr("sort",[e,...t]),{})),new un(this._db,this.userDataReader,this._userDataWriter,r)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class ae{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Cr(this)}getPipelineCollectionGroup(){return ks(this)}getPipelineCollectionId(){return jl(this)}getPipelineDocuments(){return ss(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==Po.name&&s._name!==Vo.name||(r="keyless"),s._name===Gl.name&&r==="exact"&&(r="augmented"),s._name===Ro.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Xe(this)}}function Xe(n){const e=n.stages[0];return e instanceof Pr||e instanceof br||e instanceof Cs||e instanceof xs?e._name:"unknown"}function Cr(n){if(Xe(n)==="collection")return n.stages[0].hr}function ks(n){if(Xe(n)==="collection_group")return n.stages[0].collectionId}function jl(n){switch(Xe(n)){case"collection":return O.fromString(Cr(n)).lastSegment();case"collection_group":return ks(n);default:return}}function ss(n){if(Xe(n)==="documents")return n.stages[0].Tr}class d{constructor(e,t){this.type=e,this.value=t}static mr(){return new d("ERROR",void 0)}static pr(){return new d("UNSET",void 0)}static gr(){return new d("NULL",Lt)}static newValue(e){return pe(e)?new d("NULL",Lt):function(r){return!!r&&"booleanValue"in r}(e)?new d("BOOLEAN",e):be(e)?new d("INT",e):ct(e)?new d("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new d("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new d("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new d("BYTES",e):e.referenceValue?new d("REFERENCE",e):e.geoPointValue?new d("GEO_POINT",e):Ut(e)?new d("ARRAY",e):tr(e)?new d("VECTOR",e):ht(e)?new d("MAP",e):new d("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function cn(n){if(!n.yr())return n.value}function bo(n){return n instanceof rt?n._expr:n}function P(n){if((n=bo(n))instanceof $t)return new Ql(n);if(n instanceof zt)return new Wl(n);if(n instanceof Zt)return new Kl(n);if(n instanceof m){if(n.name==="add")return new Xl(n);if(n.name==="subtract")return new Jl(n);if(n.name==="multiply")return new Zl(n);if(n.name==="divide")return new eh(n);if(n.name==="mod")return new th(n);if(n.name==="and")return new nh(n);if(n.name==="equal")return new mh(n);if(n.name==="not_equal")return new _h(n);if(n.name==="less_than")return new ph(n);if(n.name==="less_than_or_equal")return new gh(n);if(n.name==="greater_than")return new yh(n);if(n.name==="greater_than_or_equal")return new Th(n);if(n.name==="array_concat")return new Eh(n);if(n.name==="array_reverse")return new wh(n);if(n.name==="array_contains")return new Ih(n);if(n.name==="array_contains_all")return new Ah(n);if(n.name==="array_contains_any")return new vh(n);if(n.name==="array_length")return new Rh(n);if(n.name==="array_element")return new Vh(n);if(n.name==="equal_any")return new So(n);if(n.name==="not_equal_any")return new sh(n);if(n.name==="is_nan")return new ih(n);if(n.name==="is_not_nan")return new ah(n);if(n.name==="is_null")return new oh(n);if(n.name==="is_not_null")return new uh(n);if(n.name==="is_error")return new ch(n);if(n.name==="exists")return new lh(n);if(n.name==="not")return new xr(n);if(n.name==="or")return new rh(n);if(n.name==="xor")return new Ds(n);if(n.name==="conditional")return new hh(n);if(n.name==="maximum")return new dh(n);if(n.name==="minimum")return new fh(n);if(n.name==="reverse")return new Ph(n);if(n.name==="replace_first")return new bh(n);if(n.name==="replace_all")return new Sh(n);if(n.name==="char_length")return new Ch(n);if(n.name==="byte_length")return new xh(n);if(n.name==="like")return new Nh(n);if(n.name==="regex_contains")return new kh(n);if(n.name==="regex_match")return new Dh(n);if(n.name==="string_contains")return new Lh(n);if(n.name==="starts_with")return new Oh(n);if(n.name==="ends_with")return new Uh(n);if(n.name==="to_lower")return new Mh(n);if(n.name==="to_upper")return new Fh(n);if(n.name==="trim")return new Bh(n);if(n.name==="string_concat")return new qh(n);if(n.name==="map_get")return new $h(n);if(n.name==="cosine_distance")return new zh(n);if(n.name==="dot_product")return new Gh(n);if(n.name==="euclidean_distance")return new jh(n);if(n.name==="vector_length")return new Qh(n);if(n.name==="unix_micros_to_timestamp")return new Xh(n);if(n.name==="timestamp_to_unix_micros")return new ed(n);if(n.name==="unix_millis_to_timestamp")return new Jh(n);if(n.name==="timestamp_to_unix_millis")return new td(n);if(n.name==="unix_seconds_to_timestamp")return new Zh(n);if(n.name==="timestamp_to_unix_seconds")return new nd(n);if(n.name==="timestamp_add")return new rd(n);if(n.name==="timestamp_subtract")return new sd(n)}throw new Error(`Unknown Expr : ${n}`)}class Ql{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Pe)return d.newValue({referenceValue:ur(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return d.newValue({timestampValue:Hn(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return d.newValue({timestampValue:Hn(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?pr(r)?d.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Hn(i.serializer,b.fromTimestamp(Dt(a)))};if(i.serverTimestampBehavior==="previous"){const o=bn(a);if(o)return o}return{nullValue:"NULL_VALUE"}}(e,r)):d.newValue(r):d.pr()}}class Wl{constructor(e){this.expr=e}evaluate(e,t){return d.newValue(this.expr._getValue())}}class Kl{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.cr.map(s=>P(s).evaluate(e,t));return r.some(s=>s.yr())?d.mr():d.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function ee(n){return ct(n)?Number(n.doubleValue):Number(n.integerValue)}function Oe(n){return BigInt(n.integerValue)}const Hl=BigInt("0x7fffffffffffffff"),Yl=-BigInt("0x8000000000000000");class kn{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length>=2,24778);const r=P(this.expr.params[0]).evaluate(e,t),s=P(this.expr.params[1]).evaluate(e,t);let i=this.br(r,s);for(const a of this.expr.params.slice(2)){const o=P(a).evaluate(e,t);i=this.br(i,o)}return i}br(e,t){if(e.yr()||t.yr())return d.mr();if(e.wr()||t.wr())return d.gr();const r=e.value,s=t.value;if(!ct(r)&&!be(r)||!ct(s)&&!be(s))return d.mr();if(ct(r)||ct(s)){const i=this.Sr(r,s);return i?d.newValue(i):d.mr()}if(be(r)&&be(s)){const i=this.vr(r,s);return i===void 0?d.mr():typeof i=="number"?d.newValue({doubleValue:i}):i<Yl||i>Hl?d.mr():d.newValue({integerValue:`${i}`})}return d.mr()}}function je(n,e){return K(n)!==K(e)?"TYPE_MISMATCH":fe(n)||fe(e)?"NOT_EQ":pe(n)&&pe(e)?"EQ":pe(n)||pe(e)?"NULL":Ut(n)&&Ut(e)?function(r,s){if(r.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let a=0;a<(r.values?.length??0);a++){const o=r.values[a],u=s.values[a];switch(je(o,u)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:R(44609,{Dr:o,Cr:u})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):tr(n)&&tr(e)||ht(n)&&ht(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(Zn(i)!==Zn(a))return"NOT_EQ";let o=!1;for(const u in i)if(i.hasOwnProperty(u)){if(a[u]===void 0)return"NOT_EQ";switch(je(i[u],a[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":o=!0}}return o?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return we(r,s,{u:!1,i:!0,o:!0})}(n,e)?"EQ":"NOT_EQ"}class Xl extends kn{vr(e,t){return Oe(e)+Oe(t)}Sr(e,t){return{doubleValue:ee(e)+ee(t)}}}class Jl extends kn{constructor(e){super(e),this.expr=e}vr(e,t){return Oe(e)-Oe(t)}Sr(e,t){return{doubleValue:ee(e)-ee(t)}}}class Zl extends kn{constructor(e){super(e),this.expr=e}vr(e,t){return Oe(e)*Oe(t)}Sr(e,t){return{doubleValue:ee(e)*ee(t)}}}class eh extends kn{constructor(e){super(e),this.expr=e}vr(e,t){const r=Oe(t);if(r!==BigInt(0))return Oe(e)/r}Sr(e,t){const r=ee(t);return r===0?{doubleValue:dn(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:ee(e)/r}}}class th extends kn{constructor(e){super(e),this.expr=e}vr(e,t){const r=Oe(t);if(r!==BigInt(0))return Oe(e)%r}Sr(e,t){const r=ee(t);if(r!==0)return{doubleValue:ee(e)%r}}}class nh{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=P(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return d.newValue(J);break;case"NULL":s=!0;break;default:r=!0}}return r?d.mr():s?d.gr():d.newValue(he)}}class xr{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,9634);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return d.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return d.gr();default:return d.mr()}}}class rh{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=P(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return d.newValue(he);break;case"NULL":s=!0;break;default:r=!0}}return r?d.mr():s?d.gr():d.newValue(J)}}class Ds{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=P(i).evaluate(e,t);switch(a.type){case"BOOLEAN":r=Ds.xor(r,!!a.value?.booleanValue);break;case"NULL":s=!0;break;default:return d.mr()}}return s?d.gr():d.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class So{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,55094);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return d.mr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.mr()}if(r)return d.gr();for(const a of i.value?.arrayValue?.values??[])switch(pe(s.value)&&pe(a)?"EQ":je(s.value,a)){case"EQ":return d.newValue(he);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:R(44608,{value:s.value,candidate:a})}return r?d.gr():d.newValue(J)}}class sh{constructor(e){this.expr=e}evaluate(e,t){return new xr(new m("not",[new m("equal_any",this.expr.params)])).evaluate(e,t)}}class ih{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,23322);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return d.newValue(J);case"DOUBLE":return d.newValue({booleanValue:isNaN(ee(r.value))});case"NULL":return d.gr();default:return d.mr()}}}class ah{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===1,50406),new xr(new m("not",[new m("is_nan",this.expr.params)])).evaluate(e,t)}}class oh{constructor(e){this.expr=e}evaluate(e,t){switch(A(this.expr.params.length===1,23123),P(this.expr.params[0]).evaluate(e,t).type){case"NULL":return d.newValue(he);case"UNSET":case"ERROR":return d.mr();default:return d.newValue(J)}}}class uh{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===1,23167),new xr(new m("not",[new m("is_null",this.expr.params)])).evaluate(e,t)}}class ch{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===1,5228),P(this.expr.params[0]).evaluate(e,t).type==="ERROR"?d.newValue(he):d.newValue(J)}}class lh{constructor(e){this.expr=e}evaluate(e,t){switch(A(this.expr.params.length===1,6877),P(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return d.mr();case"UNSET":return d.newValue(J);default:return d.newValue(he)}}}class hh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===3,11706);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?P(this.expr.params[1]).evaluate(e,t):P(this.expr.params[2]).evaluate(e,t);case"NULL":return P(this.expr.params[2]).evaluate(e,t);default:return d.mr()}}}class dh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>P(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||de(i.value,s.value)>0?i:s}return s===void 0?d.gr():s}}class fh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>P(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||de(i.value,s.value)<0?i:s}return s===void 0?d.gr():s}}class Gt{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return d.mr()}const s=P(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return d.mr()}return this.Fr(r,s)}}class mh extends Gt{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return d.newValue(he);if(e.wr()||t.wr()||fe(e.value)||fe(t.value)||K(e.value)!==K(t.value))return d.newValue(J);switch(je(e.value,t.value)){case"EQ":return d.newValue(he);case"NOT_EQ":return d.newValue(J);case"NULL":return d.gr();default:R(44615,{left:e,right:t})}}}class _h extends Gt{constructor(e){super(e),this.expr=e}Fr(e,t){switch(je(e.value,t.value)){case"EQ":return d.newValue(J);case"NOT_EQ":case"TYPE_MISMATCH":return d.newValue(he);case"NULL":return d.gr();default:R(44614,{left:e,right:t})}}}class ph extends Gt{constructor(e){super(e),this.expr=e}Fr(e,t){return K(e.value)!==K(t.value)||fe(e.value)||fe(t.value)?d.newValue(J):d.newValue({booleanValue:de(e.value,t.value)<0})}}class gh extends Gt{constructor(e){super(e),this.expr=e}Fr(e,t){return K(e.value)!==K(t.value)||fe(e.value)||fe(t.value)?d.newValue(J):je(e.value,t.value)==="EQ"?d.newValue(he):d.newValue({booleanValue:de(e.value,t.value)<0})}}class yh extends Gt{constructor(e){super(e),this.expr=e}Fr(e,t){return K(e.value)!==K(t.value)||fe(e.value)||fe(t.value)?d.newValue(J):d.newValue({booleanValue:de(e.value,t.value)>0})}}class Th extends Gt{constructor(e){super(e),this.expr=e}Fr(e,t){return K(e.value)!==K(t.value)||fe(e.value)||fe(t.value)?d.newValue(J):je(e.value,t.value)==="EQ"?d.newValue(he):d.newValue({booleanValue:de(e.value,t.value)>0})}}class Eh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class wh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,216);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.gr();case"ARRAY":{const s=r.value.arrayValue?.values??[];return d.newValue({arrayValue:{values:[...s].reverse()}})}default:return d.mr()}}}class Ih{constructor(e){this.expr=e}evaluate(e,t){return A(this.expr.params.length===2,52884),new So(new m("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Ah{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,1392);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.mr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.mr()}if(r)return d.gr();const a=i.value?.arrayValue?.values??[],o=s.value?.arrayValue?.values??[];for(const u of a){let c=!1;r=!1;for(const l of o){switch(pe(u)&&pe(l)?"EQ":je(u,l)){case"EQ":c=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:R(44613,{value:l,search:u})}if(c)break}if(!c)return d.newValue(J)}return d.newValue(he)}}class vh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,2680);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.mr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.mr()}if(r)return d.gr();const a=i.value?.arrayValue?.values??[],o=s.value?.arrayValue?.values??[];for(const u of o)for(const c of a)switch(pe(u)&&pe(c)?"EQ":je(u,c)){case"EQ":return d.newValue(he);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:R(60403,{value:u,search:c})}return r?d.gr():d.newValue(J)}}class Rh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,38605);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.gr();case"ARRAY":return d.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return d.mr()}}}class Vh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ph{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,1508);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.gr();case"BYTES":{const s=r.value?.bytesValue;if(typeof s=="string"){const i=W.fromBase64String(s).toUint8Array();return i.reverse(),d.newValue({bytesValue:W.fromUint8Array(i).toBase64()})}return d.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=r.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),a=Array.from(i,o=>o.segment).reverse();return d.newValue({stringValue:a.join("")})}default:return d.mr()}}}class bh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Sh{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ch{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,19400);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.gr();case"STRING":{const s=function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const l=a.codePointAt(u+1);l!==void 0&&l>=56320&&l<=57343?(o+=1,u++):o+=1}else o+=1;else o+=1;else{if(!(c<=1114111))return;o+=1,u++}}return o}(r.value.stringValue);return s===void 0?d.mr():d.newValue({integerValue:s})}default:return d.mr()}}}class xh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,8486);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const s=r.value?.bytesValue;return typeof s=="string"?d.newValue({integerValue:W.fromBase64String(s).toUint8Array().length}):d.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c>=55296&&c<=57343){if(!(c<=56319))return;{const l=a.codePointAt(u+1);if(l===void 0||!(l>=56320&&l<=57343))return;o+=4,u++}}else if(c<=127)o+=1;else if(c<=2047)o+=2;else if(c<=65535)o+=3;else{if(!(c<=1114111))return;o+=4,u++}}return o}(r.value?.stringValue);return s===void 0?d.mr():d.newValue({integerValue:s})}case"NULL":return d.gr();default:return d.mr()}}}class jt{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return d.mr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return d.mr()}return r?d.gr():this.Or(s.value?.stringValue,i.value?.stringValue)}}class Nh extends jt{Or(e,t){try{const r=function(a){let o="";for(let u=0;u<a.length;u++){const c=a.charAt(u);switch(c){case"_":o+=".";break;case"%":o+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":o+="\\"+c;break;default:o+=c}}return"^"+o+"$"}(t),s=fs.compile(r);return d.newValue({booleanValue:s.matches(e)})}catch(r){return Re(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),d.mr()}}}class kh extends jt{Or(e,t){try{const r=fs.compile(t);return d.newValue({booleanValue:r.test(e)})}catch{return Re(`Invalid regex pattern found in regex_contains: ${t}, returning error`),d.mr()}}}class Dh extends jt{Or(e,t){try{return d.newValue({booleanValue:fs.compile(t).matches(e)})}catch{return Re(`Invalid regex pattern found in regex_match: ${t}, returning error`),d.mr()}}}class Lh extends jt{Or(e,t){return d.newValue({booleanValue:e.includes(t)})}}class Oh extends jt{Or(e,t){return d.newValue({booleanValue:e.startsWith(t)})}}class Uh extends jt{Or(e,t){return d.newValue({booleanValue:e.endsWith(t)})}}class Mh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,29079);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return d.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return d.gr();default:return d.mr()}}}class Fh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,60487);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return d.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return d.gr();default:return d.mr()}}}class Bh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,28544);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return d.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return d.gr();default:return d.mr()}}}class qh{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>P(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return d.mr()}return i?d.gr():d.newValue({stringValue:s})}}class $h{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,4483);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return d.pr();case"MAP":break;default:return d.mr()}const s=P(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return d.mr();const i=r.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?d.pr():d.newValue(i)}}class Ls{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return d.mr()}const i=P(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return d.mr()}if(r)return d.gr();const a=Xr(s.value),o=Xr(i.value);if(a===void 0||o===void 0||a.values?.length!==o.values?.length)return d.mr();const u=this.Mr(a,o);return u===void 0||isNaN(u)?d.mr():d.newValue({doubleValue:u})}}class zh extends Ls{Mr(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return;let i=0,a=0,o=0;for(let c=0;c<r.length;c++){if(!tt(r[c])||!tt(s[c]))return;const l=ee(r[c]),h=ee(s[c]);i+=l*h,a+=l*l,o+=h*h}const u=Math.sqrt(a)*Math.sqrt(o);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class Gh extends Ls{Mr(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!tt(r[a])||!tt(s[a]))return;i+=ee(r[a])*ee(s[a])}return i}}class jh extends Ls{Mr(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!tt(r[a])||!tt(s[a]))return;const o=ee(r[a]),u=ee(s[a]);i+=Math.pow(o-u,2)}return Math.sqrt(i)}}class Qh{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,39044);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const s=Xr(r.value);return d.newValue({integerValue:s?.values?.length??0})}case"NULL":return d.gr();default:return d.mr()}}}const In=BigInt(-62135596800),An=BigInt(253402300799),lr=BigInt(1e3),Je=BigInt(1e6),Wh=In*lr,Kh=An*lr+BigInt(999),Hh=In*Je,Yh=An*Je+BigInt(999999);function Os(n){return n>=Hh&&n<=Yh}function Co(n){return n>=In&&n<=An}function vn(n,e){const t=BigInt(n);return!(t<In||t>An)&&!(e<0||e>=1e9)&&(t!==In||e===0)&&!(t===An&&e>999999999)}function xo(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Us(n){return BigInt(n.seconds)*Je+BigInt(Math.trunc(n.nanoseconds/1e3))}class Ms{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return d.gr();default:return d.mr()}}}class Xh extends Ms{toTimestamp(e){if(!Os(e))return d.mr();let t=Number(e/Je),r=Number(e%Je*BigInt(1e3));const s=xo(t,r);return t=s.seconds,r=s.nanos,vn(t,r)?d.newValue({timestampValue:{seconds:t,nanos:r}}):d.mr()}}class Jh extends Ms{toTimestamp(e){if(!function(a){return a>=Wh&&a<=Kh}(e))return d.mr();let t=Number(e/lr),r=Number(e%lr*BigInt(1e6));const s=xo(t,r);return t=s.seconds,r=s.nanos,vn(t,r)?d.newValue({timestampValue:{seconds:t,nanos:r}}):d.mr()}}class Zh extends Ms{toTimestamp(e){if(!Co(e))return d.mr();const t=Number(e);return d.newValue({timestampValue:{seconds:t,nanos:0}})}}class Fs{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=P(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return d.gr();default:return d.mr()}const s=Rs(r.value.timestampValue);return vn(s.seconds,s.nanoseconds)?this.Nr(s):d.mr()}}class ed extends Fs{Nr(e){const t=Us(e);return Os(t)?d.newValue({integerValue:`${t.toString()}`}):d.mr()}}class td extends Fs{Nr(e){const t=Us(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?d.newValue({integerValue:r.toString()}):d.newValue({integerValue:(r-BigInt(1)).toString()})}}class nd extends Fs{Nr(e){const t=BigInt(e.seconds);return Co(t)?d.newValue({integerValue:t.toString()}):d.mr()}}class No{constructor(e){this.expr=e}evaluate(e,t){A(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=P(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return d.mr()}const i=P(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(D){switch(D){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return d.mr();break;case"NULL":r=!0;break;default:return d.mr()}const o=P(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":r=!0;break;default:return d.mr()}if(r)return d.gr();const u=BigInt(o.value.integerValue);let c;try{switch(a){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return d.mr()}if(a!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Lr(a)))return d.mr()}catch(C){return Re(`Error during timestamp arithmetic: ${C}`),d.mr()}const l=Rs(s.value.timestampValue);if(!vn(l.seconds,l.nanoseconds))return d.mr();const h=Us(l),f=this.Br(h,c);if(!Os(f))return d.mr();const g=Number(f/Je),y=f%Je,V=Number((y<0?y+Je:y)*BigInt(1e3)),I=y<0?g-1:g;return vn(I,V)?d.newValue({timestampValue:{seconds:I,nanos:V}}):d.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class rd extends No{Br(e,t){return e+t}}class sd extends No{Br(e,t){return e-t}}function Rn(n){if((n=bo(n))instanceof $t)return`fld(${n.fieldName})`;if(n instanceof zt)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof j?`ref(${t.path})`:t instanceof le?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof m)return`fn(${n.name},[${n.params.map(Rn).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(Rn).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function id(n){if(n instanceof Ro)return`${n._name}(${zn(n.fields)})`;if(n instanceof Vo){let e=`${n._name}(${zn(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${zn(n.groups)})`),e}if(n instanceof Po)return`${n._name}(${zn(n.groups)})`;if(n instanceof Pr)return`${n._name}(${n.hr})`;if(n instanceof br)return`${n._name}(${n.collectionId})`;if(n instanceof Cs)return`${n._name}()`;if(n instanceof xs)return`${n._name}(${n.Tr.sort()})`;if(n instanceof Sr)return`${n._name}(${Rn(n.condition)})`;if(n instanceof gt)return`${n._name}(${n.limit})`;if(n instanceof Be)return`${n._name}(${function(t){return t.map(r=>`${Rn(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function zn(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${Rn(t)}`).join(",")}`}function $e(n){return n.stages.map(e=>id(e)).join("|")}function ko(n,e){return $e(n)===$e(e)}function Y(n){return n instanceof ae}function Bi(n){return Y(n)?$e(n):sn(n)}function Do(n){return Y(n)?$e(n):function(t){return`${qa(xe(t))}|lt:${t.limitType}`}(n)}function Nr(n,e){return n instanceof ae&&e instanceof ae?ko(n,e):!(n instanceof ae&&!(e instanceof ae)||!(n instanceof ae)&&e instanceof ae)&&vc(n,e)}function Lo(n){return ut(n)?$e(n):qa(n)}function Oo(n,e){return n instanceof ae&&e instanceof ae?ko(n,e):!(n instanceof ae&&!(e instanceof ae)||!(n instanceof ae)&&e instanceof ae)&&$a(n,e)}function ad(n,e){const t=function(s){let i=!1;const a=[];for(const o of s)if(o instanceof Be)if(i=!0,o.orderings.some(u=>u.expr instanceof $t&&u.expr.fieldName===Pe))a.push(o);else{const u=o.orderings.map(c=>c);u.push(Yn(Pe).ascending()),a.push(new Be(u,{}))}else o instanceof gt&&(i||(a.push(new Be([Yn(Pe).ascending()],{})),i=!0)),a.push(o);return i||a.push(new Be([Yn(Pe).ascending()],{})),a}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new ae(n.userDataReader.serializer,t,e)}/**
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
 */class od{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sc(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=nn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=nn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wa();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(s.key)?null:o;const u=ka(a,o);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&kt(this.mutations,e.mutations,(t,r)=>gi(t,r))&&kt(this.baseMutations,e.baseMutations,(t,r)=>gi(t,r))}}class Bs{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){A(e.mutations.length===r.length,58842,{Ur:e.mutations.length,kr:r.length});let s=function(){return Sc}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Bs(e,t,r,s)}}/**
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
 */const Uo="";function ud(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qi(e)),e=cd(n.get(t),e);return qi(e)}function cd(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Uo:t+="";break;default:t+=i}}return t}function qi(n){return n+Uo+""}/**
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
 */class ld{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qe{constructor(e,t,r,s,i=b.min(),a=b.min(),o=W.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=u}withSequenceNumber(e){return new qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hd{constructor(e){this.$r=e}}function dd(n){const e=Qc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(e,e.limit,"L"):e}/**
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
 */class fd{constructor(){this.Zi=new md}addToCollectionParentIndex(e,t){return this.Zi.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}deleteAllFieldIndexes(e){return _.resolve()}createTargetIndexes(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(nt.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(nt.min())}updateCollectionGroup(e,t,r){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class md{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Q(O.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Q(O.comparator)).toArray()}}/**
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
 */class it{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new it(0)}static bs(){return new it(-1)}}// Copyright 2024 Google LLC* @license
function Mo(n,e){let t=e;for(const r of n.stages)t=pd({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function kr(n,e){return Mo(n,[e]).length>0}function _d(n,e){return Y(n)?kr(n,e):Ir(n,e)}function pd(n,e,t){if(e instanceof Pr)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&`/${o.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof Sr)return function(s,i,a){return a.filter(o=>{const u=cn(P(i.condition).evaluate(s,o));return u!==void 0&&we(u,he)})}(n,e,t);if(e instanceof br)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&o.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof Cs)return function(s,i,a){return a.filter(o=>o.isFoundDocument())}(0,0,t);if(e instanceof xs)return function(s,i,a){return a.filter(o=>o.isFoundDocument()&&i.Pr.has(o.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof gt)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof Be)return function(s,i,a){const o=i.orderings.map(u=>({Ms:P(u.expr),direction:u.direction}));return[...a].sort((u,c)=>{for(const{Ms:l,direction:h}of o){const f=cn(l.evaluate(s,u)),g=cn(l.evaluate(s,c)),y=de(f??Lt,g??Lt);if(y!==0)return h==="ascending"?y:-y}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function is(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Be)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=cn(P(s.expr).evaluate({serializer:n.serializer},t)),a=cn(P(s.expr).evaluate({serializer:n.serializer},r)),o=de(i||Lt,a||Lt);if(o!==0)return s.direction==="ascending"?o:-o}return 0}}function zr(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof gt)return{limit:t.limit}}}/**
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
 */class gd{constructor(){this.changes=new It(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?_.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Td{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&nn(r.mutation,s,Ae.empty(),U.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,t,r=x()){const s=We();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=bt();return i.forEach((o,u)=>{a=a.insert(o,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=We();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,x()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,o)=>{t.set(a,o)})})}computeViews(e,t,r,s){let i=ce();const a=an(),o=function(){return an()}();return t.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof wt)?i=i.insert(c.key,c):l!==void 0?(a.set(c.key,l.mutation.getFieldMask()),nn(l.mutation,c,l.mutation.getFieldMask(),U.now())):a.set(c.key,Ae.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>a.set(c,l)),t.forEach((c,l)=>o.set(c,new yd(l,a.get(c)??null))),o))}recalculateAndSaveOverlays(e,t){const r=an();let s=new B((a,o)=>a-o),i=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const o of a)o.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=r.get(u)||Ae.empty();l=o.applyToLocalView(c,l),r.set(u,l);const h=(s.get(o.batchId)||x()).add(u);s=s.insert(o.batchId,h)})}).next(()=>{const a=[],o=s.getReverseIterator();for(;o.hasNext();){const u=o.getNext(),c=u.key,l=u.value,h=Wa();l.forEach(f=>{if(!i.has(f)){const g=ka(t.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,h))}return _.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Y(t)?this.getDocumentsMatchingPipeline(e,t,r,s):wc(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ic(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):_.resolve(We());let o=yn,u=i;return a.next(c=>_.forEach(c,(l,h)=>(o<h.largestBatchId&&(o=h.largestBatchId),i.get(l)?_.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,x())).next(l=>({batchId:o,changes:Qa(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(r=>{let s=bt();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=bt();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,u=>{const c=function(h,f){return new wr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(l=>{l.forEach((h,f)=>{a=a.insert(h,f)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,o=>Ir(t,o)))}getDocumentsMatchingPipeline(e,t,r,s){if(Xe(t)==="collection_group"){const i=ks(t);let a=bt();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,u=>{const c=function(h,f){const g=h.stages.map(y=>y instanceof br?new Pr(f.canonicalString(),{}):y);return new ae(h.serializer,g)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(l=>{l.forEach((h,f)=>{a=a.insert(h,f)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,Xe(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let o=x();for(const u of ss(t))o=o.add(v.fromPath(u));return this.remoteDocumentCache.getEntries(e,o);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new w("invalid-argument",`Invalid pipeline source to execute offline: ${$e(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,o=>kr(t,o)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const o=a.getKey();t.get(o)===null&&(t=t.insert(o,re.newInvalidDocument(o)))});let s=bt();return t.forEach((i,a)=>{const o=e.get(i);o!==void 0&&nn(o.mutation,a,Ae.empty(),U.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(Xe(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,O.fromString(Cr(t)),r);case"collection_group":throw new w("invalid-argument",`Unexpected collection group pipeline: ${$e(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,ss(t).map(s=>v.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new w("invalid-argument",`Failed to get overlays for pipeline: ${$e(t)}`)}}}/**
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
 */class Ed{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return _.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(t)),_.resolve()}getNamedQuery(e,t){return _.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:dd(s.bundledQuery),readTime:Ne(s.readTime)}}(t)),_.resolve()}}/**
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
 */class wd{constructor(){this.overlays=new B(v.comparator),this.Gs=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const r=We();return _.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=We();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),_.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Zr(e,t,i)}),_.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Gs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(r)),_.resolve()}getOverlaysForCollection(e,t,r){const s=We(),i=t.length+1,a=new v(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const u=o.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return _.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new B((c,l)=>c-l);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=We(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const o=We(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>o.set(c,l)),!(o.size()>=s)););return _.resolve(o)}Zr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Gs.get(s.largestBatchId).delete(r.key);this.Gs.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ld(t,r));let i=this.Gs.get(t);i===void 0&&(i=x(),this.Gs.set(t,i)),this.Gs.set(t,i.add(r.key))}}/**
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
 */class Id{constructor(){this.sessionToken=W.EMPTY_BYTE_STRING}getSessionToken(e){return _.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,_.resolve()}}/**
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
 */class qs{constructor(){this.zs=new Q(X.js),this.Hs=new Q(X.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const r=new X(e,t);this.zs=this.zs.add(r),this.Hs=this.Hs.add(r)}Ys(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Zs(new X(e,t))}Xs(e,t){e.forEach(r=>this.removeReference(r,t))}e_(e){const t=new v(new O([])),r=new X(t,e),s=new X(t,e+1),i=[];return this.Hs.forEachInRange([r,s],a=>{this.Zs(a),i.push(a.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new v(new O([])),r=new X(t,e),s=new X(t,e+1);let i=x();return this.Hs.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new X(e,0),r=this.zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class X{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return v.comparator(e.key,t.key)||N(e.r_,t.r_)}static Js(e,t){return N(e.r_,t.r_)||v.comparator(e.key,t.key)}}/**
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
 */class Ad{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Q(X.js)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new od(i,t,r,s);this.mutationQueue.push(a);for(const o of s)this.i_=this.i_.add(new X(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return _.resolve(a)}lookupMutationBatch(e,t){return _.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.__(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?gs:this.Gr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new X(t,0),s=new X(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([r,s],a=>{const o=this.s_(a.r_);i.push(o)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(N);return t.forEach(s=>{const i=new X(s,0),a=new X(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,a],o=>{r=r.add(o.r_)})}),_.resolve(this.o_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;v.isDocumentKey(i)||(i=i.child(""));const a=new X(new v(i),0);let o=new Q(N);return this.i_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(o=o.add(u.r_)),!0)},a),_.resolve(this.o_(o))}o_(e){const t=[];return e.forEach(r=>{const s=this.s_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){A(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.i_;return _.forEach(t.mutations,s=>{const i=new X(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=r})}Hr(e){}containsKey(e,t){const r=new X(t,0),s=this.i_.firstAfterOrEqual(r);return _.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vd{constructor(e){this.u_=e,this.docs=function(){return new B(v.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.u_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return _.resolve(r?r.document.mutableCopy():re.newInvalidDocument(t))}getEntries(e,t){let r=ce();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),_.resolve(r)}getAllEntries(e){let t=ce();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),_.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;Y(t)?(i=O.fromString(Cr(t)),a=l=>kr(t,l)):(i=t.path,a=l=>Ir(t,l));let o=ce();const u=new v(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||yc(gc(h),r)<=0||(s.has(h.key)||a(h))&&(o=o.insert(h.key,h.mutableCopy()))}return _.resolve(o)}getAllFromCollectionGroup(e,t,r,s){R(9500)}c_(e,t){return _.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Rd(this)}getSize(e){return _.resolve(this.size)}}class Rd extends gd{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(r)}),_.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
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
 */class Vd{constructor(e){this.persistence=e,this.l_=new It(t=>Lo(t),Oo),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.E_=0,this.h_=new qs,this.targetCount=0,this.T_=it.ws()}forEachTarget(e,t){return this.l_.forEach((r,s)=>t(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.E_&&(this.E_=t),_.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new it(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.Ds(t),_.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.l_.forEach((a,o)=>{o.sequenceNumber<=t&&r.get(o.targetId)===null&&(this.l_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const r=this.l_.get(t)||null;return _.resolve(r)}addMatchingKeys(e,t,r){return this.h_.Ys(t,r),_.resolve()}removeMatchingKeys(e,t,r){this.h_.Xs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),_.resolve()}getMatchingKeysForTargetId(e,t){const r=this.h_.n_(t);return _.resolve(r)}containsKey(e,t){return _.resolve(this.h_.containsKey(t))}}/**
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
 */class Fo{constructor(e,t){this.P_={},this.overlays={},this.I_=new vr(0),this.R_=!1,this.R_=!0,this.A_=new Id,this.referenceDelegate=e(this),this.V_=new Vd(this),this.indexManager=new fd,this.remoteDocumentCache=function(s){return new vd(s)}(r=>this.referenceDelegate.d_(r)),this.serializer=new hd(t),this.f_=new Ed(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.P_[e.toKey()];return r||(r=new Ad(t,this.referenceDelegate),this.P_[e.toKey()]=r),r}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);const s=new Pd(this.I_.next());return this.referenceDelegate.m_(),r(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return _.or(Object.values(this.P_).map(r=>()=>r.containsKey(e,t)))}}class Pd extends Tl{constructor(e){super(),this.currentSequenceNumber=e}}class $s{constructor(e){this.persistence=e,this.y_=new qs,this.w_=null}static b_(e){return new $s(e)}get S_(){if(this.w_)return this.w_;throw R(60996)}addReference(e,t,r){return this.y_.addReference(r,t),this.S_.delete(r.toString()),_.resolve()}removeReference(e,t,r){return this.y_.removeReference(r,t),this.S_.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),_.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.S_,r=>{const s=v.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,b.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return _.or([()=>_.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class hr{constructor(e,t){this.persistence=e,this.D_=new It(r=>ud(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Rl(this,t)}static b_(e,t){return new hr(e,t)}m_(){}p_(e){return _.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Cs(e){let t=0;return this.sr(e,r=>{t++}).next(()=>t)}sr(e,t){return _.forEach(this.D_,(r,s)=>this.Os(e,r,s).next(i=>i?_.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,a=>this.Os(e,a,t).next(o=>{o||(r++,i.removeEntry(a,b.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),_.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),_.resolve()}removeReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),_.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),_.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qn(e.data.value)),t}Os(e,t,r){return _.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return _.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zs{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vo=r,this.fo=s}static mo(e,t){let r=x(),s=x();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zs(e,t.fromCache,r,s)}}/**
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
 */function bd(n,e){return v.comparator(n.key,e.key)}/**
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
 */class Sd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cd{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return Nu()?8:El(ku())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Do(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Sd;return this.xo(e,t,a).next(o=>{if(i.result=o,this.yo)return this.Co(e,t,a,o.size)})}).next(()=>i.result)}Co(e,t,r,s){return Y(t)?_.resolve():r.documentReadCount<this.wo?(Vt()<=Fe.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),_.resolve()):(Vt()<=Fe.DEBUG&&E("QueryEngine","Query:",sn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.bo*s?(Vt()<=Fe.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xe(t))):_.resolve())}vo(e,t){if(Y(t))return _.resolve(null);let r=t;if(Ai(r))return _.resolve(null);let s=xe(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Zr(r,null,"F"),s=xe(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const o=x(...a);return this.So.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fo(r,u);return this.Oo(r,l,o,c.readTime)?this.vo(e,Zr(r,null,"F")):this.Mo(e,l,r,c)}))})))}Do(e,t,r,s){return(Y(t)?function(a){for(const o of a.stages){if(o instanceof gt||o instanceof Fi)return!1;if(o instanceof Sr){if(o.condition instanceof Io&&o.condition._expr.name==="exists"&&o.condition._expr.params[0]instanceof $t&&o.condition._expr.params[0].fieldName===Pe)continue;return!1}}return!0}(t):Ai(t))||s.isEqual(b.min())?_.resolve(null):this.So.getDocuments(e,r).next(i=>{const a=this.Fo(t,i);return this.Oo(t,a,r,s)?_.resolve(null):(Vt()<=Fe.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bi(t)),this.Mo(e,a,t,pc(s,yn)).next(o=>o))})}Fo(e,t){let r,s;return Y(e)?(r=new Q(bd),s=i=>kr(e,i)):(r=new Q(As(e)),s=i=>Ir(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Oo(e,t,r,s){if(Y(e))return function(o){return o.stages.some(u=>u instanceof gt||u instanceof Fi)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,r){return Vt()<=Fe.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Bi(t)),this.So.getDocumentsMatchingQuery(e,t,nt.min(),r)}Mo(e,t,r,s){return this.So.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Gs="LocalStore",xd=3e8;class Nd{constructor(e,t,r,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new B(N),this.Bo=new It(i=>Lo(i),Oo),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(r)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Td(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function kd(n,e,t,r){return new Nd(n,e,t,r)}async function Bo(n,e){const t=S(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],o=[];let u=x();for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(r,u).next(c=>({$o:c,removedBatchIds:a,addedBatchIds:o}))})})}function Dd(n,e){const t=S(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(o,u,c,l){const h=c.batch,f=h.keys();let g=_.resolve();return f.forEach(y=>{g=g.next(()=>l.getEntry(u,y)).next(V=>{const I=c.docVersions.get(y);A(I!==null,48541),V.version.compareTo(I)<0&&(h.applyToRemoteDocument(V,c),V.isValidDocument()&&(V.setReadTime(c.commitVersion),l.addEntry(V)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(u,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let u=x();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(u=u.add(o.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function qo(n){const e=S(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function Ld(n,e){const t=S(n),r=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const o=[];e.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;o.push(t.V_.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.V_.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(W.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),function(V,I,C){return V.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=xd?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,l)&&o.push(t.V_.updateTargetData(i,g))});let u=ce(),c=x();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),o.push(Od(i,a,e.documentUpdates).next(l=>{u=l.Ko,c=l.Qo})),!r.isEqual(b.min())){const l=t.V_.getLastRemoteSnapshotVersion(i).next(h=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,r));o.push(l)}return _.waitFor(o).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.Lo=s,i))}function Od(n,e,t){let r=x(),s=x();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ce();return t.forEach((o,u)=>{const c=i.get(o);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(o)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(o,u.readTime),a=a.insert(o,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),a=a.insert(o,u)):E(Gs,"Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",u.version)}),{Ko:a,Qo:s}})}function Ud(n,e){const t=S(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=gs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Md(n,e){const t=S(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.V_.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):t.V_.allocateTargetId(r).next(a=>(s=new qe(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.V_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Lo.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(r.targetId,r),t.Bo.set(e,r.targetId)),r})}async function as(n,e,t){const r=S(n),s=r.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qt(a))throw a;E(Gs,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Lo=r.Lo.remove(e),r.Bo.delete(s.target)}function $i(n,e,t){const r=S(n);let s=b.min(),i=x();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,c,l){const h=S(u),f=h.Bo.get(l);return f!==void 0?_.resolve(h.Lo.get(f)):h.V_.getTargetData(c,l)}(r,a,Y(e)?e:xe(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,r.V_.getMatchingKeysForTargetId(a,o.targetId).next(u=>{i=u})}).next(()=>r.No.getDocumentsMatchingQuery(a,e,t?s:b.min(),t?i:x())).next(o=>(Fd(r,o),{documents:o,Wo:i})))}function Fd(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Uo.get(s)||b.min();r.readTime.compareTo(i)>0&&n.Uo.set(s,r.readTime)})}/**
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
 */class Bd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(Ge(t),this.Xo=!1):E("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
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
 */const Ue="RemoteStore";class qd{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new it(1e3),this.ca=new it(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(a=>{r.enqueueAndForget(async()=>{vt(this)&&(E(Ue,"Restarting streams for network reachability change."),await async function(u){const c=S(u);c.la.add(4),await Dn(c),c.Ta.set("Unknown"),c.la.delete(4),await Dr(c)}(this))})}),this.Ta=new Bd(r,s)}}async function Dr(n){if(vt(n))for(const e of n.Ea)await e(!0)}async function Dn(n){for(const e of n.Ea)await e(!1)}function os(n,e){return n.oa.get(e)||void 0}function $o(n,e){const t=S(n),r=os(t,e.targetId);if(r!==void 0&&t._a.has(r))return;const s=function(o,u){const c=os(o,u);c!==void 0&&o.aa.delete(c);const l=function(f,g){return g%2!=0?f.ca.next():f.ua.next()}(o,u);return o.oa.set(u,l),o.aa.set(l,u),l}(t,e.targetId);E(Ue,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new qe(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),Ks(t)?Ws(t):Qt(t).Yt()&&Qs(t,i)}function js(n,e){const t=S(n),r=Qt(t),s=os(t,e);E(Ue,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),r.Yt()&&zo(t,s),t._a.size===0&&(r.Yt()?r.en():vt(t)&&t.Ta.set("Unknown"))}function Qs(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void E(Ue,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Qt(n).Pn(e)}function zo(n,e){n.Pa.J(e),Qt(n).In(e)}function Ws(n){n.Pa=new Lc({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):x()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),Qt(n).start(),n.Ta.ea()}function Ks(n){return vt(n)&&!Qt(n).Jt()&&n._a.size>0}function vt(n){return S(n).la.size===0}function Go(n){n.Pa=void 0}async function $d(n){n.Ta.set("Online")}async function zd(n){n._a.forEach((e,t)=>{Qs(n,e)})}async function Gd(n,e){Go(n),Ks(n)?(n.Ta.ra(e),Ws(n)):n.Ta.set("Unknown")}async function jd(n,e,t){if(n.Ta.set("Online"),e instanceof Ha&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const o of i.targetIds){if(s._a.has(o)){const u=s.aa.get(o);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.oa.delete(u),s.aa.delete(o)),s._a.delete(o)}s.Pa.removeTarget(o)}}(n,e)}catch(r){E(Ue,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dr(n,r)}else if(e instanceof Kn?n.Pa._e(e):e instanceof Ka?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(b.min()))try{const r=await qo(n.localStore);t.compareTo(r)>=0&&await function(i,a){const o=i.Pa.fe(a);o.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=i._a.get(l);h&&i._a.set(l,h.withResumeToken(c.resumeToken,a))}}),o.targetMismatches.forEach((c,l)=>{const h=i._a.get(c);if(!h)return;i._a.set(c,h.withResumeToken(W.EMPTY_BYTE_STRING,h.snapshotVersion)),zo(i,c);const f=new qe(h.target,c,l,h.sequenceNumber);Qs(i,f)});const u=function(l,h){const f=new Map;h.targetChanges.forEach((y,V)=>{const I=l.aa.get(V);I!==void 0&&f.set(I,y)});let g=new B(N);return h.targetMismatches.forEach((y,V)=>{const I=l.aa.get(y);I!==void 0&&(g=g.insert(I,V))}),new Cn(h.snapshotVersion,f,g,h.documentUpdates,h.augmentedDocumentUpdates,h.resolvedLimboDocuments)}(i,o);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){E(Ue,"Failed to raise snapshot:",r),await dr(n,r)}}async function dr(n,e,t){if(!qt(e))throw e;n.la.add(1),await Dn(n),n.Ta.set("Offline"),t||(t=()=>qo(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E(Ue,"Retrying IndexedDB access"),await t(),n.la.delete(1),await Dr(n)})}function jo(n,e){return e().catch(t=>dr(n,t,e))}async function Lr(n){const e=S(n),t=at(e);let r=e.sa.length>0?e.sa[e.sa.length-1].batchId:gs;for(;Qd(e);)try{const s=await Ud(e.localStore,r);if(s===null){e.sa.length===0&&t.en();break}r=s.batchId,Wd(e,s)}catch(s){await dr(e,s)}Qo(e)&&Wo(e)}function Qd(n){return vt(n)&&n.sa.length<10}function Wd(n,e){n.sa.push(e);const t=at(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function Qo(n){return vt(n)&&!at(n).Jt()&&n.sa.length>0}function Wo(n){at(n).start()}async function Kd(n){at(n).fn()}async function Hd(n){const e=at(n);for(const t of n.sa)e.An(t.mutations)}async function Yd(n,e,t){const r=n.sa.shift(),s=Bs.from(r,e,t);await jo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lr(n)}async function Xd(n,e){e&&at(n).Rn&&await async function(r,s){if(function(a){return Pc(a)&&a!==p.ABORTED}(s.code)){const i=r.sa.shift();at(r).Xt(),await jo(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lr(r)}}(n,e),Qo(n)&&Wo(n)}async function zi(n,e){const t=S(n);t.asyncQueue.verifyOperationInProgress(),E(Ue,"RemoteStore received new credentials");const r=vt(t);t.la.add(3),await Dn(t),r&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Dr(t)}async function Jd(n,e){const t=S(n);e?(t.la.delete(2),await Dr(t)):e||(t.la.add(2),await Dn(t),t.Ta.set("Unknown"))}function Qt(n){return n.Ia||(n.Ia=function(t,r,s){const i=S(t);return i.pn(),new hl(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:$d.bind(null,n),Et:zd.bind(null,n),Tt:Gd.bind(null,n),Tn:jd.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ia.Xt(),Ks(n)?Ws(n):n.Ta.set("Unknown")):(await n.Ia.stop(),Go(n))})),n.Ia}function at(n){return n.Ra||(n.Ra=function(t,r,s){const i=S(t);return i.pn(),new dl(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:Kd.bind(null,n),Tt:Xd.bind(null,n),Vn:Hd.bind(null,n),dn:Yd.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ra.Xt(),await Lr(n)):(await n.Ra.stop(),n.sa.length>0&&(E(Ue,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))})),n.Ra}/**
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
 */class Ko{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Hs{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new He,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,o=new Hs(e,t,a,s,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ys(n,e){if(Ge("AsyncQueue",`${e}: ${n}`),qt(n))return new w(p.UNAVAILABLE,`${e}: ${n}`);throw n}class Gi{constructor(){this.activeTargetIds=Nc()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zd{constructor(){this.fu=new Gi,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,r){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new Gi,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Gr(){return typeof document<"u"?document:null}/**
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
 */class dt{static emptySet(e){return new dt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||v.comparator(t.key,r.key):(t,r)=>v.comparator(t.key,r.key),this.keyedMap=bt(),this.sortedSet=new B(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new dt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ji{constructor(){this.pu=new B(v.comparator)}track(e){const t=e.doc.key,r=this.pu.get(t);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(t,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(t):e.type===1&&r.type===2?this.pu=this.pu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):R(63341,{we:e,gu:r}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Mt{constructor(e,t,r,s,i,a,o,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(o=>{a.push({type:0,doc:o})}),new Mt(e,t,dt.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ef{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class tf{constructor(){this.queries=Qi(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,r){const s=S(t),i=s.queries;s.queries=Qi(),i.forEach((a,o)=>{for(const u of o.bu)u.onError(r)})})(this,new w(p.ABORTED,"Firestore shutting down"))}}function Qi(){return new It(n=>Do(n),Nr)}async function Ho(n,e){const t=S(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(r=2):(i=new ef,r=e.vu()?0:1);try{switch(r){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const o=Ys(a,`Initialization of query '${Y(e.query)?$e(e.query):sn(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Xs(t)}async function Yo(n,e){const t=S(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.bu.indexOf(e);a>=0&&(i.bu.splice(a,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nf(n,e){const t=S(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const o of a.bu)o.Cu(s)&&(r=!0);a.wu=s}}r&&Xs(t)}function rf(n,e,t){const r=S(n),s=r.queries.get(e);if(s)for(const i of s.bu)i.onError(t);r.queries.delete(e)}function Xs(n){n.Du.forEach(e=>{e.next()})}var us;(function(n){n.Default="default",n.Cache="cache"})(us||(us={}));class Xo{constructor(e,t,r){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=r||{}}Cu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Mt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==us.Cache}}/**
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
 */class Jo{constructor(e){this.key=e}}class Zo{constructor(e){this.key=e}}class sf{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=x(),this.mutatedKeys=x(),this.Ju=Y(e)?is(e):As(e),this.Yu=new dt(this.Ju)}get Zu(){return this.zu}Xu(e,t){const r=t?t.ec:new ji,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const[u,c]=this.tc(this.query,s);e.inorderTraversal((h,f)=>{const g=s.get(h),y=_d(this.query,f)?f:null,V=!!g&&this.mutatedKeys.has(g.key),I=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;g&&y?g.data.isEqual(y.data)?V!==I&&(r.track({type:3,doc:y}),C=!0):this.nc(g,y)||(r.track({type:2,doc:y}),C=!0,(u&&this.Ju(y,u)>0||c&&this.Ju(y,c)<0)&&(o=!0)):!g&&y?(r.track({type:0,doc:y}),C=!0):g&&!y&&(r.track({type:1,doc:g}),C=!0,(u||c)&&(o=!0)),C&&(y?(a=a.add(y),i=I?i.add(h):i.delete(h)):(a=a.delete(h),i=i.delete(h)))});const l=this.rc(this.query);if(l)if(Y(this.query)){const h=[];a.forEach(y=>h.push(y));const f=Mo(this.query,h);let g=new dt(is(this.query));for(const y of f)g=g.add(y);a.forEach(y=>{g.has(y.key)||(i=i.delete(y.key),r.track({type:1,doc:y}))}),a=g}else{const h=this.sc(this.query);for(;a.size>l;){const f=h==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}}return{Yu:a,ec:r,Oo:o,mutatedKeys:i}}rc(e){return Y(e)?zr(e)?.limit:e.limit||void 0}sc(e){if(Y(e)){const t=zr(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){if(Y(e)){const r=zr(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const a=e.ec.yu();a.sort((l,h)=>function(g,y){const V=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R(20277,{we:I})}};return V(g)-V(y)}(l.type,h.type)||this.Ju(l.doc,h.doc)),this._c(r),s=s??!1;const o=t&&!s?this.oc():[],u=this.Hu.size===0&&this.current&&!s?1:0,c=u!==this.ju;return this.ju=u,a.length!==0||c?{snapshot:new Mt(this.query,e.Yu,i,a,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ac:o}:{ac:o}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new ji,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=x(),this.Yu.forEach(r=>{this.uc(r.key)&&(this.Hu=this.Hu.add(r.key))});const t=[];return e.forEach(r=>{this.Hu.has(r)||t.push(new Zo(r))}),this.Hu.forEach(r=>{e.has(r)||t.push(new Jo(r))}),t}cc(e){this.zu=e.Wo,this.Hu=x();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Mt.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Js="SyncEngine";class af{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class of{constructor(e){this.key=e,this.Ec=!1}}class uf{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hc={},this.Tc=new It(o=>Do(o),Nr),this.Pc=new Map,this.Ic=new Set,this.Rc=new B(v.comparator),this.Ac=new Map,this.Vc=new qs,this.dc={},this.fc=new Map,this.mc=it.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function cf(n,e,t=!0){const r=iu(n);let s;const i=r.Tc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await eu(r,e,t,!0),s}async function lf(n,e){const t=iu(n);await eu(t,e,!0,!1)}async function eu(n,e,t,r){const s=await Md(n.localStore,Y(e)?e:xe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let o;return r&&(o=await hf(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&$o(n.remoteStore,s),o}async function hf(n,e,t,r,s){n.yc=(h,f,g)=>async function(V,I,C,D){let L=I.view.Xu(C);L.Oo&&(L=await $i(V.localStore,I.query,!1).then(({documents:Qe})=>I.view.Xu(Qe,L)));const M=D&&D.targetChanges.get(I.targetId),Me=D&&D.targetMismatches.get(I.targetId)!=null,Ie=I.view.applyChanges(L,V.isPrimaryClient,M,Me);return Ki(V,I.targetId,Ie.ac),Ie.snapshot}(n,h,f,g);const i=await $i(n.localStore,e,!0),a=new sf(e,i.Wo),o=a.Xu(i.documents),u=xn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=a.applyChanges(o,n.isPrimaryClient,u);Ki(n,t,c.ac);const l=new af(e,t,a);return n.Tc.set(e,l),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),c.snapshot}async function df(n,e,t){const r=S(n),s=r.Tc.get(e),i=r.Pc.get(s.targetId);if(i.length>1)return r.Pc.set(s.targetId,i.filter(a=>!Nr(a,e))),void r.Tc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await as(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&js(r.remoteStore,s.targetId),cs(r,s.targetId)}).catch(Bt)):(cs(r,s.targetId),await as(r.localStore,s.targetId,!0))}async function ff(n,e){const t=S(n),r=t.Tc.get(e),s=t.Pc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),js(t.remoteStore,r.targetId))}async function mf(n,e,t){const r=wf(n);try{const s=await function(a,o){const u=S(a),c=U.now(),l=o.reduce((g,y)=>g.add(y.key),x());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=ce(),V=x();return u.ko.getEntries(g,l).next(I=>{y=I,y.forEach((C,D)=>{D.isValidDocument()||(V=V.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,y)).next(I=>{h=I;const C=[];for(const D of o){const L=ic(D,h.get(D.key).overlayedDocument);L!=null&&C.push(new wt(D.key,L,ba(L.value.mapValue),ve.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,C,o)}).next(I=>{f=I;const C=I.applyToLocalDocumentSet(h,V);return u.documentOverlayCache.saveOverlays(g,I.batchId,C)})}).then(()=>({batchId:f.batchId,changes:Qa(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,o,u){let c=a.dc[a.currentUser.toKey()];c||(c=new B(N)),c=c.insert(o,u),a.dc[a.currentUser.toKey()]=c}(r,s.batchId,t),await Ln(r,s.changes),await Lr(r.remoteStore)}catch(s){const i=Ys(s,"Failed to persist write");t.reject(i)}}async function tu(n,e){const t=S(n);try{const r=await Ld(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ac.get(i);a&&(A(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Ec=!0:s.modifiedDocuments.size>0?A(a.Ec,14607):s.removedDocuments.size>0&&(A(a.Ec,42227),a.Ec=!1))}),await Ln(t,r,e)}catch(r){await Bt(r)}}function Wi(n,e,t){const r=S(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tc.forEach((i,a)=>{const o=a.view.xu(e);o.snapshot&&s.push(o.snapshot)}),function(a,o){const u=S(a);u.onlineState=o;let c=!1;u.queries.forEach((l,h)=>{for(const f of h.bu)f.xu(o)&&(c=!0)}),c&&Xs(u)}(r.eventManager,e),s.length&&r.hc.Tn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _f(n,e,t){const r=S(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ac.get(e),i=s&&s.key;if(i){let a=new B(v.comparator);a=a.insert(i,re.newNoDocument(i,b.min()));const o=x().add(i),u=new Cn(b.min(),new Map,new B(N),a,ce(),o);await tu(r,u),r.Rc=r.Rc.remove(i),r.Ac.delete(e),Zs(r)}else await as(r.localStore,e,!1).then(()=>cs(r,e,t)).catch(Bt)}async function pf(n,e){const t=S(n),r=e.batch.batchId;try{const s=await Dd(t.localStore,e);ru(t,r,null),nu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ln(t,s)}catch(s){await Bt(s)}}async function gf(n,e,t){const r=S(n);try{const s=await function(a,o){const u=S(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,o).next(h=>(A(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,e);ru(r,e,t),nu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ln(r,s)}catch(s){await Bt(s)}}function nu(n,e){(n.fc.get(e)||[]).forEach(t=>{t.resolve()}),n.fc.delete(e)}function ru(n,e,t){const r=S(n);let s=r.dc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.dc[r.currentUser.toKey()]=s}}function cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pc.get(e))n.Tc.delete(r),t&&n.hc.wc(r,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach(r=>{n.Vc.containsKey(r)||su(n,r)})}function su(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(js(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),Zs(n))}function Ki(n,e,t){for(const r of t)r instanceof Jo?(n.Vc.addReference(r.key,e),yf(n,r)):r instanceof Zo?(E(Js,"Document no longer in limbo: "+r.key),n.Vc.removeReference(r.key,e),n.Vc.containsKey(r.key)||su(n,r.key)):R(19791,{bc:r})}function yf(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(r)||(E(Js,"New document in limbo: "+t),n.Ic.add(r),Zs(n))}function Zs(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new v(O.fromString(e)),r=n.mc.next();n.Ac.set(r,new of(t)),n.Rc=n.Rc.insert(t,r),$o(n.remoteStore,new qe(xe(Is(t.path)),r,"TargetPurposeLimboResolution",vr.wn))}}async function Ln(n,e,t){const r=S(n),s=[],i=[],a=[];r.Tc.isEmpty()||(r.Tc.forEach((o,u)=>{a.push(r.yc(u,e,t).then(c=>{if((c||t)&&r.isPrimaryClient){const l=c?!c.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,l?"current":"not-current")}if(c){s.push(c);const l=zs.mo(u.targetId,c);i.push(l)}}))}),await Promise.all(a),r.hc.Tn(s),await async function(u,c){const l=S(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(c,f=>_.forEach(f.Vo,g=>l.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>_.forEach(f.fo,g=>l.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!qt(h))throw h;E(Gs,"Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=l.Lo.get(f),y=g.snapshotVersion,V=g.withLastLimboFreeSnapshotVersion(y);l.Lo=l.Lo.insert(f,V)}}}(r.localStore,i))}async function Tf(n,e){const t=S(n);if(!t.currentUser.isEqual(e)){E(Js,"User change. New user:",e.toKey());const r=await Bo(t.localStore,e);t.currentUser=e,function(i,a){i.fc.forEach(o=>{o.forEach(u=>{u.reject(new w(p.CANCELLED,a))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ln(t,r.$o)}}function Ef(n,e){const t=S(n),r=t.Ac.get(e);if(r&&r.Ec)return x().add(r.key);{let s=x();const i=t.Pc.get(e);if(!i)return s;for(const a of i??[]){const o=t.Tc.get(a);s=s.unionWith(o.view.Zu)}return s}}function iu(n){const e=S(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=tu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ef.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_f.bind(null,e),e.hc.Tn=nf.bind(null,e.eventManager),e.hc.wc=rf.bind(null,e.eventManager),e}function wf(n){const e=S(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gf.bind(null,e),e}class fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ar(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return kd(this.persistence,new Cd,e.initialUser,this.serializer)}Dc(e){return new Fo($s.b_,this.serializer)}vc(e){return new Zd}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fr.provider={build:()=>new fr};class If extends fr{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){A(this.persistence.referenceDelegate instanceof hr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Al(r,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?oe.withCacheSize(this.cacheSizeBytes):oe.DEFAULT;return new Fo(r=>hr.b_(r,t),this.serializer)}}class ls{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await Jd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tf}()}createDatastore(e){const t=Ar(e.databaseInfo.databaseId),r=ll(e.databaseInfo);return _l(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,o){return new qd(r,s,i,a,o)}(this.localStore,this.datastore,e.asyncQueue,t=>Wi(this.syncEngine,t,0),function(){return xi.Ye()?new xi:new al}())}createSyncEngine(e,t){return function(s,i,a,o,u,c,l){const h=new uf(s,i,a,o,u,c);return l&&(h.gc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=S(t);E(Ue,"RemoteStore shutting down."),r.la.add(5),await Dn(r),r.ha.shutdown(),r.Ta.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ls.provider={build:()=>new ls};/**
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
 */const ot="FirestoreClient";class Af{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ne.UNAUTHENTICATED,this.clientId=_s.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{E(ot,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(E(ot,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new He;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ys(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jr(n,e){n.asyncQueue.verifyOperationInProgress(),E(ot,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bo(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hi(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vf(n);E(ot,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>zi(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>zi(e.remoteStore,s)),n._onlineComponents=e}async function vf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){E(ot,"Using user provided OfflineComponentProvider");try{await jr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===p.FAILED_PRECONDITION||s.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Re("Error using user provided cache. Falling back to memory cache: "+t),await jr(n,new fr)}}else E(ot,"Using default OfflineComponentProvider"),await jr(n,new If(void 0));return n._offlineComponents}async function au(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(E(ot,"Using user provided OnlineComponentProvider"),await Hi(n,n._uninitializedComponentsProvider._online)):(E(ot,"Using default OnlineComponentProvider"),await Hi(n,new ls))),n._onlineComponents}function Rf(n){return au(n).then(e=>e.syncEngine)}async function hs(n){const e=await au(n),t=e.eventManager;return t.onListen=cf.bind(null,e.syncEngine),t.onUnlisten=df.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lf.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ff.bind(null,e.syncEngine),t}function Vf(n,e,t,r){const s=new Ko(r),i=new Xo(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Ho(await hs(n),i)),()=>{s.Va(),n.asyncQueue.enqueueAndForget(async()=>Yo(await hs(n),i))}}function Pf(n,e,t={}){const r=new He;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,o,u,c){const l=new Ko({next:f=>{l.Va(),a.enqueueAndForget(()=>Yo(i,h)),f.fromCache&&u.source==="server"?c.reject(new w(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Xo(o instanceof un?ad(o):o,l,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Ho(i,h)}(await hs(n),n.asyncQueue,e,t,r)),r.promise}function bf(n,e){const t=new He;return n.asyncQueue.enqueueAndForget(async()=>mf(await Rf(n),e,t)),t.promise}/**
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
 */let ou=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new j(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Vr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Sf=class extends ou{data(){return super.data()}};/**
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
 */class Cf{convertValue(e,t="none"){switch(K(e)){case 0:return null;case 1:return e.booleanValue;case 2:return q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw R(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Et(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[fn].arrayValue?.values?.map(r=>q(r.doubleValue));return new le(t)}convertGeoPoint(e){return new ke(q(e.latitude),q(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Dt(e));default:return null}}convertTimestamp(e){const t=Ze(e);return new U(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=O.fromString(e);A(no(r),9688,{name:e});const s=new hn(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(t)||Ge(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function uu(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */const Yi="AsyncQueue";class Xi{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new uo(this,"async_queue_retry"),this.Hc=()=>{const r=Gr();r&&E(Yi,"Visibility state changed to "+r.visibilityState),this.Ht.$t()},this.Jc=e;const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Gr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new He;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!qt(e))throw e;E(Yi,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(r=>{throw this.Wc=r,this.Gc=!1,Ge("INTERNAL UNHANDLED ERROR: ",Ji(r)),r}).then(r=>(this.Gc=!1,r))));return this.Jc=t,t}enqueueAfterDelay(e,t,r){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=Hs.createAndSchedule(this,e,t,r,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&R(47125,{tl:Ji(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Ji(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yt extends Rr{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Xi,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xi(e),this._firestoreClient=void 0,await e}}}function Jm(n,e){const t=typeof n=="object"?n:ca(),r=typeof n=="string"?n:er,s=la(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ma("firestore");i&&Vl(s,...i)}return s}function ei(n){if(n._terminated)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xf(n),n._firestoreClient}function xf(n){const e=n._freezeSettings(),t=gl(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Af(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class ti extends Cf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ee(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new j(this.firestore,null,t)}}class en{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ft extends ou{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new w(p.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ft._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ft._jsonSchemaVersion="firestore/documentSnapshot/1.0",ft._jsonSchema={type:G("string",ft._jsonSchemaVersion),bundleSource:G("string","DocumentSnapshot"),bundleName:G("string"),bundle:G("string")};class Xn extends ft{data(e={}){return super.data(e)}}class mt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new en(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xn(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new w(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(o=>{Y(s._snapshot.query)?is(s._snapshot.query):As(s.query._query);const u=new Xn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new en(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const u=new Xn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new en(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),l=a.indexOf(o.doc.key)),{type:Nf(o.type),doc:u,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new w(p.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_s.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Nf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R(61501,{type:n})}}/**
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
 */mt._jsonSchemaVersion="firestore/querySnapshot/1.0",mt._jsonSchema={type:G("string",mt._jsonSchemaVersion),bundleSource:G("string","QuerySnapshot"),bundleName:G("string"),bundle:G("string")};/**
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
 */function cu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */function Zi(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}function Zm(n){n=Ce(n,Nn);const e=Ce(n.firestore,yt),t=ei(e),r=new ti(e);return cu(n._query),Pf(t,n._query).then(s=>new mt(e,r,n,s))}function e_(n,e,t){n=Ce(n,j);const r=Ce(n.firestore,yt),s=uu(n.converter,e,t),i=mo(r);return ni(r,[_o(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ve.none())])}function t_(n){return ni(Ce(n.firestore,yt),[new ws(n._key,ve.none())])}function n_(n,e){const t=Ce(n.firestore,yt),r=Pl(n),s=uu(n.converter,e),i=mo(n.firestore);return ni(t,[_o(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ve.exists(!1))]).then(()=>r)}function r_(n,...e){n=De(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Zi(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Zi(e[r])){const c=e[r];e[r]=c.next?.bind(c),e[r+1]=c.error?.bind(c),e[r+2]=c.complete?.bind(c)}let i,a,o;if(n instanceof j)a=Ce(n.firestore,yt),o=Is(n._key.path),i={next:c=>{e[r]&&e[r](kf(a,n,c))},error:e[r+1],complete:e[r+2]};else{const c=Ce(n,Nn);a=Ce(c.firestore,yt),o=c._query;const l=new ti(a);i={next:h=>{e[r]&&e[r](new mt(a,l,c,h))},error:e[r+1],complete:e[r+2]},cu(n._query)}const u=ei(a);return Vf(u,o,s,i)}function ni(n,e){const t=ei(n);return bf(t,e)}function kf(n,e,t){const r=t.docs.get(e._key),s=new ti(n);return new ft(n,s,e._key,r,new en(t.hasPendingWrites,t.fromCache),e.converter)}const ea="@firebase/firestore",ta="4.17.2";(function(e,t=!0){Bu(da),ha(new ga("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),o=new yt(new nl(r.getProvider("auth-internal")),new il(a,r.getProvider("app-check-internal")),Hu(a,s),a);return i={useFetchStreams:t,...i},o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Jn(ea,ta,e),Jn(ea,ta,"esm2020")})();/**
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
 */const lu="firebasestorage.googleapis.com",hu="storageBucket",Df=2*60*1e3,Lf=10*60*1e3,Of=1e3;/**
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
 */class $ extends fa{constructor(e,t,r=0){super(Qr(e),`Firebase Storage: ${t} (${Qr(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var F;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(F||(F={}));function Qr(n){return"storage/"+n}function ri(){const n="An unknown error occurred, please check the error payload for server response.";return new $(F.UNKNOWN,n)}function Uf(n){return new $(F.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mf(n){return new $(F.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ff(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $(F.UNAUTHENTICATED,n)}function Bf(){return new $(F.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qf(n){return new $(F.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function du(){return new $(F.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fu(){return new $(F.CANCELED,"User canceled the upload/download.")}function $f(n){return new $(F.INVALID_URL,"Invalid URL '"+n+"'.")}function zf(n){return new $(F.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Gf(){return new $(F.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hu+"' property when initializing the app?")}function mu(){return new $(F.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jf(){return new $(F.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Qf(){return new $(F.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Wf(n){return new $(F.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ds(n){return new $(F.INVALID_ARGUMENT,n)}function _u(){return new $(F.APP_DELETED,"The Firebase app was deleted.")}function Kf(n){return new $(F.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ln(n,e){return new $(F.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xt(n){throw new $(F.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ge.makeFromUrl(e,t)}catch{return new ge(e,"")}if(r.path==="")return r;throw zf(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function c(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},V=t===lu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,I="([^?#]*)",C=new RegExp(`^https?://${V}/${s}/${I}`,"i"),L=[{regex:o,indices:u,postModify:i},{regex:g,indices:y,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let M=0;M<L.length;M++){const Me=L[M],Ie=Me.regex.exec(e);if(Ie){const Qe=Ie[Me.indices.bucket];let Kt=Ie[Me.indices.path];Kt||(Kt=""),r=new ge(Qe,Kt),Me.postModify(r);break}}if(r==null)throw $f(e);return r}}class Hf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Yf(n,e,t){let r=1,s=null,i=null,a=!1,o=0;function u(){return o===2}let c=!1;function l(...I){c||(c=!0,e.apply(null,I))}function h(I){s=setTimeout(()=>{s=null,n(g,u())},I)}function f(){i&&clearTimeout(i)}function g(I,...C){if(c){f();return}if(I){f(),l.call(null,I,...C);return}if(u()||a){f(),l.call(null,I,...C);return}r<64&&(r*=2);let L;o===1?(o=2,L=0):L=(r+Math.random())*1e3,h(L)}let y=!1;function V(I){y||(y=!0,f(),!c&&(s!==null?(I||(o=2),clearTimeout(s),h(0)):I||(o=1)))}return h(0),i=setTimeout(()=>{a=!0,V(!0)},t),V}function Xf(n){n(!1)}/**
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
 */function Jf(n){return n!==void 0}function Zf(n){return typeof n=="function"}function em(n){return typeof n=="object"&&!Array.isArray(n)}function Or(n){return typeof n=="string"||n instanceof String}function na(n){return si()&&n instanceof Blob}function si(){return typeof Blob<"u"}function ra(n,e,t,r){if(r<e)throw ds(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ds(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function On(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function pu(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var _t;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(_t||(_t={}));/**
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
 */function gu(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class tm{constructor(e,t,r,s,i,a,o,u,c,l,h,f=!0,g=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,V)=>{this.resolve_=y,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Gn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=o=>{const u=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const o=i.getErrorCode()===_t.NO_ERROR,u=i.getStatus();if(!o||gu(u,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===_t.ABORT;r(!1,new Gn(!1,null,l));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Gn(c,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,o=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(o,o.getResponse());Jf(u)?i(u):i()}catch(u){a(u)}else if(o!==null){const u=ri();u.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,u)):a(u)}else if(s.canceled){const u=this.appDelete_?_u():fu();a(u)}else{const u=du();a(u)}};this.canceled_?t(!1,new Gn(!1,null,!0)):this.backoffId_=Yf(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gn{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function nm(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rm(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function im(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function am(n,e,t,r,s,i,a=!0,o=!1){const u=pu(n.urlParams),c=n.url+u,l=Object.assign({},n.headers);return sm(l,e),nm(l,t),rm(l,i),im(l,r),new tm(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,o)}/**
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
 */function om(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function um(...n){const e=om();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(si())return new Blob(n);throw new $(F.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cm(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function lm(n){if(typeof atob>"u")throw Wf("base-64");return atob(n)}/**
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
 */const Se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wr{constructor(e,t){this.data=e,this.contentType=t||null}}function hm(n,e){switch(n){case Se.RAW:return new Wr(yu(e));case Se.BASE64:case Se.BASE64URL:return new Wr(Tu(n,e));case Se.DATA_URL:return new Wr(fm(e),mm(e))}throw ri()}function yu(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dm(n){let e;try{e=decodeURIComponent(n)}catch{throw ln(Se.DATA_URL,"Malformed data URL.")}return yu(e)}function Tu(n,e){switch(n){case Se.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ln(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Se.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ln(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=lm(e)}catch(s){throw s.message.includes("polyfill")?s:ln(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Eu{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ln(Se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=_m(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function fm(n){const e=new Eu(n);return e.base64?Tu(Se.BASE64,e.rest):dm(e.rest)}function mm(n){return new Eu(n).contentType}function _m(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ke{constructor(e,t){let r=0,s="";na(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(na(this.data_)){const r=this.data_,s=cm(r,e,t);return s===null?null:new Ke(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ke(r,!0)}}static getBlob(...e){if(si()){const t=e.map(r=>r instanceof Ke?r.data_:r);return new Ke(um.apply(null,t))}else{const t=e.map(a=>Or(a)?hm(Se.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let o=0;o<a.length;o++)s[i++]=a[o]}),new Ke(s,!0)}}uploadData(){return this.data_}}/**
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
 */function wu(n){let e;try{e=JSON.parse(n)}catch{return null}return em(e)?e:null}/**
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
 */function pm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function gm(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Iu(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function ym(n,e){return e}class ie{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||ym}}let jn=null;function Tm(n){return!Or(n)||n.length<2?n:Iu(n)}function Au(){if(jn)return jn;const n=[];n.push(new ie("bucket")),n.push(new ie("generation")),n.push(new ie("metageneration")),n.push(new ie("name","fullPath",!0));function e(i,a){return Tm(a)}const t=new ie("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new ie("size");return s.xform=r,n.push(s),n.push(new ie("timeCreated")),n.push(new ie("updated")),n.push(new ie("md5Hash",null,!0)),n.push(new ie("cacheControl",null,!0)),n.push(new ie("contentDisposition",null,!0)),n.push(new ie("contentEncoding",null,!0)),n.push(new ie("contentLanguage",null,!0)),n.push(new ie("contentType",null,!0)),n.push(new ie("metadata","customMetadata",!0)),jn=n,jn}function Em(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ge(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function wm(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return Em(r,n),r}function vu(n,e,t){const r=wu(e);return r===null?null:wm(n,r,t)}function Im(n,e,t,r){const s=wu(e);if(s===null||!Or(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(c=>{const l=n.bucket,h=n.fullPath,f="/b/"+a(l)+"/o/"+a(h),g=On(f,t,r),y=pu({alt:"media",token:c});return g+y})[0]}function Ru(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Wt{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ze(n){if(!n)throw ri()}function ii(n,e){function t(r,s){const i=vu(n,s,e);return ze(i!==null),i}return t}function Am(n,e){function t(r,s){const i=vu(n,s,e);return ze(i!==null),Im(i,s,n.host,n._protocol)}return t}function Un(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Bf():s=Ff():t.getStatus()===402?s=Mf(n.bucket):t.getStatus()===403?s=qf(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Vu(n){const e=Un(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Uf(n.path)),i.serverResponse=s.serverResponse,i}return t}function vm(n,e,t){const r=e.fullServerUrl(),s=On(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new Wt(s,i,ii(n,t),a);return o.errorHandler=Vu(e),o}function Rm(n,e,t){const r=e.fullServerUrl(),s=On(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new Wt(s,i,Am(n,t),a);return o.errorHandler=Vu(e),o}function Vm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Pu(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Vm(null,e)),r}function Pm(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let L="";for(let M=0;M<2;M++)L=L+Math.random().toString().slice(2);return L}const u=o();a["Content-Type"]="multipart/related; boundary="+u;const c=Pu(e,r,s),l=Ru(c,t),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+u+"--",g=Ke.getBlob(h,r,f);if(g===null)throw mu();const y={name:c.fullPath},V=On(i,n.host,n._protocol),I="POST",C=n.maxUploadRetryTime,D=new Wt(V,I,ii(n,t),C);return D.urlParams=y,D.headers=a,D.body=g.uploadData(),D.errorHandler=Un(e),D}class mr{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function ai(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{ze(!1)}return ze(!!t&&(e||["active"]).indexOf(t)!==-1),t}function bm(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=Pu(e,r,s),o={name:a.fullPath},u=On(i,n.host,n._protocol),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},h=Ru(a,t),f=n.maxUploadRetryTime;function g(V){ai(V);let I;try{I=V.getResponseHeader("X-Goog-Upload-URL")}catch{ze(!1)}return ze(Or(I)),I}const y=new Wt(u,c,g,f);return y.urlParams=o,y.headers=l,y.body=h,y.errorHandler=Un(e),y}function Sm(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const l=ai(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ze(!1)}h||ze(!1);const f=Number(h);return ze(!isNaN(f)),new mr(f,r.size(),l==="final")}const a="POST",o=n.maxUploadRetryTime,u=new Wt(t,a,i,o);return u.headers=s,u.errorHandler=Un(e),u}const sa=256*1024;function Cm(n,e,t,r,s,i,a,o){const u=new mr(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw jf();const c=u.total-u.current;let l=c;s>0&&(l=Math.min(l,s));const h=u.current,f=h+l;let g="";l===0?g="finalize":c===l?g="upload, finalize":g="upload";const y={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${u.current}`},V=r.slice(h,f);if(V===null)throw mu();function I(M,Me){const Ie=ai(M,["active","final"]),Qe=u.current+l,Kt=r.size();let Ur;return Ie==="final"?Ur=ii(e,i)(M,Me):Ur=null,new mr(Qe,Kt,Ie==="final",Ur)}const C="POST",D=e.maxUploadRetryTime,L=new Wt(t,C,I,D);return L.headers=y,L.body=V.uploadData(),L.progressCallback=o||null,L.errorHandler=Un(n),L}const ue={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kr(n){switch(n){case"running":case"pausing":case"canceling":return ue.RUNNING;case"paused":return ue.PAUSED;case"success":return ue.SUCCESS;case"canceled":return ue.CANCELED;case"error":return ue.ERROR;default:return ue.ERROR}}/**
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
 */class xm{constructor(e,t,r){if(Zf(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Rt(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}/**
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
 */class Nm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_t.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_t.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_t.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Xt("cannot .send() more than once");if(_r(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class km extends Nm{initXhr(){this.xhr_.responseType="text"}}function xt(){return new km}/**
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
 */class Dm{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Au(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(F.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(gu(s.status,[]))if(i)s=du();else{this.sleepTime=Math.max(this.sleepTime*2,Of),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(F.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=bm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,xt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=Sm(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,xt,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=sa*this._chunkMultiplier,t=new mr(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=Cm(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const o=this._ref.storage._makeRequest(a,xt,s,i,!1);this._request=o,o.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){sa*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=vm(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,xt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=Pm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,xt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=fu(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Kr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new xm(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Kr(this._state)){case ue.SUCCESS:Rt(this._resolve.bind(null,this.snapshot))();break;case ue.CANCELED:case ue.ERROR:const t=this._reject;Rt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Kr(this._state)){case ue.RUNNING:case ue.PAUSED:e.next&&Rt(e.next.bind(e,this.snapshot))();break;case ue.SUCCESS:e.complete&&Rt(e.complete.bind(e))();break;case ue.CANCELED:case ue.ERROR:e.error&&Rt(e.error.bind(e,this._error))();break;default:e.error&&Rt(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Tt{constructor(e,t){this._service=e,t instanceof ge?this._location=t:this._location=ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Tt(e,t)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iu(this._location.path)}get storage(){return this._service}get parent(){const e=pm(this._location.path);if(e===null)return null;const t=new ge(this._location.bucket,e);return new Tt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Kf(e)}}function Lm(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Dm(n,new Ke(e),t)}function Om(n){n._throwIfRoot("getDownloadURL");const e=Rm(n.storage,n._location,Au());return n.storage.makeRequestWithTokens(e,xt).then(t=>{if(t===null)throw Qf();return t})}function Um(n,e){const t=gm(n._location.path,e),r=new ge(n._location.bucket,t);return new Tt(n.storage,r)}/**
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
 */function Mm(n){return/^[A-Za-z]+:\/\//.test(n)}function Fm(n,e){return new Tt(n,e)}function bu(n,e){if(n instanceof oi){const t=n;if(t._bucket==null)throw Gf();const r=new Tt(t,t._bucket);return e!=null?bu(r,e):r}else return e!==void 0?Um(n,e):n}function Bm(n,e){if(e&&Mm(e)){if(n instanceof oi)return Fm(n,e);throw ds("To use ref(service, url), the first argument must be a Storage instance.")}else return bu(n,e)}function ia(n,e){const t=e?.[hu];return t==null?null:ge.makeFromBucketSpec(t,n)}function qm(n,e,t,r={}){n.host=`${e}:${t}`;const s=_r(e);s&&_a(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:pa(i,n.app.options.projectId))}class oi{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=lu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Df,this._maxUploadRetryTime=Lf,this._requests=new Set,s!=null?this._bucket=ge.makeFromBucketSpec(s,this._host):this._bucket=ia(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=ia(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ra("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ra("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ua(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Hf(_u());{const a=am(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const aa="@firebase/storage",oa="0.14.5";/**
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
 */const Su="storage";function s_(n,e,t){return n=De(n),Lm(n,e,t)}function i_(n){return n=De(n),Om(n)}function a_(n,e){return n=De(n),Bm(n,e)}function o_(n=ca(),e){n=De(n);const r=la(n,Su).getImmediate({identifier:e}),s=ma("storage");return s&&$m(r,...s),r}function $m(n,e,t,r={}){qm(n,e,t,r)}/**
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
 */function zm(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new oi(t,r,s,e,da)}function Gm(){ha(new ga(Su,zm,"PUBLIC").setMultipleInstances(!0)),Jn(aa,oa,""),Jn(aa,oa,"esm2020")}Gm();export{o_ as a,Zm as b,Hm as c,n_ as d,Pl as e,i_ as f,Jm as g,t_ as h,r_ as o,a_ as r,e_ as s,s_ as u};

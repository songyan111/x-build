(self.webpackChunk=self.webpackChunk||[]).push([[8238],{1848:function(n,a,s){"use strict";s.r(a),s.d(a,{data:function(){return t}});const t={key:"v-58da8c9a",path:"/guide/router/keep-alive.html",title:"页面缓存",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"router配置缓存",slug:"router配置缓存",children:[]}],filePathRelative:"guide/router/keep-alive.md",git:{updatedTime:162484849e4,contributors:[]}}},2331:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return e}});const t=(0,s(6252).uE)('<h1 id="页面缓存" tabindex="-1"><a class="header-anchor" href="#页面缓存" aria-hidden="true">#</a> 页面缓存</h1><p>keepalive是Vue的内置组件，作用是将组件缓存在内存当中，防止重复渲染DOM，属于消耗内存获取速度。常用的用法是将组件或者路由缓存。</p><div class="custom-container warning"><p class="custom-container-title">警告</p><p>此配置只在 frameIn 中的路由有效。</p></div><h2 id="router配置缓存" tabindex="-1"><a class="header-anchor" href="#router配置缓存" aria-hidden="true">#</a> router配置缓存</h2><p>对应路由配置meta属性：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Example&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/viewxample/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;示例&#39;</span><span class="token punctuation">,</span>\n    keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>keepAlive</td><td>设置页面是否需要使用缓存</td><td>boolean</td><td>false</td></tr></tbody></table>',7);var e={render:function(n,a){return t}}}}]);
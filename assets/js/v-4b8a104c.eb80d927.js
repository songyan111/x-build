(self.webpackChunk=self.webpackChunk||[]).push([[6631],{1260:function(a,s,e){"use strict";e.r(s),e.d(s,{data:function(){return n}});const n={key:"v-4b8a104c",path:"/reference/style/mixins.html",title:"Mixins",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"文字一行超出省略号",slug:"文字一行超出省略号",children:[]},{level:2,title:"多行文字超出省略号",slug:"多行文字超出省略号",children:[{level:3,title:"Params",slug:"params",children:[]}]},{level:2,title:"美化文本选中",slug:"美化文本选中",children:[{level:3,title:"Params",slug:"params-1",children:[]}]},{level:2,title:"毛玻璃",slug:"毛玻璃",children:[{level:3,title:"Params",slug:"params-2",children:[]}]},{level:2,title:"滤镜",slug:"滤镜",children:[]},{level:2,title:"移动端 100vh",slug:"移动端-100vh",children:[{level:3,title:"Params",slug:"params-3",children:[]}]}],filePathRelative:"reference/style/mixins.md",git:{updatedTime:162484849e4,contributors:[]}}},6762:function(a,s,e){"use strict";e.r(s),e.d(s,{default:function(){return t}});const n=(0,e(6252).uE)('<h1 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h1><h2 id="文字一行超出省略号" tabindex="-1"><a class="header-anchor" href="#文字一行超出省略号" aria-hidden="true">#</a> 文字一行超出省略号</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@include</span> ellipsis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="多行文字超出省略号" tabindex="-1"><a class="header-anchor" href="#多行文字超出省略号" aria-hidden="true">#</a> 多行文字超出省略号</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">ellipsis-multiline</span><span class="token punctuation">(</span><span class="token variable">$number</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>$number</td><td>设置在第几行超出显示省略号</td><td>number</td><td>4</td></tr></tbody></table><h2 id="美化文本选中" tabindex="-1"><a class="header-anchor" href="#美化文本选中" aria-hidden="true">#</a> 美化文本选中</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">beauty-select</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span><span class="token variable">$bgcolor</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="params-1" tabindex="-1"><a class="header-anchor" href="#params-1" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>$color</td><td>设置字体颜色</td><td>十六进制数、颜色</td><td>#fff（白）</td></tr><tr><td>$bgcolor</td><td>设置背景颜色</td><td>十六进制数、颜色</td><td>#000（黑）</td></tr></tbody></table><h2 id="毛玻璃" tabindex="-1"><a class="header-anchor" href="#毛玻璃" aria-hidden="true">#</a> 毛玻璃</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token variable">$blur</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="params-2" tabindex="-1"><a class="header-anchor" href="#params-2" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>$blue</td><td>设置虚幻像素</td><td>string</td><td>10px</td></tr></tbody></table><h2 id="滤镜" tabindex="-1"><a class="header-anchor" href="#滤镜" aria-hidden="true">#</a> 滤镜</h2><p>将彩色照片显示为黑白照片、保留图片层次。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@include</span> grayscale\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="移动端-100vh" tabindex="-1"><a class="header-anchor" href="#移动端-100vh" aria-hidden="true">#</a> 移动端 100vh</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">vh</span><span class="token punctuation">(</span><span class="token variable">$height</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="params-3" tabindex="-1"><a class="header-anchor" href="#params-3" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>$height</td><td>设置高度</td><td>string</td><td>100vh</td></tr></tbody></table>',22);var t={render:function(a,s){return n}}}}]);
import React from 'react';
import Layout from '@/components/Layout';
import { tocItems } from '@/data/toc';

const EffectiveGo = () => {
  return (
    <Layout tocItems={tocItems}>
      <h1 id="top">Effective Go (မြန်မာဘာသာ)</h1>

      <section id="introduction">
        <h2>နိဒါန်း (Introduction)</h2>
        <p>
          Go သည် ဘာသာစကားအသစ်တစ်ခု ဖြစ်ပါသည်။ ၎င်းသည် တည်ရှိပြီးသား ဘာသာစကားများမှ စိတ်ကူးစိတ်သန်းများကို ယူဆောင်ထားသော်လည်း၊ ၎င်း၏ ထူးခြားသော ဂုဏ်သတ္တိများကြောင့် ထိရောက်သော Go program များသည် အခြားသော ဘာသာစကားတူများဖြင့် ရေးသားထားသော program များနှင့် ကွဲပြားပါသည်။ C++ သို့မဟုတ် Java program တစ်ခုကို Go သို့ တိုက်ရိုက် ဘာသာပြန်ဆိုခြင်းသည် စိတ်ကျေနပ်ဖွယ်ရလဒ်ကို ပေးစွမ်းနိုင်မည် မဟုတ်ပါ - Java program များကို Go ဖြင့် မဟုတ်ဘဲ Java ဖြင့်သာ ရေးသားကြပါသည်။ အခြားတစ်ဖက်တွင်၊ ပြဿနာတစ်ခုကို Go ၏ ရှုထောင့်မှနေ၍ စဉ်းစားခြင်းဖြင့် အောင်မြင်သော်လည်း လုံးဝကွဲပြားခြားနားသော program တစ်ခုကို ရရှိနိုင်ပါသည်။ တစ်နည်းအားဖြင့်ဆိုရသော် Go ကို ကောင်းမွန်စွာ ရေးသားနိုင်ရန်အတွက် ၎င်း၏ ဂုဏ်သတ္တိများနှင့် idioms (အသုံးအနှုန်းပုံစံများ) ကို နားလည်ရန် အရေးကြီးပါသည်။ ထို့အပြင် Go တွင် သတ်မှတ်ထားသော naming၊ formatting၊ program construction အစရှိသည့် ရိုးရာအရ သတ်မှတ်ထားသော ထုံးစံများ (conventions) ကို သိရှိထားခြင်းဖြင့် သင်ရေးသားသော program များကို အခြားသော Go programmer များအနေဖြင့် နားလည်ရ လွယ်ကူစေမည် ဖြစ်ပါသည်။
        </p>
        <p>
          ဤစာတမ်းသည် ရှင်းလင်းပြီး idiomatic ဖြစ်သော Go code ရေးသားနည်းများအတွက် အကြံပြုချက်များကို ပေးထားပါသည်။ ၎င်းသည် <a href="https://go.dev/ref/spec">language specification</a>၊ <a href="https://go.dev/tour/">Tour of Go</a> နှင့် <a href="https://go.dev/doc/code.html">How to Write Go Code</a> တို့ကို ဖြည့်စွက်ပေးထားခြင်း ဖြစ်သောကြောင့် အဆိုပါစာတမ်းများကို ဦးစွာဖတ်ရှုရန် အကြံပြုလိုပါသည်။
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-700">
            <strong>၂၀၂၂ ဇန်နဝါရီတွင် ထပ်မံဖြည့်စွက်ချက် -</strong> ဤစာတမ်းကို ၂၀၀၉ ခုနှစ် Go စတင်ထုတ်လုပ်ချိန်တွင် ရေးသားခဲ့ခြင်းဖြစ်ပြီး ထိုအချိန်မှစ၍ ကြီးကြီးမားမား ပြင်ဆင်မှုများ ပြုလုပ်ထားခြင်း မရှိပါ။ ဘာသာစကား၏ တည်ငြိမ်မှုကြောင့် ဘာသာစကားကိုယ်နှိုက်ကို မည်သို့အသုံးပြုရမည်ကို သိရှိရန်အတွက် အလွန်ကောင်းမွန်သော လမ်းညွှန်ချက် ဖြစ်နေဆဲ ဖြစ်သော်လည်း၊ build system၊ testing၊ modules နှင့် polymorphism (generics) ကဲ့သို့သော Go ဂေဟစနစ်၏ အရေးကြီးသော ပြောင်းလဲမှုများအကြောင်း အနည်းငယ်သာ ပါဝင်ပါသည်။ ထို့ကြောင့် ဤစာတမ်းသည် ပြီးပြည့်စုံသော လမ်းညွှန်တစ်ခု မဟုတ်ကြောင်း နားလည်စေလိုပါသည်။
          </p>
        </div>

        <h3 id="examples">ဥပမာများ (Examples)</h3>
        <p>
          <a href="https://go.dev/src/">Go package sources</a> များသည် core library အဖြစ်သာမက၊ ဘာသာစကားကို မည်သို့အသုံးပြုရမည်ဆိုသည့် အကောင်းဆုံး ဥပမာများလည်း ဖြစ်ပါသည်။ ထို့အပြင် များစွာသော package များတွင် go.dev ဝဘ်ဆိုက်မှ တိုက်ရိုက် run နိုင်သော လက်တွေ့အသုံးပြုနိုင်သည့် executable examples များ ပါဝင်ပါသည်။ ပြဿနာတစ်ခုကို မည်သို့ချဉ်းကပ်ရမည် သို့မဟုတ် တစ်ခုခုကို မည်သို့ implement လုပ်ရမည်ကို သိလိုပါက standard library ရှိ documentation၊ code နှင့် examples များက သင့်အတွက် အဖြေများ၊ စိတ်ကူးများနှင့် နောက်ခံအချက်အလက်များကို ပေးစွမ်းနိုင်ပါလိမ့်မည်။
        </p>
      </section>

      <section id="formatting">
        <h2>Formatting</h2>
        <p>
          Formatting ဆိုင်ရာ ပြဿနာများသည် အငြင်းပွားစရာ အများဆုံး ဖြစ်သော်လည်း အကျိုးသက်ရောက်မှု အနည်းဆုံး ဖြစ်ပါသည်။ လူများသည် ကွဲပြားသော formatting style များကို လိုက်လျောညီထွေ ဖြစ်အောင် ပြုလုပ်နိုင်သော်လည်း၊ လူတိုင်း တူညီသော style ကို လိုက်နာပါက အချိန်ကုန်သက်သာပြီး ပိုမိုကောင်းမွန်ပါသည်။ ထိုသို့သော အခြေအနေကို ရရှိရန်အတွက် ရှည်လျားသော rule manual ကြီး မလိုဘဲ မည်သို့ဆောင်ရွက်ကြမည်နည်း။
        </p>
        <p>
          Go တွင် ကျွန်ုပ်တို့သည် ထူးခြားသော ချဉ်းကပ်ပုံတစ်ခုကို အသုံးပြုထားပြီး formatting ပြဿနာအများစုကို machine အား ကိုင်တွယ်ခိုင်းပါသည်။ <code>gofmt</code> program (package level တွင် အလုပ်လုပ်သော <code>go fmt</code> အနေဖြင့်လည်း ရရှိနိုင်ပါသည်) သည် Go program တစ်ခုကို ဖတ်ရှုပြီး standard style ၏ indentation နှင့် vertical alignment များအတိုင်း code ကို ထုတ်ပေးပါသည်။ comments များ၏ formatting ကိုလည်း လိုအပ်သလို ပြန်လည်ပြင်ဆင်ပေးပါသည်။ အကယ်၍ သင်သည် layout အသစ်တစ်ခုကို မည်သို့ကိုင်တွယ်ရမည်ကို သိလိုပါက <code>gofmt</code> ကို run ကြည့်ပါ၊ အကယ်၍ ရလဒ်ထွက်လာသည်မှာ မမှန်ဟု ထင်ရပါက သင့် program ကို ပြန်လည် စီစဉ်ပါ (သို့မဟုတ် bug တစ်ခုအဖြစ် တင်ပြပါ)၊ ၎င်းကို ကိုယ်တိုင် ပြန်မပြင်ပါနှင့်။
        </p>
        <p>
          ဥပမာအားဖြင့် structure တစ်ခုရှိ fields များ၏ comments များကို တန်းစီရန် အချိန်ကုန်ခံနေစရာ မလိုပါ။ <code>gofmt</code> က သင့်အတွက် လုပ်ပေးပါလိမ့်မည်။ အောက်ပါ declaration ကို ပေးထားသည် ဆိုပါစို့ -
        </p>
        <pre><code>{`type T struct {
    name  string // name of the object
    value int    // its value
}`}</code></pre>
        <p>
          <code>gofmt</code> သည် column များကို အောက်ပါအတိုင်း တန်းစီပေးပါမည် -
        </p>
        <pre><code>{`type T struct {
    name  string // name of the object
    value int    // its value
}`}</code></pre>
        <p>
          Standard packages များရှိ Go code အားလုံးကို <code>gofmt</code> ဖြင့် format လုပ်ထားပါသည်။
        </p>
        <p>
          အချို့သော formatting အသေးစိတ်များကို အကျဉ်းချုပ် ဖော်ပြရလျှင် -
        </p>
        <dl className="space-y-4">
          <div>
            <dt className="font-bold">Indentation</dt>
            <dd>ကျွန်ုပ်တို့သည် indentation အတွက် tabs များကို အသုံးပြုပါသည်။ <code>gofmt</code> သည် ၎င်းတို့ကို default အနေဖြင့် အသုံးပြုပါသည်။ လိုအပ်မှသာ spaces များကို သုံးပါ။</dd>
          </div>
          <div>
            <dt className="font-bold">Line length</dt>
            <dd>Go တွင် line length ကန့်သတ်ချက် မရှိပါ။ သို့သော် lines များ အလွန်ရှည်သွားသည်ဟု ခံစားရပါက ၎င်းတို့ကို ခွဲထုတ်ပြီး extra tab ဖြင့် indent လုပ်ပါ။</dd>
          </div>
          <div>
            <dt className="font-bold">Parentheses</dt>
            <dd>
              Go တွင် C နှင့် Java ထက် parentheses <code>()</code> အသုံးပြုမှု နည်းပါးပါသည်။ Control structures (<code>if</code>, <code>for</code>, <code>switch</code>) တို့တွင် parentheses များ မလိုအပ်ပါ။ ထို့အပြင် operator precedence hierarchy သည် ပိုတိုပြီး ရှင်းလင်းပါသည်။ ဥပမာ -
              <pre><code>x&lt;&lt;8 + y&lt;&lt;16</code></pre>
              သည် spacing က ညွှန်ပြသည့်အတိုင်း အဓိပ္ပာယ်ရှိပါသည် (အခြား languages များနှင့် မတူဘဲ)။
            </dd>
          </div>
        </dl>
      </section>

      <section id="commentary">
        <h2>Commentary</h2>
        <p>
          Go တွင် C-style <code>/* */</code> block comments များနှင့် C++-style <code>//</code> line comments များကို ပေးထားပါသည်။ Line comments များမှာ ပုံမှန်အသုံးပြုမှုဖြစ်ပြီး၊ block comments များကို package comments များအဖြစ် သို့မဟုတ် code အများအပြားကို ခေတ္တပိတ်ထားရန် (disable) အတွက် အသုံးများပါသည်။
        </p>
        <p>
          Top-level declaration များ၏ အရှေ့တွင် (ကြားထဲ၌ code မရှိဘဲ) ရေးထားသော comments များကို အဆိုပါ declaration အတွက် document အဖြစ် သတ်မှတ်ပါသည်။ ဤ "doc comments" များသည် Go package သို့မဟုတ် command တစ်ခုအတွက် အဓိက documentation ဖြစ်ပါသည်။ "Doc comments" များနှင့် ပတ်သက်၍ ပိုမိုသိရှိလိုပါက <a href="https://go.dev/doc/comment">Go Doc Comments</a> တွင် ကြည့်ရှုနိုင်ပါသည်။
        </p>
      </section>

      <section id="names">
        <h2>Names</h2>
        <p>
          အခြားသော ဘာသာစကားများကဲ့သို့ပင် Go တွင် အမည်ပေးခြင်း (Naming) သည် အလွန်အရေးကြီးပါသည်။ ၎င်းသည် semantic effect ပင် ရှိပါသည်- package တစ်ခု၏ ပြင်ပမှ အမည်တစ်ခုကို မြင်နိုင်ခြင်း (visibility) ရှိမရှိကို ၎င်း၏ ပထမစာလုံးသည် စာလုံးကြီး (upper case) ဖြစ်မဖြစ်ပေါ် မူတည်၍ ဆုံးဖြတ်ပါသည်။ ထို့ကြောင့် Go program များရှိ naming conventions များအကြောင်း ဆွေးနွေးရန် လိုအပ်ပါသည်။
        </p>

        <h3 id="package-names">Package names</h3>
        <p>
          Package တစ်ခုကို import လုပ်လိုက်သောအခါ၊ အဆိုပါ package အမည်သည် ၎င်းအတွင်းရှိ အရာများကို ဝင်ရောက်အသုံးပြုရန် accessor ဖြစ်လာပါသည်။
        </p>
        <pre><code>import "bytes"</code></pre>
        <p>
          ပြီးနောက် <code>bytes.Buffer</code> ဟု ခေါ်ယူအသုံးပြုနိုင်ပါသည်။ Package ကို အသုံးပြုသူတိုင်းအတွက် တူညီသော အမည်ဖြင့် ခေါ်ယူနိုင်ခြင်းသည် အထောက်အကူဖြစ်စေသည့်အတွက် package အမည်သည် တိုတောင်းရပါမည်၊ တိကျရပါမည်။ Convention အနေဖြင့် package များကို lowercase၊ single-word အမည်များ ပေးကြပါသည်။ Underscores သို့မဟုတ် mixedCaps များ မလိုအပ်ပါ။ <code>import .</code> syntax ကို အသုံးပြုပါက package အမည်ကို accessor အနေဖြင့် သုံးရန် မလိုသော်လည်း standard testing များမှလွဲ၍ ၎င်းကို ရှောင်ရှားသင့်ပါသည်။
        </p>
        <p>
          အခြားသော ထုံးစံတစ်ခုမှာ package အမည်သည် ၎င်း၏ directory အမည်နှင့် တူညီရပါမည်။ ဥပမာအားဖြင့် <code>src/encoding/base64</code> ရှိ package ကို <code>"encoding/base64"</code> အနေဖြင့် import လုပ်သော်လည်း ၎င်း၏ အမည်မှာ <code>base64</code> ဖြစ်ပြီး <code>encoding_base64</code> သို့မဟုတ် <code>encodingBase64</code> မဟုတ်ပါ။
        </p>
        <p>
          Package ကို အသုံးပြုသူသည် export လုပ်ထားသော အမည်များကို အသုံးပြုသည့်အခါ ရှင်းလင်းမှု ရှိစေရန်အတွက် redundancy (ထပ်နေခြင်း) ကို ရှောင်ရှားသင့်ပါသည်။ ဥပမာအားဖြင့် <code>bufio</code> package ရှိ buffered reader type ကို <code>BufReader</code> ဟု မပေးဘဲ <code>Reader</code> ဟု ခေါ်ဆိုပါသည်၊ အဘယ်ကြောင့်ဆိုသော် အသုံးပြုသူများသည် <code>bufio.Reader</code> ဟုသာ မြင်ရမည် ဖြစ်ပြီး ၎င်းသည် ရှင်းလင်းတိကျသော အမည်ဖြစ်သောကြောင့် ဖြစ်ပါသည်။ ထို့အပြင် <code>ring.Ring</code> ကဲ့သို့သော နာမည်မျိုးမှာလည်း semantic structure ကို ရှင်းလင်းစေသည့်အတွက် ခွင့်ပြုပါသည်။
        </p>

        <h3 id="getters">Getters</h3>
        <p>
          Go သည် getters နှင့် setters များအတွက် အလိုအလျောက် support မပေးပါ။ သင်ကိုယ်တိုင် ရေးသားခြင်းသည် မှားယွင်းမှုမရှိသော်လည်း၊ getter အမည်တွင် <code>Get</code> ဟု ထည့်ရေးခြင်းမှာ Go ၏ ထုံးစံ (idiomatic) မဟုတ်ပါ။ သင့်တွင် <code>owner</code> (စာလုံးသေး၊ မထုတ်ပြထားသော field) ရှိပါက၊ getter method ကို <code>Owner</code> (စာလုံးကြီး၊ ထုတ်ပြထားသော method) ဟု အမည်ပေးသင့်ပါသည်။ Setter ကိုမူ လိုအပ်ပါက <code>SetOwner</code> ဟု အမည်ပေးနိုင်ပါသည်။ နှစ်ခုလုံးကို အောက်ပါအတိုင်း အသုံးပြုနိုင်ပါသည်။
        </p>
        <pre><code>{`owner := obj.Owner()
if owner != user {
    obj.SetOwner(user)
}`}</code></pre>

        <h3 id="interface-names">Interface names</h3>
        <p>
          Convention အနေဖြင့် method တစ်ခုတည်းသာပါသော interface များကို အဆိုပါ method အမည်၏ နောက်တွင် <code>-er</code> suffix (နောက်ဆက်တွဲ) ထည့်၍ သို့မဟုတ် အလားတူ agent noun တစ်ခုခုဖြင့် အမည်ပေးလေ့ရှိပါသည်။ ဥပမာ - <code>Reader</code>, <code>Writer</code>, <code>Formatter</code>, <code>CloseNotifier</code> စသဖြင့် ဖြစ်ပါသည်။
        </p>
        <p>
          <code>Read</code>, <code>Write</code>, <code>Close</code>, <code>Flush</code>, <code>String</code> စသည့် methods များတွင် canonical အဓိပ္ပာယ်နှင့် signatures များ ရှိပြီးသား ဖြစ်ပါသည်။ Redundancy ကို ရှောင်ရှားနိုင်ရန် သင်၏ method အမည်များကို အဆိုပါ အမည်များအတိုင်း ပေးရန် မလိုအပ်ပါ။ အကယ်၍ သင့် type သည် <code>Read</code> method ကို implement လုပ်ထားပါက ၎င်းကို <code>Reader</code> ဟု ခေါ်ဆိုနိုင်ပါသည်။
        </p>

        <h3 id="mixed-caps">MixedCaps</h3>
        <p>
          နောက်ဆုံးအနေဖြင့်၊ Go ရှိ convention မှာ စကားလုံးအများကြီးပါသော အမည်များကို underscores အစား <code>MixedCaps</code> သို့မဟုတ် <code>mixedCaps</code> အသုံးပြု၍ ရေးသားရန် ဖြစ်ပါသည်။
        </p>
      </section>

      <section id="semicolons">
        <h2>Semicolons</h2>
        <p>
          C နှင့် ဆင်တူစွာပင် Go ၏ formal grammar တွင် statement များကို အဆုံးသတ်ရန် semicolons များကို အသုံးပြုသော်လည်း၊ C နှင့် မတူသည်မှာ အဆိုပါ semicolons များသည် source code ထဲတွင် ပေါ်မလာခြင်း ဖြစ်ပါသည်။ ယင်းအစား lexer သည် scan လုပ်နေစဉ်အတွင်း ရိုးရှင်းသော စည်းမျဉ်းတစ်ခုကို အသုံးပြု၍ semicolons များကို အလိုအလျောက် ထည့်သွင်းပေးသွားပါသည်။ ထို့ကြောင့် input text သည် semicolons များ အများအားဖြင့် ကင်းမဲ့နေပါသည်။
        </p>
        <p>
          စည်းမျဉ်းမှာ ဤသို့ ဖြစ်ပါသည် - newline မတိုင်မီ နောက်ဆုံး token သည် identifier တစ်ခု (<code>int</code> နှင့် <code>float64</code> ကဲ့သို့ စကားလုံးများ အပါအဝင်)၊ number သို့မဟုတ် string constant ကဲ့သို့ basic literal တစ်ခု၊ သို့မဟုတ် အောက်ပါ tokens များထဲမှ တစ်ခု ဖြစ်ပါက
        </p>
        <pre><code>break continue fallthrough return ++ -- ) &#125;</code></pre>
        <p>
          lexer သည် token နောက်တွင် semicolon တစ်ခု အမြဲထည့်သွင်းပါသည်။ ဤအချက်ကို "newline သည် statement တစ်ခုကို အဆုံးသတ်နိုင်သော token နောက်တွင် ရောက်ရှိပါက semicolon ထည့်ပါ" ဟု အကျဉ်းချုံးနိုင်ပါသည်။
        </p>
        <p>
          Semicolon ကို closing brace အရှေ့တွင် ချက်ချင်း ရေးမထည့်ဘဲ ချန်လှပ်ထားနိုင်ပါသည်။ ထို့ကြောင့် အောက်ပါကဲ့သို့ statement -
        </p>
        <pre><code>{`go func() { for { dst <- <-src } }()`}</code></pre>
        <p>
          တွင် semicolons လိုအပ်ခြင်း မရှိပါ။ Idiomatic Go programs များတွင် semicolons များသည် <code>for</code> loop clauses များတွင်သာ ပါရှိပါသည် - initializer၊ condition နှင့် continuation elements များကို ခွဲခြားရန် ဖြစ်ပါသည်။ တစ်ကြောင်းတည်းတွင် statements အများအပြား ရေးလိုပါက ခွဲခြားရန်လည်း လိုအပ်ပါသည်။
        </p>
        <p>
          Semicolon insertion rules ၏ အကျိုးဆက်တစ်ခုမှာ control structure (<code>if</code>, <code>for</code>, <code>switch</code>, သို့မဟုတ် <code>select</code>) ၏ opening brace ကို နောက်တစ်ကြောင်းတွင် မထားနိုင်ခြင်း ဖြစ်ပါသည်။ ထိုသို့ ထားမိပါက brace အရှေ့တွင် semicolon တစ်ခု ထည့်သွင်းခံရမည် ဖြစ်ပြီး မလိုလားသော ရလဒ်များ ဖြစ်ပေါ်စေနိုင်ပါသည်။ ဤသို့ ရေးပါ -
        </p>
        <pre><code>{`if i < f() {
    g()
}`}</code></pre>
        <p>
          ဤသို့ မရေးပါနှင့် -
        </p>
        <pre><code>{`if i < f()  // wrong!
{           // wrong!
    g()
}`}</code></pre>
      </section>

      <section id="control-structures">
        <h2>Control structures</h2>
        <p>
          Go ၏ control structures များသည် C နှင့် ဆင်တူသော်လည်း အရေးကြီးသော အချက်များ ကွဲပြားပါသည်။ <code>do</code> သို့မဟုတ် <code>while</code> loop မပါဝင်ဘဲ ပိုမိုစွမ်းဆောင်နိုင်သော <code>for</code> သာ ပါရှိပါသည်။ <code>switch</code> သည် ပိုမို flexible ဖြစ်ပါသည်။ <code>if</code> နှင့် <code>switch</code> တို့တွင် <code>for</code> ကဲ့သို့ စတင်သတ်မှတ်ခြင်း (initialization) statement ကို ထည့်သွင်းနိုင်ပါသည်။
        </p>

        <h3 id="if">If</h3>
        <p>
          Go တွင် ရိုးရှင်းသော <code>if</code> တစ်ခုမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -
        </p>
        <pre><code>{`if x > 0 {
    return y
}`}</code></pre>
        <p>
          တွန့်ကွင်း <code>&#123;&#125;</code> မဖြစ်မနေ ပါရမည်ဖြစ်ပြီး ရေးသားပုံမှာ ရှင်းလင်းမှုကို ဦးစားပေးပါသည်။ အကယ်၍ <code>if</code> statement သည် နောက်တစ်ဆင့်သို့ မသွားဘဲ (ဥပမာ - <code>break</code>, <code>continue</code>, <code>goto</code>, သို့မဟုတ် <code>return</code> တို့ဖြင့်) အဆုံးသတ်သွားပါက မလိုအပ်သော <code>else</code> ကို ချန်လှပ်ထားခြင်းသည် ပိုမို idiomatic ဖြစ်ပါသည်။
        </p>
        <pre><code>{`f, err := os.Open(name)
if err != nil {
    return err
}
codeUsing(f)`}</code></pre>
        <p>
          အောက်ပါ ဥပမာတွင် <code>else</code> ကို မသုံးဘဲ ရေးသားခြင်းက code ကို ပိုမို ရှင်းလင်းစေသည်ကို တွေ့နိုင်ပါသည်။
        </p>
        <pre><code>{`f, err := os.Open(name)
if err != nil {
    return err
}
d, err := f.Stat()
if err != nil {
    f.Close()
    return err
}
codeUsing(f, d)`}</code></pre>

        <h3 id="redeclaration">Redeclaration and reassignment</h3>
        <p>
          အပိုဆောင်းမှတ်ချက် - ယခင် section ရှိ နောက်ဆုံး ဥပမာသည် <code>:=</code> short declaration form ၏ အလုပ်လုပ်ပုံကို ပြသပါသည်။ <code>os.Open</code> ကို ခေါ်သော declaration မှာ -
        </p>
        <pre><code>{`f, err := os.Open(name)`}</code></pre>
        <p>
          ဤ statement သည် variables နှစ်ခု ဖြစ်သော <code>f</code> နှင့် <code>err</code> ကို declare လုပ်ပါသည်။ မကြာမီ အောက်တွင် <code>f.Stat</code> ကို ခေါ်သည်မှာ -
        </p>
        <pre><code>{`d, err := f.Stat()`}</code></pre>
        <p>
          တွင် <code>d</code> နှင့် <code>err</code> ကို declare လုပ်သကဲ့သို့ ပုံရပါသည်။ သို့သော် <code>err</code> သည် statements နှစ်ခုလုံးတွင် ပေါ်နေသည်ကို သတိပြုပါ။ ဤ duplication သည် legal ဖြစ်ပါသည် - <code>err</code> ကို ပထမ statement တွင် declare လုပ်ပြီး၊ ဒုတိယတွင် re-assign သာ လုပ်ပါသည်။ ဆိုလိုသည်မှာ <code>f.Stat</code> ခေါ်ခြင်းသည် အထက်တွင် declare လုပ်ထားပြီးသော <code>err</code> variable ကို အသုံးပြုပြီး တန်ဖိုးအသစ် ပေးခြင်းသာ ဖြစ်ပါသည်။
        </p>
        <p>
          <code>:=</code> declaration တွင် variable <code>v</code> သည် ယခင်က declare လုပ်ထားပြီးသည်ဖြစ်စေ ပေါ်နိုင်ပါသည်၊ အောက်ပါအခြေအနေများနှင့် ကိုက်ညီလျှင် -
        </p>
        <ul>
          <li>ဤ declaration သည် <code>v</code> ၏ လက်ရှိ declaration နှင့် တူညီသော scope အတွင်း ဖြစ်ရမည် (အကယ်၍ <code>v</code> သည် outer scope တွင် declare လုပ်ထားပြီးပါက declaration အသစ်သည် variable အသစ်တစ်ခု ဖန်တီးမည် §)</li>
          <li>initialization ထဲမှ သက်ဆိုင်ရာ တန်ဖိုးသည် <code>v</code> သို့ assign လုပ်နိုင်သော type ဖြစ်ရမည်</li>
          <li>declaration သည် အနည်းဆုံး variable အသစ်တစ်ခုကိုမူ ဖန်တီးရမည် ဖြစ်ပါသည်</li>
        </ul>
        <p>
          ဤ ထူးခြားသော property သည် pure pragmatism ဖြစ်ပြီး၊ ဥပမာအားဖြင့် ရှည်လျားသော if-else chain တွင် <code>err</code> တန်ဖိုး တစ်ခုတည်းကို အသုံးပြုရန် လွယ်ကူစေပါသည်။ ၎င်းကို မကြာခဏ တွေ့ရမည် ဖြစ်ပါသည်။
        </p>
        <p>
          <small>§ Go တွင် function parameters နှင့် return values များ၏ scope သည် function body နှင့် တူညီသည်ကို မှတ်သားထားသင့်ပါသည်၊ ၎င်းတို့သည် body ကို ဝိုင်းထားသော braces များ၏ အပြင်ဘက်တွင် lexically ပေါ်နေသော်လည်း ဖြစ်ပါသည်။</small>
        </p>


        <h3 id="for">For</h3>
        <p>
          Go ၏ <code>for</code> loop သည် C နှင့် ဆင်တူသော်လည်း မတူညီပါ။ ၎င်းသည် <code>for</code> နှင့် <code>while</code> ကို ပေါင်းစည်းထားပြီး <code>do-while</code> မရှိပါ။ ပုံစံ ၃ မျိုး ရှိပါသည်။
        </p>
        <pre><code>{`// Like a C for
for init; condition; post { ... }

// Like a C while
for condition { ... }

// Like a C for(;;)
for { ... }`}</code></pre>
        <p>
          Short declarations များသည် loop အတွင်း index variable များကို သတ်မှတ်ရန် လွယ်ကူစေပါသည်။
        </p>
        <pre><code>{`sum := 0
for i := 0; i < 10; i++ {
    sum += i
}`}</code></pre>
        <p>
          Array, slice, string, map သို့မဟုတ် channel များကို loop ပတ်လိုပါက <code>range</code> clause ကို အသုံးပြုနိုင်ပါသည်။
        </p>
        <pre><code>{`for key, value := range oldMap {
    newMap[key] = value
}`}</code></pre>
        <p>
          အကယ်၍ item တစ်ခုတည်းသာ လိုအပ်ပါက ဒုတိယ item ကို ချန်လှပ်ထားနိုင်ပါသည်။
        </p>
        <pre><code>{`for key := range m {
    if key.expired() {
        delete(m, key)
    }
}`}</code></pre>
        <p>
          အကယ်၍ value သာ လိုအပ်ပါက blank identifier <code>(_)</code> ကို အသုံးပြုနိုင်ပါသည်။
        </p>
        <pre><code>{`sum := 0
for _, value := range array {
    sum += value
}`}</code></pre>
        <p>
          String များအတွက် <code>range</code> သည် Unicode code points များကို parsing လုပ်ပေးပါသည်။ Erroneous encoding ဖြစ်ပါက တစ် byte စားပြီး U+FFFD replacement rune ကို ထုတ်ပေးပါသည်။
        </p>
        <pre><code>{`for pos, char := range "日本\\x80語" { // \\x80 is illegal UTF-8
    fmt.Printf("character %#U starts at byte position %d\\n", char, pos)
}`}</code></pre>
        <p>
          နောက်ဆုံးအနေဖြင့် Go တွင် comma operator မရှိပါ၊ <code>++</code> နှင့် <code>--</code> တို့သည် expression မဟုတ်ဘဲ statement များ ဖြစ်ကြပါသည်။ ထို့ကြောင့် <code>for</code> တွင် variable အများအပြားကို အသုံးပြုလိုပါက parallel assignment ကို သုံးရပါမည်။
        </p>
        <pre><code>{`// Reverse a
for i, j := 0, len(a)-1; i < j; i, j = i+1, j-1 {
    a[i], a[j] = a[j], a[i]
}`}</code></pre>

        <h3 id="switch">Switch</h3>
        <p>
          Go ၏ <code>switch</code> သည် C ထက် ပို၍ ယေဘုယျကျပါသည်။ Expression များသည် constants သို့မဟုတ် integers ဖြစ်ရန် မလိုပါ။ Cases များကို match တစ်ခု တွေ့သည်အထိ အပေါ်မှ အောက်သို့ စစ်ဆေးသွားပြီး၊ အကယ်၍ switch တွင် expression မရှိပါက <code>true</code> ပေါ်တွင် switch လုပ်ပါသည်။ ထို့ကြောင့် if-else-if-else chain ကို switch အနေဖြင့် ရေးသားခြင်းမှာ ဖြစ်နိုင်ပြီး idiomatic လည်း ဖြစ်ပါသည်။
        </p>
        <pre><code>{`func unhex(c byte) byte {
    switch {
    case '0' <= c && c <= '9':
        return c - '0'
    case 'a' <= c && c <= 'f':
        return c - 'a' + 10
    case 'A' <= c && c <= 'F':
        return c - 'A' + 10
    }
    return 0
}`}</code></pre>
        <p>
          Go တွင် automatic fall through မရှိပါ၊ သို့သော် cases များကို comma-separated lists အနေဖြင့် ရေးသားနိုင်ပါသည်။
        </p>
        <pre><code>{`func shouldEscape(c byte) bool {
    switch c {
    case ' ', '?', '&', '=', '#', '+', '%':
        return true
    }
    return false
}`}</code></pre>
        <p>
          Go တွင် break statements များသည် အခြား C-like languages များလောက် မသုံးလေ့မရှိပေမယ့်လည်း switch ကို စောစောပိုင်း ရပ်တန့်ရန် အသုံးပြုနိုင်ပါသည်။ သို့သော် တစ်ခါတစ်ရံတွင် switch မဟုတ်ဘဲ surrounding loop ကို ရပ်တန့်ရန် လိုအပ်ပါသည်။ Go တွင် ၎င်းကို loop ပေါ်တွင် label တစ်ခု ထားရှိပြီး အဆိုပါ label သို့ "breaking" လုပ်ခြင်းဖြင့် ပြုလုပ်နိုင်ပါသည်။ ဤ ဥပမာသည် နှစ်မျိုးလုံးကို ပြသပါသည်။
        </p>
        <pre><code>{`Loop:
    for n := 0; n < len(src); n += size {
        switch {
        case src[n] < sizeOne:
            if validateOnly {
                break
            }
            size = 1
            update(src[n])

        case src[n] < sizeTwo:
            if n+1 >= len(src) {
                err = errShortInput
                break Loop
            }
            if validateOnly {
                break
            }
            size = 2
            update(src[n] + src[n+1]<<shift)
        }
    }`}</code></pre>
        <p>
          <code>continue</code> statement သည်လည်း optional label ကို လက်ခံသော်လည်း loops များတွင်သာ အသုံးပြုနိုင်ပါသည်။
        </p>
        <p>
          ဤ section ကို အဆုံးသတ်ရန်၊ ဤနေရာတွင် switch statements နှစ်ခု အသုံးပြုသော byte slices အတွက် comparison routine တစ်ခုကို ပြသပါမည်။
        </p>
        <pre><code>{`// Compare returns an integer comparing the two byte slices,
// lexicographically.
// The result will be 0 if a == b, -1 if a < b, and +1 if a > b
func Compare(a, b []byte) int {
    for i := 0; i < len(a) && i < len(b); i++ {
        switch {
        case a[i] > b[i]:
            return 1
        case a[i] < b[i]:
            return -1
        }
    }
    switch {
    case len(a) > len(b):
        return 1
    case len(a) < len(b):
        return -1
    }
    return 0
}`}</code></pre>

        <h3 id="type-switch">Type switch</h3>
        <p>
          <code>switch</code> ကို interface variable တစ်ခု၏ dynamic type ကို သိရှိရန်အတွက်လည်း အသုံးပြုနိုင်ပါသည်။ ထိုသို့သော type switch များတွင် type assertion ၏ syntax ကို အသုံးပြုပြီး တွန့်ကွင်းအတွင်း၌ <code>type</code> keyword ကို ထည့်သွင်းရပါမည်။ အကယ်၍ switch သည် expression တစ်ခုတွင် variable တစ်ခုကို declare လုပ်ထားပါက အဆိုပါ variable သည် case တစ်ခုချင်းစီတွင် သက်ဆိုင်ရာ type ကို ရရှိမည် ဖြစ်ပါသည်။ ထိုသို့သော cases များတွင် name ကို ပြန်လည်အသုံးပြုခြင်းသည်လည်း idiomatic ဖြစ်ပြီး၊ အမှန်တကယ်တွင် case တစ်ခုချင်းစီတွင် name တူသော်လည်း type မတူသော variable အသစ်တစ်ခုကို declare လုပ်ခြင်း ဖြစ်ပါသည်။
        </p>
        <pre><code>{`var t interface{}
t = functionOfSomeType()
switch t := t.(type) {
default:
    fmt.Printf("unexpected type %T\\n", t)
case bool:
    fmt.Printf("boolean %t\\n", t)
case int:
    fmt.Printf("integer %d\\n", t)
case *bool:
    fmt.Printf("pointer to boolean %t\\n", t)
case *int:
    fmt.Printf("pointer to integer %d\\n", t)
}`}</code></pre>
      </section>

      <section id="functions">
        <h2>Functions</h2>

        <h3 id="multiple-return">Multiple return values</h3>
        <p>
          Go ၏ ထူးခြားသော အချက်တစ်ခုမှာ function နှင့် method များသည် ရလဒ်တန်ဖိုး (return values) တစ်ခုထက်မက ပေးနိုင်ခြင်း ဖြစ်ပါသည်။ ဤ form သည် C programs များရှိ အဆင်မပြေသော idioms အချို့ကို ပိုမိုကောင်းမွန်အောင် ပြုလုပ်နိုင်ပါသည် - EOF အတွက် <code>-1</code> ကဲ့သို့ in-band error returns များနှင့် address ဖြင့် pass လုပ်ထားသော argument ကို modify လုပ်ခြင်း တို့ ဖြစ်ပါသည်။
        </p>
        <p>
          C တွင် write error ကို negative count ဖြင့် signal ပေးပြီး error code ကို volatile location တစ်ခုတွင် ဖုံးကွယ်ထားပါသည်။ Go တွင်မူ <code>Write</code> သည် count နှင့် error ကို return ပြန်နိုင်ပါသည် - "ဟုတ်ကဲ့၊ bytes အချို့ ရေးထားပါသည်၊ သို့သော် အားလုံး မဟုတ်ပါ၊ device ပြည့်သွားလို့ပါ"။ <code>os</code> package မှ files ပေါ်ရှိ <code>Write</code> method ၏ signature မှာ -
        </p>
        <pre><code>func (file *File) Write(b []byte) (n int, err error)</code></pre>
        <p>
          ဖြစ်ပြီး documentation တွင် ဖော်ပြထားသည့်အတိုင်း <code>n != len(b)</code> ဖြစ်သောအခါ bytes အရေအတွက်နှင့် non-nil error ကို return ပြန်ပါသည်။ ဤသည်မှာ common style ဖြစ်ပါသည်၊ error handling section တွင် ဥပမာများ ပိုမိုကြည့်ရှုနိုင်ပါသည်။
        </p>
        <p>
          ဆင်တူသော approach တစ်ခုက reference parameter ကို simulate လုပ်ရန် return value သို့ pointer pass လုပ်ရန် မလိုအပ်တော့စေပါ။ ဤနေရာတွင် byte slice ရှိ position တစ်ခုမှ number တစ်ခုကို ရယူပြီး number နှင့် next position ကို return ပြန်သော ရိုးရှင်းသော function တစ်ခုကို ပြသပါမည်။
        </p>
        <pre><code>{`func nextInt(b []byte, i int) (int, int) {
    for ; i < len(b) && !isDigit(b[i]); i++ {
    }
    x := 0
    for ; i < len(b) && isDigit(b[i]); i++ {
        x = x*10 + int(b[i]) - '0'
    }
    return x, i
}`}</code></pre>
        <p>
          ၎င်းကို input slice <code>b</code> ရှိ numbers များကို scan ရန် ဤသို့ အသုံးပြုနိုင်ပါသည် -
        </p>
        <pre><code>{`for i := 0; i < len(b); {
    x, i = nextInt(b, i)
    fmt.Println(x)
}`}</code></pre>

        <h3 id="named-results">Named result parameters</h3>
        <p>
          Go function တစ်ခု၏ return သို့မဟုတ် result "parameters" များကို အမည်များ ပေးနိုင်ပြီး ၎င်းတို့ကို incoming parameters များကဲ့သို့ ပုံမှန် variables များအဖြစ် အသုံးပြုနိုင်ပါသည်။ အမည်ပေးထားသောအခါ function စတင်ချိန်တွင် ၎င်းတို့၏ types အတွက် zero values များဖြင့် initialize လုပ်ထားပြီး ဖြစ်ပါသည်။ အကယ်၍ function က arguments မပါဘဲ return statement ကို execute လုပ်ပါက result parameters များ၏ လက်ရှိတန်ဖိုးများကို returned values များအဖြစ် အသုံးပြုပါသည်။
        </p>
        <p>
          အမည်များသည် မဖြစ်မနေ မဟုတ်သော်လည်း code ကို ပိုတိုပြီး ရှင်းလင်းစေနိုင်ပါသည် - ၎င်းတို့သည် documentation ဖြစ်ပါသည်။ <code>nextInt</code> ၏ results များကို အမည်ပေးလိုက်ပါက ပြန်လာသော <code>int</code> တစ်ခုချင်းစီသည် မည်သည့်အရာဖြစ်သည်ကို ထင်ရှားလာပါသည်။
        </p>
        <pre><code>{`func nextInt(b []byte, pos int) (value, nextPos int) {`}</code></pre>
        <p>
          Named results များသည် initialized ဖြစ်ပြီး unadorned return နှင့် ချိတ်ဆက်ထားသောကြောင့် ရိုးရှင်းစေရုံသာမက ရှင်းလင်းစေပါသည်။ ဤနေရာတွင် ၎င်းတို့ကို ကောင်းစွာ အသုံးပြုထားသော <code>io.ReadFull</code> ၏ version တစ်ခုကို ပြသပါမည် -
        </p>
        <pre><code>{`func ReadFull(r Reader, buf []byte) (n int, err error) {
    for len(buf) > 0 && err == nil {
        var nr int
        nr, err = r.Read(buf)
        n += nr
        buf = buf[nr:]
    }
    return
}`}</code></pre>


        <h3 id="defer">Defer</h3>
        <p>
          Go ၏ <code>defer</code> statement သည် ၎င်းပါဝင်သော function မပြီးဆုံးမီ (return မလုပ်မီ) ချက်ချင်းလုပ်ဆောင်ရမည့် function call တစ်ခုကို ကြိုတင်သတ်မှတ်ထားခြင်း ဖြစ်ပါသည်။ ၎င်းသည် မည်သည့်လမ်းကြောင်းမှ return ပြန်သည်ဖြစ်စေ resource များကို ပြန်လည်လွှတ်ပေးရန် (release) အတွက် အလွန်ထိရောက်သော နည်းလမ်းဖြစ်ပါသည်။
        </p>
        <pre><code>{`// Contents returns the file's contents as a string.
func Contents(filename string) (string, error) {
    f, err := os.Open(filename)
    if err != nil {
        return "", err
    }
    defer f.Close()  // f.Close will run when we're finished.

    var result []byte
    buf := make([]byte, 100)
    for {
        n, err := f.Read(buf[0:])
        result = append(result, buf[0:n]...)
        if err != nil {
            if err == io.EOF {
                break
            }
            return "", err  // f.Close will run if we return here.
        }
    }
    return string(result), nil // f.Close will run if we return here.
}`}</code></pre>
        <p>
          <code>defer</code> လုပ်ထားသော function ၏ arguments များသည် <code>defer</code> statement ကို လုပ်ဆောင်ချိန်မှာပင် သတ်မှတ်ပြီး ဖြစ်ပါသည်။ ထို့ကြောင့် function execute လုပ်ချိန်တွင် တန်ဖိုးပြောင်းလဲသွားခြင်းအတွက် စိတ်ပူရန် မလိုပါ။
        </p>
        <pre><code>{`func trace(s string) string {
    fmt.Println("entering:", s)
    return s
}

func un(s string) {
    fmt.Println("leaving:", s)
}

func a() {
    defer un(trace("a"))
    fmt.Println("in a")
}

func b() {
    defer un(trace("b"))
    fmt.Println("in b")
    a()
}

func main() {
    b()
}`}</code></pre>
        <p>
          အထက်ပါ code ကို run ပါက အောက်ပါအတိုင်း ထွက်ပေါ်လာမည် ဖြစ်ပါသည်။
        </p>
        <pre><code>{`entering: b
in b
entering: a
in a
leaving: a
leaving: b`}</code></pre>
        <p>
          Defer လုပ်ထားသော functions များသည် LIFO (Last In First Out) order အတိုင်း အလုပ်လုပ်ပါသည်။
        </p>
        <pre><code>{`for i := 0; i < 5; i++ {
    defer fmt.Printf("%d ", i)
}`}</code></pre>
        <p>
          ဤ loop သည် <code>4 3 2 1 0</code> ဟု print ထုတ်ပေးပါမည်။
        </p>
      </section>

      <section id="data">
        <h2>Data</h2>

        <h3 id="allocation-new">Allocation with new</h3>
        <p>
          Go တွင် memory allocation အတွက် primitive နှစ်ခုရှိပါသည် - <code>new</code> နှင့် <code>make</code> တို့ ဖြစ်ပါသည်။ ၎င်းတို့သည် ကွဲပြားသော အရာများကို လုပ်ဆောင်ကြပြီး မတူညီသော types များအတွက် အသုံးပြုကြပါသည်။ <code>new</code> အကြောင်း အရင်ပြောရလျှင် ၎င်းသည် memory ကို allocate လုပ်ပေးသော်လည်း အခြားဘာသာစကားများကဲ့သို့ initialize မလုပ်ပေးပါ၊ တန်ဖိုးများကို zero သာ ထားပေးပါသည်။ တစ်နည်းအားဖြင့် <code>new(T)</code> သည် type <code>T</code> အတွက် zeroed storage ကို allocate လုပ်ပေးပြီး ၎င်း၏ address (type <code>*T</code>) ကို return ပြန်ပေးပါသည်။ Go ၏ terminology အနေဖြင့် ဆိုရလျှင် ၎င်းသည် type <code>T</code> ၏ value အသစ်တစ်ခုဆီသို့ pointer တစ်ခုကို ပေးခြင်း ဖြစ်ပါသည်။
        </p>
        <p>
          <code>new</code> သည် zeroed memory ကို ပေးခြင်းဖြစ်သောကြောင့်၊ သင်၏ data structures များကို ရေးသားရာတွင် type တစ်ခုစီ၏ zero value သည် နောက်ထပ် initialization မလိုဘဲ အသုံးပြုရန် အဆင်သင့်ဖြစ်နေစေရန် (ready to use) တည်ဆောက်ခြင်းမှာ ကောင်းမွန်သော အလေ့အထ ဖြစ်ပါသည်။ ဥပမာအားဖြင့် <code>bytes.Buffer</code> ၏ documentation တွင် "the zero value for Buffer is an empty buffer ready to use" ဟု ဖော်ပြထားပါသည်။ ထို့အတူ <code>sync.Mutex</code> တွင်လည်း explicit constructor သို့မဟုတ် <code>Init</code> method မပါဝင်ပါ။ ယင်းအစား <code>sync.Mutex</code> အတွက် zero value သည် unlocked mutex တစ်ခုအဖြစ် သတ်မှတ်ထားခြင်း ဖြစ်ပါသည်။
        </p>
        <p>
          Zero-value-is-good property သည် transitive ဖြစ်ပါသည်။ အောက်ပါ type declaration ကို ကြည့်ပါ။
        </p>
        <pre><code>{`type SyncedBuffer struct {
    lock    sync.Mutex
    buffer  bytes.Buffer
}`}</code></pre>
        <p>
          <code>SyncedBuffer</code> ၏ values များသည် allocation သို့မဟုတ် declaration လုပ်ပြီးသည်နှင့် အသုံးပြုရန် အဆင်သင့် ဖြစ်နေမည် ဖြစ်ပါသည်။ အောက်ပါ ဥပမာတွင် <code>p</code> နှင့် <code>v</code> နှစ်ခုလုံးမှာ ထပ်မံပြင်ဆင်စရာ မလိုဘဲ မှန်ကန်စွာ အလုပ်လုပ်ပါမည်။
        </p>
        <pre><code>{`p := new(SyncedBuffer)  // type *SyncedBuffer
var v SyncedBuffer      // type  SyncedBuffer`}</code></pre>

        <h3 id="constructors">Constructors and composite literals</h3>
        <p>
          တစ်ခါတစ်ရံတွင် zero value သည် မလုံလောက်ပါ၊ ထို့ကြောင့် initializing constructor လိုအပ်ပါသည်။ <code>os</code> package မှ ဆင်းသက်လာသော ဤ ဥပမာတွင် ပြသထားသကဲ့သို့ ဖြစ်ပါသည်။
        </p>
        <pre><code>{`func NewFile(fd int, name string) *File {
    if fd < 0 {
        return nil
    }
    f := new(File)
    f.fd = fd
    f.name = name
    f.dirinfo = nil
    f.nepipe = 0
    return f
}`}</code></pre>
        <p>
          ထိုနေရာတွင် boilerplate အများအပြား ရှိနေပါသည်။ ၎င်းကို composite literal ကို အသုံးပြု၍ ရိုးရှင်းအောင် ပြုလုပ်နိုင်ပါသည်။ Composite literal သည် evaluate လုပ်တိုင်း instance အသစ်တစ်ခု ဖန်တီးသော expression တစ်ခု ဖြစ်ပါသည်။
        </p>
        <pre><code>{`func NewFile(fd int, name string) *File {
    if fd < 0 {
        return nil
    }
    f := File{fd, name, nil, 0}
    return &f
}`}</code></pre>
        <p>
          C နှင့် မတူသည်မှာ local variable ၏ address ကို return ပြန်ခြင်းသည် လုံးဝ ပြဿနာ မရှိပါ။ Variable နှင့် ဆက်နွယ်သော storage သည် function return ပြန်ပြီးသည့်နောက်တွင်လည်း ရှိနေပါသည်။ တကယ်တမ်းတွင် composite literal ၏ address ကို ယူခြင်းသည် evaluate လုပ်တိုင်း fresh instance တစ်ခုကို allocate လုပ်ပေးပါသည်။ ထို့ကြောင့် နောက်ဆုံး စာကြောင်း နှစ်ခုကို ပေါင်းစည်းနိုင်ပါသည်။
        </p>
        <pre><code>{`return &File{fd, name, nil, 0}`}</code></pre>
        <p>
          Composite literal ၏ fields များကို အစဉ်လိုက် စီထားပြီး အားလုံး ပါဝင်ရမည် ဖြစ်ပါသည်။ သို့သော် elements များကို <em>field:value</em> pairs အဖြစ် explicit ဖော်ပြခြင်းဖြင့် initializers များသည် မည်သည့် order ဖြင့်မဆို ပေါ်နိုင်ပြီး မပါဝင်သော fields များသည် ၎င်းတို့၏ သက်ဆိုင်ရာ zero values များ ဖြစ်သွားမည် ဖြစ်ပါသည်။ ထို့ကြောင့် ဤသို့ ရေးသားနိုင်ပါသည် -
        </p>
        <pre><code>{`return &File{fd: fd, name: name}`}</code></pre>
        <p>
          Limiting case အနေဖြင့် composite literal တွင် fields လုံးဝ မပါဝင်ပါက type အတွက် zero value ကို ဖန်တီးပေးပါသည်။ <code>new(File)</code> နှင့် <code>&amp;File&#123;&#125;</code> expressions များသည် equivalent ဖြစ်ပါသည်။
        </p>
        <p>
          Composite literals များကို arrays, slices နှင့် maps များအတွက်လည်း ဖန်တီးနိုင်ပြီး field labels များသည် သင့်လျော်သလို indices သို့မဟုတ် map keys များ ဖြစ်ပါသည်။ ဤ ဥပမာများတွင် <code>Enone</code>, <code>Eio</code> နှင့် <code>Einval</code> ၏ တန်ဖိုးများ မည်သို့ပင် ဖြစ်စေ (distinct ဖြစ်နေသမျှ) initializations များ အလုပ်လုပ်ပါသည်။
        </p>
        <pre><code>{`a := [...]string   {Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
s := []string      {Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
m := map[int]string{Enone: "no error", Eio: "Eio", Einval: "invalid argument"}`}</code></pre>


        <h3 id="allocation-make">Allocation with make</h3>
        <p>
          Allocation သို့ ပြန်သွားကြပါစို့။ Built-in function <code>make(T, args)</code> သည် <code>new(T)</code> နှင့် မတူသော ရည်ရွယ်ချက်ဖြင့် အသုံးပြုပါသည်။ ၎င်းသည် slices, maps နှင့် channels များကိုသာ ဖန်တီးပြီး initialize လုပ်ထားပြီးသော (zeroed မဟုတ်သော) <code>T</code> type (<code>*T</code> မဟုတ်) တန်ဖိုးကို return ပြန်ပါသည်။ ဤကွာခြားမှု၏ အကြောင်းရင်းမှာ ဤ type သုံးခုသည် အသုံးမပြုမီ initialize လုပ်ထားရမည့် data structures များသို့ references များ ဖြစ်နေသောကြောင့် ဖြစ်ပါသည်။ ဥပမာအားဖြင့် slice တစ်ခုသည် data (array အတွင်း) သို့ pointer တစ်ခု၊ length နှင့် capacity တို့ပါဝင်သော three-item descriptor တစ်ခု ဖြစ်ပြီး ထို items များကို initialize မလုပ်မချင်း slice သည် nil ဖြစ်နေပါသည်။ Slices, maps နှင့် channels များအတွက် <code>make</code> သည် internal data structure ကို initialize လုပ်ပြီး တန်ဖိုးကို အသုံးပြုရန် ပြင်ဆင်ပေးပါသည်။ ဥပမာ -
        </p>
        <pre><code>make([]int, 10, 100)</code></pre>
        <p>
          သည် ints 100 ခု ပါသော array တစ်ခုကို allocate လုပ်ပြီး array ၏ ပထမ elements 10 ခုကို ညွှန်ပြသော length 10 နှင့် capacity 100 ရှိသည့် slice structure ကို ဖန်တီးပေးပါသည်။ (Slice ဖန်တီးသောအခါ capacity ကို ချန်လှပ်ထားနိုင်ပါသည်၊ slices section တွင် ပိုမိုကြည့်ရှုပါ။) ဆန့်ကျင်ဘက်မှာ <code>new([]int)</code> သည် အသစ် allocate လုပ်ထားသော zeroed slice structure တစ်ခုသို့ pointer တစ်ခုကို return ပြန်ပါသည် - ဆိုလိုသည်မှာ nil slice value သို့ pointer တစ်ခု ဖြစ်ပါသည်။
        </p>
        <p>
          ဤ ဥပမာများသည် new နှင့် make အကြား ခြားနားချက်ကို ပြသပါသည်။
        </p>
        <pre><code>{`var p *[]int = new([]int)       // allocates slice structure; *p == nil; rarely useful
var v  []int = make([]int, 100) // the slice v now refers to a new array of 100 ints

// Unnecessarily complex:
var p *[]int = new([]int)
*p = make([]int, 100, 100)

// Idiomatic:
v := make([]int, 100)`}</code></pre>
        <p>
          <code>make</code> သည် maps, slices နှင့် channels များအတွက်သာ သက်ဆိုင်ပြီး pointer return မပြန်သည်ကို မှတ်သားပါ။ Explicit pointer ရရှိလိုပါက <code>new</code> ဖြင့် allocate လုပ်ပါ သို့မဟုတ် variable ၏ address ကို explicitly ယူပါ။
        </p>


        <h3 id="arrays">Arrays</h3>
        <p>
          Arrays များသည် memory ၏ detailed layout ကို plan လုပ်သောအခါ အသုံးဝင်ပြီး တစ်ခါတစ်ရံ allocation ကို ရှောင်ကျဉ်ရာတွင်လည်း ကူညီနိုင်ပါသည်။ သို့သော် ၎င်းတို့သည် အဓိကအားဖြင့် slices (နောက် section ၏ ခေါင်းစဉ်) အတွက် building block ဖြစ်ပါသည်။ ထို topic အတွက် အခြေခံချရန် arrays အကြောင်း အနည်းငယ် ပြောပါမည်။
        </p>
        <p>
          Go နှင့် C တွင် arrays အလုပ်လုပ်ပုံ ကွဲပြားမှုများ ရှိပါသည်။ Go တွင် -
        </p>
        <ul>
          <li>Arrays များသည် values များ ဖြစ်ကြပါသည်။ Array တစ်ခုကို အခြားတစ်ခုသို့ assign လုပ်ပါက elements အားလုံး copy သွားမည် ဖြစ်ပါသည်။</li>
          <li>အထူးသဖြင့် array တစ်ခုကို function သို့ pass လုပ်ပါက ၎င်းသည် pointer မဟုတ်ဘဲ array ၏ copy ကို ရရှိမည် ဖြစ်ပါသည်။</li>
          <li>Array ၏ size သည် ၎င်း၏ type ၏ အစိတ်အပိုင်း ဖြစ်ပါသည်။ <code>[10]int</code> နှင့် <code>[20]int</code> types များသည် ကွဲပြားပါသည်။</li>
        </ul>
        <p>
          Value property သည် အသုံးဝင်နိုင်သော်လည်း စရိတ်ကြီးနိုင်ပါသည်။ C-like behavior နှင့် efficiency လိုချင်ပါက array သို့ pointer pass နိုင်ပါသည်။
        </p>
        <pre><code>{`func Sum(a *[3]float64) (sum float64) {
    for _, v := range *a {
        sum += v
    }
    return
}

array := [...]float64{7.0, 8.5, 9.1}
x := Sum(&array)  // Note the explicit address-of operator`}</code></pre>
        <p>
          သို့သော် ဤ style ပင် idiomatic Go မဟုတ်ပါ။ Slices များကို အသုံးပြုပါ။
        </p>


        <h3 id="slices">Slices</h3>
        <p>
          Slices များသည် arrays များကို wrap လုပ်၍ data sequences များအတွက် ပိုမို general, powerful နှင့် convenient interface တစ်ခုကို ပေးစွမ်းပါသည်။ Transformation matrices ကဲ့သို့ explicit dimension ရှိသော items များမှလွဲ၍ Go တွင် array programming အများစုကို simple arrays များထက် slices များဖြင့် လုပ်ဆောင်ပါသည်။
        </p>
        <p>
          Slices များသည် underlying array တစ်ခုသို့ references များ ကိုင်ထားပြီး slice တစ်ခုကို အခြားတစ်ခုသို့ assign လုပ်ပါက နှစ်ခုစလုံးသည် တူညီသော array သို့ refer လုပ်ပါသည်။ Function တစ်ခုသည် slice argument ကို ယူပြီး ၎င်း၏ elements များကို ပြောင်းလဲပါက caller အတွက် မြင်ရမည် ဖြစ်ပါသည် - underlying array သို့ pointer pass ခြင်းနှင့် သဘောတူညီပါသည်။ ထို့ကြောင့် <code>Read</code> function သည် pointer နှင့် count အစား slice argument ကို လက်ခံနိုင်ပါသည်။ Slice အတွင်းရှိ length သည် ဖတ်ရမည့် data ပမာဏ၏ upper limit ကို သတ်မှတ်ပေးပါသည်။ ဤနေရာတွင် <code>os</code> package ရှိ <code>File</code> type ၏ <code>Read</code> method signature ဖြစ်ပါသည် -
        </p>
        <pre><code>{`func (f *File) Read(buf []byte) (n int, err error)`}</code></pre>
        <p>
          Method သည် ဖတ်လိုက်သော bytes အရေအတွက်နှင့် error value (ရှိပါက) ကို return ပြန်ပါသည်။ ပိုကြီးသော buffer <code>buf</code> ၏ ပထမ 32 bytes ကိုသာ ဖတ်လိုပါက buffer ကို slice (ဤနေရာတွင် verb အဖြစ် သုံးသည်) လုပ်ပါ။
        </p>
        <pre><code>{`n, err := f.Read(buf[0:32])`}</code></pre>
        <p>
          ထိုသို့ slicing သည် common နှင့် efficient ဖြစ်ပါသည်။ တကယ်တော့ efficiency ကို ခဏထားပြီး အောက်ပါ snippet သည်လည်း buffer ၏ ပထမ 32 bytes ကို ဖတ်နိုင်ပါသည်။
        </p>
        <pre><code>{`var n int
var err error
for i := 0; i < 32; i++ {
    nbytes, e := f.Read(buf[i:i+1])  // Read one byte.
    n += nbytes
    if nbytes == 0 || e != nil {
        err = e
        break
    }
}`}</code></pre>
        <p>
          Slice ၏ length သည် underlying array ၏ limits အတွင်း fit ဖြစ်နေသမျှ ပြောင်းလဲနိုင်ပါသည် - ၎င်းကို ကိုယ့်ကိုယ်ကိုယ် slice တစ်ခုသို့ assign လုပ်ပါ။ Slice ၏ capacity ကို built-in function <code>cap</code> ဖြင့် access လုပ်နိုင်ပြီး slice ယူနိုင်သော maximum length ကို report လုပ်ပါသည်။ ဤနေရာတွင် slice တစ်ခုသို့ data append လုပ်သော function တစ်ခုကို ပြသပါမည်။ Data သည် capacity ကို ကျော်လွန်ပါက slice ကို reallocate လုပ်ပါသည်။ ရလဒ် slice ကို return ပြန်ပါသည်။ Function သည် <code>len</code> နှင့် <code>cap</code> ကို nil slice အပေါ် apply လုပ်သောအခါ legal ဖြစ်ပြီး 0 ကို return ပြန်သည်ဆိုသည့် fact ကို အသုံးပြုပါသည်။
        </p>
        <pre><code>{`func Append(slice, data []byte) []byte {
    l := len(slice)
    if l + len(data) > cap(slice) {  // reallocate
        // Allocate double what's needed, for future growth.
        newSlice := make([]byte, (l+len(data))*2)
        // The copy function is predeclared and works for any slice type.
        copy(newSlice, slice)
        slice = newSlice
    }
    slice = slice[0:l+len(data)]
    copy(slice[l:], data)
    return slice
}`}</code></pre>
        <p>
          Slice ကို afterwards return ပြန်ရမည် ဖြစ်ပါသည်၊ အဘယ်ကြောင့်ဆိုသော် <code>Append</code> သည် slice ၏ elements များကို modify လုပ်နိုင်သော်လည်း slice ကိုယ်တိုင် (pointer, length နှင့် capacity တို့ကို ကိုင်ထားသော run-time data structure) သည် by value pass လုပ်ထားသောကြောင့် ဖြစ်ပါသည်။
        </p>


        <h3 id="two-dimensional-slices">Two-dimensional slices</h3>
        <p>
          Go ၏ array များနှင့် slice များသည် one-dimensional များ ဖြစ်ကြပါသည်။ 2D array သို့မဟုတ် slice တစ်ခု ပြုလုပ်ရန်အတွက် array-of-arrays သို့မဟုတ် slice-of-slices အနေဖြင့် အောက်ပါအတိုင်း သတ်မှတ်ရန် လိုအပ်ပါသည်။
        </p>
        <pre><code>{`type Transform [3][3]float64  // A 3x3 array, really an array of arrays.
type LinesOfText [][]byte     // A slice of byte slices.`}</code></pre>
        <p>
          Slice များသည် variable-length ဖြစ်သောကြောင့် inner slice တစ်ခုချင်းစီတွင် မတူညီသော အရှည် (length) များ ရှိနိုင်ပါသည်။ ဥပမာအားဖြင့် <code>LinesOfText</code> တွင် စာကြောင်းတစ်ကြောင်းချင်းစီ၌ သီးခြား အရှည်များ ရှိနိုင်သည့် အခြေအနေမျိုး ဖြစ်ပါသည်။
        </p>
        <pre><code>{`text := LinesOfText{
    []byte("Now is the time"),
    []byte("for all good gophers"),
    []byte("to bring some fun to the party."),
}`}</code></pre>
        <p>
          တစ်ခါတစ်ရံတွင် 2D slice တစ်ခုကို allocate လုပ်ရန် လိုအပ်တတ်ပါသည်။ ဥပမာ - pixels များကို process လုပ်သောအခါမျိုး ဖြစ်ပါသည်။ ၎င်းကို လုပ်ဆောင်ရန် နည်းလမ်းနှစ်မျိုး ရှိပါသည်။ တစ်ခုမှာ slice တစ်ခုချင်းစီကို သီးခြား allocate လုပ်ခြင်းဖြစ်ပြီး၊ အခြားတစ်ခုမှာ array တစ်ခုတည်းကို allocate လုပ်ပြီး individual slices များဖြင့် ခွဲယူခြင်း (pointing) ဖြစ်ပါသည်။ သင်၏ application အပေါ် မူတည်၍ ရွေးချယ်နိုင်ပါသည်။ အကယ်၍ slices များသည် ကျုံ့နိုင်၊ ဆန့်နိုင် (grow or shrink) ရမည်ဆိုပါက နောက်စာကြောင်းကို ထပ်မရေးမိစေရန် သီးခြား allocate လုပ်သင့်ပါသည်။ အကယ်၍ အရွယ်အစား မပြောင်းလဲပါက allocation တစ်ကြိမ်တည်းဖြင့် ပြုလုပ်ခြင်းက ပိုမို ထိရောက် (efficient) နိုင်ပါသည်။
        </p>
        <p>
          ပထမနည်းလမ်း - စာကြောင်းတစ်ကြောင်းချင်းစီ allocate လုပ်ခြင်း:
        </p>
        <pre><code>{`// Allocate the top-level slice.
picture := make([][]uint8, YSize) // One row per unit of y.
// Loop over the rows, allocating the slice for each row.
for i := range picture {
    picture[i] = make([]uint8, XSize)
}`}</code></pre>
        <p>
          ဒုတိယနည်းလမ်း - Allocation တစ်ကြိမ်တည်းလုပ်ပြီး lines များခွဲထုတ်ခြင်း:
        </p>
        <pre><code>{`// Allocate the top-level slice, the same as before.
picture := make([][]uint8, YSize) // One row per unit of y.
// Allocate one large slice to hold all the pixels.
pixels := make([]uint8, XSize*YSize) // Has type []uint8 even though picture is [][]uint8.
// Loop over the rows, slicing each row from the front of the remaining pixels slice.
for i := range picture {
    picture[i], pixels = pixels[:XSize], pixels[XSize:]
}`}</code></pre>

        <h3 id="append-section">Append: An illustration</h3>
        <p>
          <code>append</code> built-in function ကို မည်သို့ အလုပ်လုပ်သည်ကို နားလည်ရန် အောက်ပါ ဥပမာကို ကြည့်နိုင်ပါသည်။
        </p>
        <pre><code>{`func Append(slice []int, data ...int) []int {
    l := len(slice)
    n := l + len(data)
    if n > cap(slice) { // reallocate လုပ်ရန် လိုအပ်သည်
        newSlice := make([]int, (n+1)*2)
        copy(newSlice, slice)
        slice = newSlice
    }
    slice = slice[0:n]
    copy(slice[l:n], data)
    return slice
}`}</code></pre>
        <p>
          အစစ်အမှန် <code>append</code> function သည် ဤထက် ပိုမို စွမ်းဆောင်နိုင်ပြီး မည်သည့် slice type အတွက်မဆို အလုပ်လုပ်ပါသည်။
        </p>
        <pre><code>type LinesOfText [][]byte</code></pre>

        <h3 id="maps">Maps</h3>
        <p>
          Maps သည် အဆင်ပြေပြီး အစွမ်းထက်သော built-in data structure တစ်ခုဖြစ်ပြီး type တစ်ခု (key) နှင့် အခြား type တစ်ခု (element သိုမဟုတ် value) ကို ချိတ်ဆက်ပေးပါသည်။ Equality operator သတ်မှတ်ထားသော မည်သည့် type ကိုမဆို key အဖြစ် အသုံးပြုနိုင်ပါသည်။ ဥပမာ - integers, floating point နှင့် complex numbers, strings, pointers, interfaces (dynamic type က equality ကို support လုပ်သရွေ့), structs နှင့် arrays တို့ဖြစ်ပါသည်။ Slices များကိုမူ equality သတ်မှတ်ထားခြင်း မရှိသောကြောင့် map keys အဖြစ် အသုံးမပြုနိုင်ပါ။ Slice များကဲ့သို့ပင် maps များသည် underlying data structure သို့ references များအဖြစ် တည်ရှိနေပါသည်။ အကယ်၍ သင်သည် map ကို logic ပြောင်းလဲစေသော function တစ်ခုသို့ ပေးပို့လိုက်ပါက caller ဆီတွင်လည်း အဆိုပါ အပြောင်းအလဲများကို မြင်တွေ့ရမည် ဖြစ်ပါသည်။
        </p>
        <p>
          Maps များကို ပုံမှန် composite literal syntax ဖြင့် colon-separated key-value pairs များ အသုံးပြု၍ တည်ဆောက်နိုင်သောကြောင့် initialization လုပ်ရန် လွယ်ကူပါသည်။
        </p>
        <pre><code>{`var timeZone = map[string]int{
    "UTC":  0*60*60,
    "EST": -5*60*60,
    "CST": -6*60*60,
    "MST": -7*60*60,
    "PST": -8*60*60,
}`}</code></pre>
        <p>
          Map values များကို assign လုပ်ခြင်းနှင့် fetch လုပ်ခြင်းသည် arrays နှင့် slices များအတိုင်းပင် ဖြစ်ပါသည်။ ကွဲပြားချက်မှာ index သည် integer ဖြစ်ရန် မလိုခြင်း ဖြစ်ပါသည်။
        </p>
        <pre><code>offset := timeZone["EST"]</code></pre>
        <p>
          Map ထဲတွင် မရှိသော key တစ်ခုကို fetch လုပ်ရန် ကြိုးစားပါက အဆိုပါ map ၏ entry type အတွက် သက်ဆိုင်ရာ zero value ကို ပြန်ပေးမည် ဖြစ်ပါသည်။ ဥပမာအားဖြင့် map တွင် integers များ ပါဝင်ပါက မရှိသော key ကို ရှာလျှင် 0 ပြန်ပေးမည် ဖြစ်ပါသည်။ Set (အစု) တစ်ခုကို value type အဖြစ် <code>bool</code> အသုံးပြုထားသော map ဖြင့် implement လုပ်နိုင်ပါသည်။ Map entry ကို <code>true</code> ဟု သတ်မှတ်ခြင်းဖြင့် value ကို set ထဲသို့ ထည့်နိုင်ပြီး indexing ဖြင့် ပြန်လည် စစ်ဆေးနိုင်ပါသည်။
        </p>
        <pre><code>{`attended := map[string]bool{
    "Ann": true,
    "Joe": true,
    // ...
}

if attended[person] { // person သည် map ထဲတွင် မရှိပါက false ဖြစ်မည်
    fmt.Println(person, "was at the meeting")
}`}</code></pre>
        <p>
          တစ်ခါတစ်ရံတွင် မရှိသော entry နှင့် zero value ကို ခွဲခြားရန် လိုအပ်ပါသည်။ ဥပမာ - "UTC" အတွက် entry ရှိနေခြင်းလား သို့မဟုတ် map ထဲမှာ လုံးဝမရှိလို့ 0 ဖြစ်နေတာလား။ ၎င်းကို multiple assignment ပုံစံဖြင့် ခွဲခြားနိုင်ပါသည်။
        </p>
        <pre><code>{`var seconds int
var ok bool
seconds, ok = timeZone[tz]`}</code></pre>
        <p>
          ယင်းကို "comma ok" idiom ဟု ခေါ်ဆိုပါသည်။ ဤဥပမာတွင် <code>tz</code> ရှိနေပါက <code>seconds</code> ကို သက်ဆိုင်ရာ တန်ဖိုး သတ်မှတ်ပေးမည် ဖြစ်ပြီး <code>ok</code> သည် <code>true</code> ဖြစ်လာပါမည်။ မရှိပါက <code>seconds</code> ကို zero သတ်မှတ်ပြီး <code>ok</code> သည် <code>false</code> ဖြစ်မည် ဖြစ်ပါသည်။ ၎င်းကို စုစည်းထားသော function တစ်ခုမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -
        </p>
        <pre><code>{`func offset(tz string) int {
    if seconds, ok := timeZone[tz]; ok {
        return seconds
    }
    log.Println("unknown time zone:", tz)
    return 0
}`}</code></pre>
        <p>
          Value ထဲက တန်ဖိုးကို စိတ်မဝင်စားဘဲ map ထဲမှာ ရှိမရှိကိုသာ စစ်ဆေးလိုပါက blank identifier <code>(_)</code> ကို အသုံးပြုနိုင်ပါသည်။
        </p>
        <pre><code>_, present := timeZone[tz]</code></pre>
        <p>
          Map entry တစ်ခုကို ဖျက်လိုပါက <code>delete</code> built-in function ကို အသုံးပြုပါ။ ၎င်း၏ argument များမှာ map နှင့် ဖျက်လိုသော key တို့ ဖြစ်ကြပါသည်။ Key သည် map ထဲမှာ မရှိလျှင်ပင် ဤသို့လုပ်ဆောင်ခြင်းမှာ ဘေးကင်းပါသည်။
        </p>
        <pre><code>delete(timeZone, "PDT")  // Now on Standard Time</code></pre>
        <h3 id="printing">Printing</h3>
        <p>
          Go ရှိ formatted printing သည် C ၏ <code>printf</code> family နှင့် ဆင်တူသော style ကို အသုံးပြုသော်လည်း ပိုမို rich နှင့် general ဖြစ်ပါသည်။ Functions များသည် <code>fmt</code> package တွင် တည်ရှိပြီး capitalized names များဖြင့် အမည်ပေးထားပါသည် - <code>fmt.Printf</code>, <code>fmt.Fprintf</code>, <code>fmt.Sprintf</code> စသဖြင့်။ String functions (<code>Sprintf</code> စသည်) များသည် ပေးထားသော buffer ကို ဖြည့်ခြင်းအစား string ကို return ပြန်ပါသည်။
        </p>
        <p>
          Format string ပေးရန် မလိုအပ်ပါ။ <code>Printf</code>, <code>Fprintf</code> နှင့် <code>Sprintf</code> တစ်ခုစီအတွက် အခြား function pair တစ်ခုစီ ရှိပါသည် - ဥပမာ <code>Print</code> နှင့် <code>Println</code>။ ဤ functions များသည် format string မယူဘဲ argument တစ်ခုစီအတွက် default format ကို generate လုပ်ပါသည်။ <code>Println</code> versions များသည် arguments များအကြား blank ထည့်ပြီး output အဆုံးတွင် newline ထည့်ကာ <code>Print</code> versions များသည် operand နှစ်ဖက်စလုံး string မဟုတ်မှသာ blanks ထည့်ပါသည်။ ဤ ဥပမာတွင် စာကြောင်းတစ်ခုစီသည် တူညီသော output ကို ထုတ်ပေးပါသည်။
        </p>
        <pre><code>{`fmt.Printf("Hello %d\\n", 23)
fmt.Fprint(os.Stdout, "Hello ", 23, "\\n")
fmt.Println("Hello", 23)
fmt.Println(fmt.Sprint("Hello ", 23))`}</code></pre>
        <p>
          Formatted print functions <code>fmt.Fprint</code> နှင့် မိတ်ဆွေများသည် ပထမ argument အဖြစ် <code>io.Writer</code> interface ကို implement လုပ်ထားသော object တစ်ခုကို ယူပါသည်။ <code>os.Stdout</code> နှင့် <code>os.Stderr</code> variables များသည် ရင်းနှီးသော instances များ ဖြစ်ကြပါသည်။
        </p>
        <p>
          ဤနေရာတွင် C နှင့် ကွာခြားမှုများ စတင်ပါသည်။ ပထမ - <code>%d</code> ကဲ့သို့ numeric formats များသည် signedness သို့မဟုတ် size အတွက် flags မယူဘဲ printing routines များသည် argument ၏ type ကို ကြည့်၍ ဤ properties များကို ဆုံးဖြတ်ပါသည်။
        </p>
        <pre><code>{`var x uint64 = 1<<64 - 1
fmt.Printf("%d %x; %d %x\\n", x, x, int64(x), int64(x))`}</code></pre>
        <p>
          ၎င်းသည် အောက်ပါအတိုင်း print ထုတ်ပါသည် -
        </p>
        <pre><code>18446744073709551615 ffffffffffffffff; -1 -1</code></pre>
        <p>
          Integers အတွက် decimal ကဲ့သို့ default conversion သာ လိုချင်ပါက catchall format <code>%v</code> ("value" အတွက်) ကို အသုံးပြုနိုင်ပါသည်။ ရလဒ်သည် <code>Print</code> နှင့် <code>Println</code> ထုတ်မည့်အတိုင်း ဖြစ်ပါသည်။ ထို့ပြင် ထို format သည် arrays, slices, structs နှင့် maps များပါ အပါအဝင် မည်သည့် value ကိုမဆို print ထုတ်နိုင်ပါသည်။
        </p>
        <pre><code>{`fmt.Printf("%v\\n", timeZone)  // or just fmt.Println(timeZone)`}</code></pre>
        <p>
          maps များအတွက် <code>Printf</code> နှင့် မိတ်ဆွေများသည် output ကို key ဖြင့် lexicographically sort လုပ်ပါသည်။
        </p>
        <p>
          Struct print ထုတ်သောအခါ modified format <code>%+v</code> သည် structure ၏ fields များကို ၎င်းတို့၏ names များဖြင့် annotate လုပ်ပေးပြီး alternate format <code>%#v</code> သည် value ကို full Go syntax ဖြင့် print ထုတ်ပါသည်။
        </p>
        <pre><code>{`type T struct {
    a int
    b float64
    c string
}
t := &T{ 7, -2.35, "abc\\tdef" }
fmt.Printf("%v\\n", t)
fmt.Printf("%+v\\n", t)
fmt.Printf("%#v\\n", t)
fmt.Printf("%#v\\n", timeZone)`}</code></pre>
        <p>
          ၎င်းသည် အောက်ပါအတိုင်း print ထုတ်ပါသည် -
        </p>
        <pre><code>{`&{7 -2.35 abc	def}
&{a:7 b:-2.35 c:abc	def}
&main.T{a:7, b:-2.35, c:"abc\\tdef"}
map[string]int{"CST":-21600, "EST":-18000, "MST":-25200, "PST":-28800, "UTC":0}`}</code></pre>
        <p>
          (ampersands များကို သတိပြုပါ။) Quoted string format သည် <code>string</code> သို့မဟုတ် <code>[]byte</code> type တန်ဖိုးအပေါ် apply လုပ်သောအခါ <code>%q</code> ဖြင့်လည်း ရနိုင်ပါသည်။ Alternate format <code>%#q</code> သည် ဖြစ်နိုင်ပါက backquotes ကို အသုံးပြုပါမည်။ <code>%q</code> format သည် integers နှင့် runes များအတွက်လည်း သက်ဆိုင်ပြီး single-quoted rune constant ကို ထုတ်ပေးပါသည်။ ထို့ပြင် <code>%x</code> သည် strings, byte arrays နှင့် byte slices များအပေါ်လည်း integers များအပေါ်မှာလိုပဲ အလုပ်လုပ်ပြီး long hexadecimal string ကို generate လုပ်ကာ format တွင် space ထည့်ပါက (<code>% x</code>) bytes များအကြား spaces ထည့်ပေးပါသည်။
        </p>
        <p>
          နောက်ထပ် အသုံးဝင်သော format တစ်ခုမှာ <code>%T</code> ဖြစ်ပြီး value ၏ type ကို print ထုတ်ပေးပါသည်။
        </p>
        <pre><code>{`fmt.Printf("%T\\n", timeZone)`}</code></pre>
        <p>
          ၎င်းသည် <code>map[string]int</code> ဟု print ထုတ်ပါသည်။
        </p>
        <p>
          Custom type တစ်ခုအတွက် default format ကို control လုပ်လိုပါက type ပေါ်တွင် <code>String() string</code> signature ရှိသော method တစ်ခုကို define လုပ်ရုံသာ လိုအပ်ပါသည်။
        </p>
        <pre><code>{`func (t *T) String() string {
    return fmt.Sprintf("%d/%g/%q", t.a, t.b, t.c)
}
fmt.Printf("%v\\n", t)`}</code></pre>
        <p>
          ရလဒ်မှာ <code>7/-2.35/"abc\tdef"</code> ဖြစ်သွားပါမည်။
        </p>
        <p>
          ကျွန်ုပ်တို့၏ <code>String</code> method သည် <code>Sprintf</code> ကို ခေါ်နိုင်ပါသည် - print routines များသည် fully reentrant ဖြစ်ပြီး ဤသို့ wrap လုပ်နိုင်သောကြောင့် ဖြစ်ပါသည်။ သို့သော် ဤ approach အကြောင်း နားလည်ရမည့် အရေးကြီးသော detail တစ်ခုရှိပါသည် - သင်၏ <code>String</code> method ထဲသို့ indefinitely recur ဖြစ်စေမည့် ပုံစံဖြင့် <code>Sprintf</code> ကို ခေါ်၍ <code>String</code> method မတည်ဆောက်ပါနှင့်။ ၎င်းသည် <code>Sprintf</code> call သည် receiver ကို string အဖြစ် တိုက်ရိုက် print ထုတ်ရန် ကြိုးစားပါက ဖြစ်နိုင်ပြီး method ကို ထပ်မံ invoke လုပ်စေမည် ဖြစ်ပါသည်။
        </p>
        <pre><code>{`type MyString string

func (m MyString) String() string {
    return fmt.Sprintf("MyString=%s", m) // Error: will recur forever.
}`}</code></pre>
        <p>
          ပြုပြင်ရန်လည်း လွယ်ကူပါသည် - argument ကို method မရှိသော basic string type သို့ convert လုပ်ပါ။
        </p>
        <pre><code>{`type MyString string
func (m MyString) String() string {
    return fmt.Sprintf("MyString=%s", string(m)) // OK: note conversion.
}`}</code></pre>
        <p>
          နောက်ထပ် printing technique တစ်ခုမှာ print routine ၏ arguments များကို အခြား routine တစ်ခုသို့ တိုက်ရိုက် pass ခြင်း ဖြစ်ပါသည်။ <code>Printf</code> ၏ signature သည် ၎င်း၏ final argument အတွက် <code>...interface{ }</code> type ကို အသုံးပြု၍ format ပြီးနောက် arbitrary number (arbitrary type) ၏ parameters များ ပေါ်နိုင်ကြောင်း သတ်မှတ်ပါသည်။
        </p>
        <pre><code>{`func Printf(format string, v ...interface{}) (n int, err error) {`}</code></pre>
        <p>
          Function <code>Printf</code> အတွင်း <code>v</code> သည် <code>[]interface{ }</code> type ၏ variable ကဲ့သို့ ပြုမူသော်လည်း အခြား variadic function သို့ pass လုပ်ပါက regular list of arguments ကဲ့သို့ ပြုမူပါသည်။ <code>...</code> parameter သည် specific type လည်း ဖြစ်နိုင်ပါသည် - ဥပမာ integers list မှ အနည်းဆုံးကို ရွေးသော min function အတွက် <code>...int</code>:
        </p>
        <pre><code>{`func Min(a ...int) int {
    min := int(^uint(0) >> 1)  // largest int
    for _, i := range a {
        if i < min {
            min = i
        }
    }
    return min
}`}</code></pre>

        <h3 id="append">Append</h3>
        <p>
          ယခု built-in <code>append</code> function ၏ design ကို ရှင်းပြရန် လိုအပ်သော ကျန်ရှိသည့်အပိုင်းကို ရရှိပါပြီ။ <code>append</code> ၏ signature သည် ကျွန်ုပ်တို့၏ custom <code>Append</code> function နှင့် ကွဲပြားပါသည်။ Schematically ဤသို့ ဖြစ်ပါသည် -
        </p>
        <pre><code>{`func append(slice []T, elements ...T) []T`}</code></pre>
        <p>
          <code>T</code> သည် ပေးထားသော type တစ်ခုအတွက် placeholder ဖြစ်ပါသည်။ Go တွင် type <code>T</code> ကို caller က ဆုံးဖြတ်သော function တစ်ခုကို တကယ် ရေးသားနိုင်ခြင်း မရှိပါ။ ထို့ကြောင့် <code>append</code> သည် built-in ဖြစ်ပါသည် - compiler ၏ support လိုအပ်ပါသည်။
        </p>
        <p>
          <code>append</code> လုပ်ဆောင်သည်မှာ elements များကို slice အဆုံးသို့ append လုပ်ပြီး result ကို return ပြန်ခြင်း ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ hand-written <code>Append</code> ကဲ့သို့ပင် underlying array ပြောင်းလဲနိုင်သောကြောင့် result ကို return ပြန်ရမည် ဖြစ်ပါသည်။
        </p>
        <pre><code>{`x := []int{1,2,3}
x = append(x, 4, 5, 6)
fmt.Println(x)`}</code></pre>
        <p>
          ၎င်းသည် <code>[1 2 3 4 5 6]</code> ဟု print ထုတ်ပါသည်။ ထို့ကြောင့် <code>append</code> သည် <code>Printf</code> ကဲ့သို့ arbitrary number of arguments များကို collect လုပ်ပါသည်။
        </p>
        <p>
          ကျွန်ုပ်တို့၏ <code>Append</code> လုပ်သလို slice တစ်ခုကို slice တစ်ခုသို့ append လုပ်လိုပါက ဘာလုပ်မလဲ။ လွယ်ကူပါသည် - call site တွင် <code>...</code> ကို အသုံးပြုပါ။
        </p>
        <pre><code>{`x := []int{1,2,3}
y := []int{4,5,6}
x = append(x, y...)
fmt.Println(x)`}</code></pre>
        <p>
          ထို <code>...</code> မပါဘဲ types မှားသောကြောင့် compile မလုပ်နိုင်ပါ - <code>y</code> သည် <code>int</code> type မဟုတ်ပါ။
        </p>


        <h3 id="initialization">Initialization</h3>
        <p>
          Go ရှိ initialization သည် C သို့မဟုတ် C++ ထက် ပိုမိုစွမ်းဆောင်နိုင်ပါသည်။ ရှုပ်ထွေးသော structure များကို initialization လုပ်နေစဉ်မှာပင် တည်ဆောက်နိုင်ပြီး package များအကြားမှ object များ၏ အစီအစဉ်ကိုလည်း မှန်ကန်စွာ ကိုင်တွယ်ပေးပါသည်။
        </p>

        <h3 id="constants">Constants</h3>
        <p>
          Go ရှိ constants များသည် constant ပင် ဖြစ်ကြပါသည်။ ၎င်းတို့ကို functions အတွင်း locals အဖြစ် define လုပ်ထားသည်ဖြစ်စေ compile time တွင် create လုပ်ပြီး numbers, characters (runes), strings သို့မဟုတ် booleans များသာ ဖြစ်နိုင်ပါသည်။ Compile-time restriction ကြောင့် ၎င်းတို့ကို define လုပ်သော expressions များသည် compiler က evaluate လုပ်နိုင်သော constant expressions များ ဖြစ်ရမည်။ ဥပမာ <code>1&lt;&lt;3</code> သည် constant expression ဖြစ်ပြီး <code>math.Sin(math.Pi/4)</code> သည် မဟုတ်ပါ - <code>math.Sin</code> function call သည် run time တွင် ဖြစ်ရမည် ဖြစ်သောကြောင့် ဖြစ်ပါသည်။
        </p>
        <p>
          Go တွင် enumerated constants များကို <code>iota</code> enumerator ကို အသုံးပြု၍ create လုပ်ပါသည်။ <code>iota</code> သည် expression တစ်ခု၏ အစိတ်အပိုင်း ဖြစ်နိုင်ပြီး expressions များကို implicitly repeat လုပ်နိုင်သောကြောင့် intricate sets of values များကို build လုပ်ရန် လွယ်ကူပါသည်။
        </p>
        <pre><code>{`type ByteSize float64

const (
    _           = iota // ignore first value by assigning to blank identifier
    KB ByteSize = 1 << (10 * iota)
    MB
    GB
    TB
    PB
    EB
    ZB
    YB
)`}</code></pre>
        <p>
          <code>String</code> ကဲ့သို့ method တစ်ခုကို user-defined type တစ်ခုသို့ attach လုပ်နိုင်မှုသည် arbitrary values များကို printing အတွက် ၎င်းတို့ကိုယ်ကို format လုပ်နိုင်စေပါသည်။ ၎င်းကို structs တွင် များသောအားဖြင့် မြင်တွေ့ရသော်လည်း <code>ByteSize</code> ကဲ့သို့ floating-point types ကဲ့သို့ scalar types များအတွက်လည်း အသုံးဝင်ပါသည်။
        </p>
        <pre><code>{`func (b ByteSize) String() string {
    switch {
    case b >= YB:
        return fmt.Sprintf("%.2fYB", b/YB)
    case b >= ZB:
        return fmt.Sprintf("%.2fZB", b/ZB)
    case b >= EB:
        return fmt.Sprintf("%.2fEB", b/EB)
    case b >= PB:
        return fmt.Sprintf("%.2fPB", b/PB)
    case b >= TB:
        return fmt.Sprintf("%.2fTB", b/TB)
    case b >= GB:
        return fmt.Sprintf("%.2fGB", b/GB)
    case b >= MB:
        return fmt.Sprintf("%.2fMB", b/MB)
    case b >= KB:
        return fmt.Sprintf("%.2fKB", b/KB)
    }
    return fmt.Sprintf("%.2fB", b)
}`}</code></pre>
        <p>
          Expression <code>YB</code> သည် <code>1.00YB</code> အဖြစ် print ထုတ်ပြီး <code>ByteSize(1e13)</code> သည် <code>9.09TB</code> အဖြစ် print ထုတ်ပါသည်။
        </p>
        <p>
          ဤနေရာတွင် <code>ByteSize</code> ၏ <code>String</code> method ကို implement လုပ်ရန် <code>Sprintf</code> ကို အသုံးပြုခြင်းသည် safe ဖြစ်ပါသည် (indefinitely recur ဖြစ်ခြင်း မရှိပါ) - conversion ကြောင့် မဟုတ်ဘဲ <code>%f</code> ဖြင့် <code>Sprintf</code> ကို ခေါ်သောကြောင့် ဖြစ်ပါသည်။ <code>%f</code> သည် string format မဟုတ်ပါ - <code>Sprintf</code> သည် string လိုချင်သောအခါမှသာ <code>String</code> method ကို ခေါ်မည် ဖြစ်ပြီး <code>%f</code> သည် floating-point value ကို လိုချင်ပါသည်။
        </p>


        <h3 id="variables">Variables</h3>
        <p>
          Variable များကို constants များကဲ့သို့ပင် initialize လုပ်နိုင်သော်လည်း initializer သည် compile time တွင် ရှိနေရန် မလိုဘဲ run time တွင် တွက်ချက်သော expression တစ်ခုလည်း ဖြစ်နိုင်ပါသည်။
        </p>
        <pre><code>{`var (
    home   = os.Getenv("HOME")
    user   = os.Getenv("USER")
    gopath = os.Getenv("GOPATH")
)`}</code></pre>

        <h3 id="init-function">The init function</h3>
        <p>
          နောက်ဆုံးအနေဖြင့် package source file တစ်ခုချင်းစီတွင် ၎င်း၏ ကိုယ်ပိုင် <code>init</code> function (argument မပါသော) များ ပါဝင်နိုင်ပါသည်။ <code>init</code> သည် package အတွင်းရှိ variable declaration များအားလုံး initialize ဖြစ်ပြီးမှသာ အလုပ်လုပ်မည် ဖြစ်ပါသည်။ ၎င်းကို များသောအားဖြင့် program မစတင်မီ လိုအပ်သော configuration များ ပြုလုပ်ရန် အသုံးပြုပါသည်။
        </p>
        <p>
          အောက်ပါဥပမာတွင် <code>init</code> ကို အသုံးပြု၍ flags များ သတ်မှတ်ပုံကို ပြထားပါသည်။
        </p>
        <pre><code>{`func init() {
    if user == "" {
        log.Fatal("$USER not set")
    }
    if home == "" {
        home = "/tmp"
    }
    if gopath == "" {
        gopath = home + "/go"
    }
    // flag.StringVar များကို ဤနေရာတွင် သတ်မှတ်နိုင်သည်
}`}</code></pre>
        <h3 id="pointers-vs-values">Pointers vs. Values</h3>
        <p>
          Methods များကို pointers များအတွက်သာမက မည်သည့် named type အတွက်မဆို သတ်မှတ်နိုင်ပါသည်။ (pointers နှင့် interfaces များမှလွဲ၍)။ ဥပမာအားဖြင့် <code>slice</code> တစ်ခုပေါ်တွင် method တစ်ခု သတ်မှတ်နိုင်ပါသည်။
        </p>
        <pre><code>{`type ByteSlice []byte

func (slice ByteSlice) Append(data []byte) []byte {
    l := len(slice)
    if l + len(data) > cap(slice) {
        newSlice := make([]byte, (l + len(data)) * 2)
        copy(newSlice, slice)
        slice = newSlice
    }
    slice = slice[0:l+len(data)]
    copy(slice[l:], data)
    return slice
}`}</code></pre>
        <p>
          အထက်ပါ protocol သည် Caller အား slice အသစ်ကို return ပြန်ယူရန် လိုအပ်ပါသည်။ သို့သော် method receiver ကို pointer ဖြစ်စေခြင်းဖြင့် ၎င်းကို ပိုမို ရှင်းလင်းစွာ ရေးသားနိုင်ပါသည်။
        </p>
        <pre><code>{`func (p *ByteSlice) Write(data []byte) (n int, err error) {
    slice := *p
    // Grow the slice if necessary.
    l := len(slice)
    if l + len(data) > cap(slice) {
        newSlice := make([]byte, (l + len(data)) * 2)
        copy(newSlice, slice)
        slice = newSlice
    }
    // Append the data.
    slice = slice[0:l+len(data)]
    copy(slice[l:], data)
    *p = slice
    return len(data), nil
}`}</code></pre>
        <p>
          တကယ်တမ်းတွင် ဤ <code>Write</code> method သည် standard <code>io.Writer</code> interface နှင့် ကိုက်ညီသွားပြီ ဖြစ်ပါသည်။
        </p>
        <p>
          Pointer receivers နှင့် value receivers တို့၏ ကွဲပြားချက်မှာ Pointer receivers များသည် receiver value ကို method အတွင်းမှ တိုက်ရိုက် ပြင်ဆင်နိုင်ခြင်း ဖြစ်ပါသည်။ Value receivers များမှာမူ copy ကိုသာ လက်ခံရရှိခြင်း ဖြစ်သည်။ သို့သော် Go ၌ အဆင်ပြေသော အချက်တစ်ခုမှာ value တစ်ခုပေါ်မှ pointer method ကို ခေါ်ဆိုပါက Go က အဆိုပါ value ၏ address <code>(&v)</code> ကို အလိုအလျောက် ယူပေးမည် ဖြစ်ပါသည်။
        </p>

        <h3 id="interfaces">Interfaces and other types</h3>
        <h3 id="interface-basics">Interfaces</h3>
        <p>
          Go ရှိ interface များသည် object တစ်ခု၏ အပြုအမူ (behavior) ကို သတ်မှတ်ရန် နည်းလမ်းတစ်ခု ပေးပါသည်။ အကယ်၍ object တစ်ခုသည် interface တွင် ပါဝင်သော method များကို implement လုပ်ထားပါက ၎င်းကို အဆိုပါ interface အဖြစ် အသုံးပြုနိုင်ပါသည်။ ၎င်းသည် Java သို့မဟုတ် C++ ကဲ့သို့ explicit implementation <code>(implements)</code> မလိုဘဲ implicit ဖြစ်ခြင်းမှာ Go ၏ အစွမ်းထက်သော အချက်တစ်ခု ဖြစ်ပါသည်။
        </p>
        <pre><code>{`type Reader interface {
    Read(p []byte) (n int, err error)
}`}</code></pre>

        <h3 id="conversions">Conversions</h3>
        <p>
          Go တွင် type တစ်ခုမှ တစ်ခုသို့ ပြောင်းလဲရန် explicit conversion ကို အသုံးပြုရပါသည်။ ဥပမာ - <code>int</code> မှ <code>float64</code> သို့ ပြောင်းလဲခြင်း သို့မဟုတ် <code>string</code> မှ <code>[]byte</code> သို့ ပြောင်းလဲခြင်း တို့ဖြစ်ပါသည်။
        </p>
        <pre><code>{`type MyInt int
var i int = 42
var m MyInt = MyInt(i)

f := float64(i)
s := string([]byte{ 'a', 'b', 'c' })`}</code></pre>
        <p>
          ဤပြောင်းလဲမှုများသည် compile time တွင် static အနေဖြင့် စစ်ဆေးခြင်း ခံရပါသည်။
        </p>

        <h3 id="interface-conversions">Interface conversions and type assertions</h3>
        <p>
          Type switches များသည် conversion ၏ ပုံစံတစ်မျိုးဖြစ်ပါသည်။ ၎င်းတို့သည် interface တစ်ခုကို ယူပြီး case တစ်ခုချင်းစီအလိုက် သက်ဆိုင်ရာ type သို့ ပြောင်းလဲပေးပါသည်။
        </p>
        <pre><code>{`type Stringer interface {
    String() string
}

var value interface{} // Caller မှ ပေးပို့သော တန်ဖိုး
switch str := value.(type) {
case string:
    return str
case Stringer:
    return str.String()
}`}</code></pre>
        <p>
          အကယ်၍ ကျွန်ုပ်တို့သည် type တစ်ခုတည်းကိုသာ စိတ်ဝင်စားပါက type assertion ကို အသုံးပြုနိုင်ပါသည်။ ၎င်းသည် interface value တစ်ခုအတွင်းမှ သတ်မှတ်ထားသော type ကို ထုတ်ယူပေးပါသည်။
        </p>
        <pre><code>{`str, ok := value.(string)
if ok {
    fmt.Printf("string value is: %q\\n", str)
} else {
    fmt.Printf("value is not a string\\n")
}`}</code></pre>

        <h3 id="generality">Generality</h3>
        <p>
          အကယ်၍ type တစ်ခုသည် interface တစ်ခုကို implement လုပ်ရန်အတွက်သာ တည်ရှိပြီး အခြား exported methods များ မရှိပါက အဆိုပါ type ကို export လုပ်ရန် မလိုအပ်ပါ။ Interface ကိုသာ export လုပ်ခြင်းက ၎င်း၏ behavior ကို ပိုမိုရှင်းလင်းစေပါသည်။ ဥပမာ - <code>hash.Hash</code>, <code>crypto/cipher.Block</code>, နှင့် <code>regexp.Regexp</code> တို့ ဖြစ်ပါသည်။
        </p>

        <h3 id="interfaces-and-methods">Interfaces and methods</h3>
        <p>
          Go တွင် မည်သည့်အရာမဆို (pointers နှင့် interfaces မှလွဲ၍) methods များ ရှိနိုင်သောကြောင့် မည်သည့်အရာမဆို interface တစ်ခုကို satisfy ဖြစ်စေနိုင်ပါသည်။ ဥပမာအားဖြင့် <code>http.Handler</code> interface ရှိ <code>ServeHTTP</code> method ကို implement လုပ်ထားသော မည်သည့် object မဆို HTTP request များကို လက်ခံဆောင်ရွက်နိုင်ပါသည်။
        </p>
        <pre><code>{`type Handler interface {
    ServeHTTP(ResponseWriter, *Request)
}`}</code></pre>
        <p>
          အောက်ပါ ဥပမာတွင် function တစ်ခုကို <code>http.Handler</code> အဖြစ် ပြောင်းလဲပေးနိုင်သော <code>HandlerFunc</code> ကို တွေ့နိုင်ပါသည်။
        </p>
        <pre><code>{`type HandlerFunc func(ResponseWriter, *Request)

func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
    f(w, r)
}`}</code></pre>
      </section>

      <section id="blank-identifier">
        <h2>The blank identifier</h2>
        <p>
          <code>for range</code> loops နှင့် maps များတွင် <code>blank identifier (_)</code> အသုံးပြုပုံကို တွေ့ခဲ့ပြီး ဖြစ်ပါသည်။ Blank identifier ကို မည်သည့် type ၏ မည်သည့် value နှင့်မဆို assign သို့မဟုတ် declare လုပ်နိုင်ပြီး အဆိုပါ တန်ဖိုးကို ဘေးကင်းစွာ စွန့်ပစ် (discard) နိုင်ပါသည်။ ၎င်းသည် Unix <code>/dev/null</code> file သို့ ရေးသားခြင်းနှင့် အနည်းငယ် ဆင်တူပါသည် - variable တစ်ခု လိုအပ်သော်လည်း တကယ့်တန်ဖိုးနှင့် မဆိုင်သည့် နေရာတွင် placeholder အဖြစ် အသုံးပြုရန် write-only value တစ်ခု ဖြစ်ပါသည်။
        </p>

        <h3 id="blank-multiple-assignment">The blank identifier in multiple assignment</h3>
        <p>
          <code>for range</code> loop တွင် blank identifier ကို အသုံးပြုခြင်းသည် ယေဘုယျ အခြေအနေ ဖြစ်သော multiple assignment ၏ special case တစ်ခု ဖြစ်ပါသည်။
        </p>
        <p>
          Assignment တစ်ခုတွင် ဘယ်ဘက်ခြမ်းမှ တန်ဖိုးများ အများအပြား လိုအပ်သော်လည်း တန်ဖိုးတစ်ခုကို program မှ အသုံးပြုမည် မဟုတ်ပါက blank identifier ကို အသုံးပြုခြင်းဖြင့် dummy variable တစ်ခု ဖန်တီးရန် မလိုဘဲ တန်ဖိုးကို စွန့်ပစ်မည်ဖြစ်ကြောင်း ရှင်းလင်းစွာ ဖော်ပြနိုင်ပါသည်။ ဥပမာ - function တစ်ခုမှ value နှင့် error ကို return ပြန်သော်လည်း error ကိုသာ အရေးကြီးသောအခါ blank identifier ကို အသုံးပြု၍ မသက်ဆိုင်သော တန်ဖိုးကို စွန့်ပစ်နိုင်ပါသည်။
        </p>
        <pre><code>{`if _, err := os.Stat(path); os.IsNotExist(err) {
    fmt.Printf("%s does not exist\\n", path)
}`}</code></pre>
        <p>
          တစ်ခါတစ်ရံတွင် error ကို လျစ်လျူရှုရန်အတွက် error value ကို စွန့်ပစ်သော code များကို တွေ့ရတတ်ပါသည်။ ဤသို့ပြုလုပ်ခြင်းသည် <strong>အလွန်ဆိုးရွားသော လုပ်ဆောင်မှု</strong> ဖြစ်ပါသည်။ Error returns များကို အမြဲတမ်း စစ်ဆေးပါ - ၎င်းတို့ကို ပေးထားခြင်းမှာ အကြောင်းရှိ၍ ဖြစ်ပါသည်။
        </p>
        <pre><code>{`// Bad! This code will crash if path does not exist.
fi, _ := os.Stat(path)
if fi.IsDir() {
    fmt.Printf("%s is a directory\\n", path)
}`}</code></pre>

        <h3 id="unused-imports">Unused imports and variables</h3>
        <p>
          Go တွင် အသုံးမပြုသော package များကို import လုပ်ခြင်း သို့မဟုတ် variable များကို declare လုပ်ခြင်းသည် error ဖြစ်ပါသည်။ အသုံးမပြုသော imports များသည် program ကို ကြီးမားစေပြီး compile ကို နှေးကွေးစေပါသည်။ Initialize လုပ်ထားပြီး အသုံးမပြုသော variable သည် အနည်းဆုံး wasted computation ဖြစ်ပြီး ပိုကြီးသော bug ၏ လက္ခဏာ ဖြစ်နိုင်ပါသည်။ သို့သော် program ကို လုပ်ဆောင်နေစဉ်အတွင်း unused imports နှင့် variables များ ပေါ်လာတတ်ပြီး compilation ဆက်လုပ်ရန်အတွက် ၎င်းတို့ကို ဖျက်ရခြင်းသည် စိတ်ရှုပ်စရာ ဖြစ်နိုင်ပါသည်။ Blank identifier က ဖြေရှင်းနည်းတစ်ခု ပေးပါသည်။
        </p>
        <p>
          အောက်ပါ အစိတ်အပိုင်း ရေးထားသော program တွင် unused imports နှစ်ခု (<code>fmt</code> နှင့် <code>io</code>) နှင့် unused variable (<code>fd</code>) ပါဝင်သောကြောင့် compile မဖြစ်ပါ။ သို့သော် code မှန်ကန်မှုရှိမရှိ စစ်ဆေးလိုပါသည်။
        </p>
        <pre><code>{`package main

import (
    "fmt"
    "io"
    "log"
    "os"
)

func main() {
    fd, err := os.Open("test.go")
    if err != nil {
        log.Fatal(err)
    }
    // TODO: use fd.
}`}</code></pre>
        <p>
          Unused imports များအကြောင်း ညည်းညူခြင်းကို တိတ်ဆိတ်စေရန် imported package မှ symbol တစ်ခုကို refer လုပ်ရန် blank identifier ကို အသုံးပြုပါ။ ထိုနည်းတူစွာ unused variable <code>fd</code> ကို blank identifier သို့ assign လုပ်ခြင်းသည် unused variable error ကို တိတ်ဆိတ်စေမည် ဖြစ်ပါသည်။ ဤ version သည် compile ဖြစ်ပါသည်။
        </p>
        <pre><code>{`package main

import (
    "fmt"
    "io"
    "log"
    "os"
)

var _ = fmt.Printf // For debugging; delete when done.
var _ io.Reader    // For debugging; delete when done.

func main() {
    fd, err := os.Open("test.go")
    if err != nil {
        log.Fatal(err)
    }
    // TODO: use fd.
    _ = fd
}`}</code></pre>
        <p>
          Convention အရ import errors များကို တိတ်ဆိတ်စေရန် global declarations များသည် imports များနောက်တွင် ချက်ချင်း ထားရှိသင့်ပြီး ရှာဖွေရလွယ်ကူစေရန်နှင့် နောက်မှ ရှင်းလင်းရန် သတိပေးချက်အဖြစ် comment ထည့်သင့်ပါသည်။
        </p>

        <h3 id="import-side-effect">Import for side effect</h3>
        <p>
          ယခင် ဥပမာရှိ <code>fmt</code> သို့မဟုတ် <code>io</code> ကဲ့သို့ unused import သည် နောက်ဆုံးတွင် အသုံးပြုသင့် သို့မဟုတ် ဖယ်ရှားသင့်ပါသည်။ Blank assignments များသည် code ကို work in progress အဖြစ် သတ်မှတ်ပါသည်။ သို့သော် တစ်ခါတစ်ရံတွင် package တစ်ခုကို ၎င်း၏ side effects အတွက်သာ import လုပ်ရန် အသုံးဝင်ပါသည်။ ဥပမာ - <code>net/http/pprof</code> package သည် ၎င်း၏ <code>init</code> function အတွင်း debugging information ပေးသော HTTP handlers များကို register လုပ်ပါသည်။ Package ကို side effects အတွက်သာ import လုပ်ရန် package ကို blank identifier သို့ rename လုပ်ပါ။
        </p>
        <pre><code>import _ "net/http/pprof"</code></pre>
        <p>
          ဤ import ပုံစံက package ကို side effects အတွက် import လုပ်ထားကြောင်း ရှင်းလင်းစွာ ဖော်ပြပါသည်။ အဘယ်ကြောင့်ဆိုသော် package ၏ အခြား possible use မရှိသောကြောင့် ဖြစ်ပါသည် - ဤ file တွင် ၎င်းသည် name မရှိပါ။
        </p>

        <h3 id="interface-checks">Interface checks</h3>
        <p>
          အထက်တွင် interfaces အကြောင်း ဆွေးနွေးခဲ့သည့်အတိုင်း type တစ်ခုသည် interface တစ်ခုကို implement လုပ်ကြောင်း explicitly declare လုပ်ရန် မလိုအပ်ပါ။ ယင်းအစား type သည် interface ၏ methods များကို implement လုပ်ခြင်းဖြင့်သာ interface ကို implement လုပ်ပါသည်။ လက်တွေ့တွင် interface conversions အများစုသည် static ဖြစ်ပြီး compile time တွင် စစ်ဆေးပါသည်။
        </p>
        <p>
          သို့သော် interface checks အချို့သည် run-time တွင် ဖြစ်ပါသည်။ ဥပမာတစ်ခုမှာ <code>encoding/json</code> package ဖြစ်ပြီး <code>Marshaler</code> interface ကို define လုပ်ထားပါသည်။ JSON encoder သည် type assertion ကို အသုံးပြု၍ run time တွင် ဤ property ကို စစ်ဆေးပါသည်။
        </p>
        <pre><code>m, ok := val.(json.Marshaler)</code></pre>
        <p>
          Interface ကိုယ်တိုင်ကို အသုံးမပြုဘဲ type တစ်ခုသည် interface ကို implement လုပ်ထားမထား စစ်ဆေးလိုပါက blank identifier ကို အသုံးပြု၍ type-asserted value ကို လျစ်လျူရှုပါ။
        </p>
        <pre><code>{`if _, ok := val.(json.Marshaler); ok {
    fmt.Printf("value %v of type %T implements json.Marshaler\\n", val, val)
}`}</code></pre>
        <p>
          Type ကို implement လုပ်သော package အတွင်း ၎င်းသည် interface ကို အမှန်တကယ် satisfy ဖြစ်ကြောင်း guarantee လုပ်ရန် လိုအပ်သောအခါ ဤအခြေအနေ ပေါ်ပေါက်ပါသည်။ Type တစ်ခု (ဥပမာ <code>json.RawMessage</code>) သည် custom JSON representation လိုအပ်ပါက <code>json.Marshaler</code> ကို implement လုပ်သင့်ပါသည်။ Implementation မှန်ကန်ကြောင်း guarantee လုပ်ရန် blank identifier ကို အသုံးပြုသော global declaration ကို package တွင် အသုံးပြုနိုင်ပါသည်။
        </p>
        <pre><code>var _ json.Marshaler = (*RawMessage)(nil)</code></pre>
        <p>
          ဤ construct တွင် blank identifier ၏ ပေါ်လာခြင်းက declaration သည် type checking အတွက်သာ ရှိပြီး variable ဖန်တီးရန် မဟုတ်ကြောင်း ညွှန်ပြပါသည်။ သို့သော် interface ကို satisfy ဖြစ်သော type တိုင်းအတွက် ဤသို့ မလုပ်ပါနှင့်။ Convention အရ ထိုသို့သော declarations များကို code ထဲတွင် static conversions များ မရှိသည့်အခါမှသာ အသုံးပြုပါသည်။
        </p>
      </section>

      <section id="embedding">
        <h2>Embedding</h2>
        <p>
          Go တွင် typical subclassing (inheritance) concept မရှိသော်လည်း struct သို့မဟုတ် interface များအတွင်း အခြား types များကို <code>embed</code> လုပ်ခြင်းဖြင့် အခြား implementation များမှ အစိတ်အပိုင်းများကို "ချေးယူ (borrow)" အသုံးပြုနိုင်ပါသည်။
        </p>
        <p>
          Interface embedding သည် အလွန်ရိုးရှင်းပါသည်။ အောက်ပါ ဥပမာတွင် <code>ReadWriter</code> interface သည် <code>Reader</code> နှင့် <code>Writer</code> နှစ်ခုလုံး၏ methods များကို ပိုင်ဆိုင်သွားမည် ဖြစ်ပါသည်။
        </p>
        <pre><code>{`type ReadWriter interface {
    Reader
    Writer
}`}</code></pre>
        <p>
          Struct embedding သည်လည်း ထိုနည်းတူပင် ဖြစ်ပါသည်။ အကယ်၍ anonymous field အဖြစ် ထည့်သွင်းလိုက်ပါက အဆိုပါ field ၏ methods များသည် outer struct ၏ methods များကဲ့သို့ တိုက်ရိုက် အသုံးပြုနိုင်မည် ဖြစ်ပါသည်။
        </p>
        <pre><code>{`type Job struct {
    *log.Logger
}

func (job *Job) Logf(format string, args ...interface{}) {
    job.Logger.Logf("%q: %s", job.Command, fmt.Sprintf(format, args...))
}`}</code></pre>
        <p>
          ဤနေရာတွင် <code>Job</code> သည် <code>log.Logger</code> ၏ <code>Log</code>, <code>Logf</code> စသော methods များကို တိုက်ရိုက် ခေါ်ယူနိုင်စွမ်း ရှိသွားပါသည်။
        </p>
      </section>

      <section id="concurrency">
        <h2>Concurrency</h2>

        <h3 id="share-by-communicating">Share by communicating</h3>
        <p>
          Concurrent programming သည် များသောအားဖြင့် shared variables များသို့ access လုပ်ရန်အတွက် ခက်ခဲသော synchronization (ဥပမာ - mutexes) များ လိုအပ်သောကြောင့် စိန်ခေါ်မှု တစ်ခု ဖြစ်ပါသည်။ Go ၌မူ ကွဲပြားသော ချဥ်းကပ်မှု တစ်ခုကို အသုံးပြုထားပါသည်။ ၎င်းမှာ shared variables များကို channel များမှတစ်ဆင့် ပေးပို့ခြင်း ဖြစ်ပါသည်။ တစ်ချိန်တည်းတွင် goroutine တစ်ခုတည်းကသာ value ကို access လုပ်နိုင်သောကြောင့် data races များ မဖြစ်ပေါ်နိုင်ပါ။
        </p>
        <p>
          Go ၏ ဆောင်ပုဒ်မှာ - <strong>"Do not communicate by sharing memory; instead, share memory by communicating."</strong> ဖြစ်ပါသည်။
        </p>

        <h3 id="goroutines">Goroutines</h3>
        <p>
          Goroutine သည် အခြား goroutines များနှင့် တစ်ပြိုင်နက်တည်း (concurrently) အလုပ်လုပ်သော function တစ်ခု ဖြစ်ပါသည်။ ၎င်းတို့သည် OS threads များထက် ပိုမိုပေါ့ပါး (lightweight) ပြီး heap တွင် allocate လုပ်ထားသော stack space အနည်းငယ်သာ အစပိုင်းတွင် အသုံးပြုပါသည်။ <code>go</code> keyword ကို အသုံးပြု၍ goroutine တစ်ခုကို စတင်နိုင်ပါသည်။
        </p>
        <pre><code>go list.Sort() // list.Sort() ကို concurrent စတင်သည်</code></pre>
        <p>
          Function literals (anonymous functions) များကိုလည်း goroutines များအဖြစ် အသုံးပြုနိုင်ပါသည်။
        </p>
        <pre><code>{`func Announce(message string, delay time.Duration) {
    go func() {
        time.Sleep(delay)
        fmt.Println(message)
    }()  // Note the parentheses - must call the function.
}`}</code></pre>

        <h3 id="channels">Channels</h3>
        <p>
          Maps များကဲ့သို့ပင် channel များကို <code>make</code> ဖြင့် allocate လုပ်ရပါသည်။ ၎င်းတို့သည် underlying data structure ၏ reference များ ဖြစ်ကြပါသည်။
        </p>
        <pre><code>{`ci := make(chan int)            // unbuffered channel
cs := make(chan *os.File, 100)  // buffered channel`}</code></pre>
        <p>
          Unbuffered channels များသည် communication (ပေးပို့ခြင်းနှင့် လက်ခံခြင်း) ကို sync ဖြစ်စေပါသည်။ Buffered channels များမှာမူ သတ်မှတ်ထားသော capacity ပြည့်သွားသည်အထိ ပေးပို့ခြင်းကို မရပ်တန့်ဘဲ ဆက်လက်လုပ်ဆောင်နိုင်စေပါသည်။
        </p>

        <h3 id="channels-of-channels">Channels of channels</h3>
        <p>
          Go တွင် channel သည် first-class value ဖြစ်သောကြောင့် ၎င်းကို အခြား channel များအတွင်း ပေးပို့ခြင်း (passing around) ပြုလုပ်နိုင်ပါသည်။ ၎င်းသည် server တစ်ခုမှ client ထံသို့ message ပြန်ပို့ရန်အတွက် response channel တစ်ခုကို request နှင့်အတူ ထည့်ပေးလိုက်သော pattern မျိုးတွင် အလွန် အသုံးဝင်ပါသည်။
        </p>
        <pre><code>{`type Request struct {
    args        []int
    f           func([]int) int
    replyChan   chan int
}

func (r *Request) handle() {
    r.replyChan <- r.f(r.args)
}`}</code></pre>

        <h3 id="parallelization">Parallelization</h3>
        <p>
          အကယ်၍ တွက်ချက်မှုတစ်ခုကို အမှီအခိုကင်းသော အစိတ်အပိုင်းများအဖြစ် ခွဲထုတ်နိုင်ပါက ၎င်းတို့ကို CPU cores အများအပြားပေါ်တွင် parallel လုပ်ဆောင်နိုင်ပါသည်။ <code>runtime.NumCPU()</code> ကို အသုံးပြု၍ core အရေအတွက်ကို သိရှိနိုင်ပါသည်။
        </p>
        <pre><code>{`var numCPU = runtime.NumCPU()

func (v Vector) DoAll(u Vector) {
    c := make(chan int, numCPU)
    for i := 0; i < numCPU; i++ {
        go v.doSome(i, u, c)
    }
    // Wait for all to finish
    for i := 0; i < numCPU; i++ {
        <-c
    }
}`}</code></pre>

        <h3 id="leaky-buffer">A leaky buffer</h3>
        <p>
          Concurrency tools များသည် concurrent မဟုတ်သော ideas များကိုပင် ပိုမိုရှင်းလင်းစွာ ဖော်ပြနိုင်စေပါသည်။ ဥပမာ - free list များကို buffered channel များ အသုံးပြု၍ တည်ဆောက်ခြင်း ဖြစ်ပါသည်။
        </p>
        <pre><code>{`var freeList = make(chan *Buffer, 100)
var serverChan = make(chan *Buffer)

func client() {
    for {
        var b *Buffer
        select {
        case b = <-freeList:
            // Got one; nothing more to do.
        default:
            // None free, so allocate a new one.
            b = new(Buffer)
        }
        load(b)              // Read next message from the network.
        serverChan <- b      // Send to server.
    }
}`}</code></pre>
      </section>

      <section id="errors">
        <h2>Errors</h2>
        <p>
          Go တွင် multivalue return ကြောင့် error description များကို ပုံမှန် return value နှင့်အတူ ပေးပို့ရန် လွယ်ကူစေပါသည်။ Convention အနေဖြင့် errors များသည် <code>error</code> ဟူသော built-in interface type ရှိကြပါသည်။
        </p>
        <pre><code>{`type error interface {
    Error() string
}`}</code></pre>
        <p>
          Library တည်ဆောက်သူများသည် ဤ interface ကို အသုံးပြု၍ error အခြေအနေများကို ပိုမိုပြည့်စုံစွာ ဖော်ပြနိုင်ပါသည်။ ဥပမာအားဖြင့် <code>os.Open</code> သည် <code>*os.PathError</code> ကို ပေးပို့ပါသည်။
        </p>
        <pre><code>{`// PathError records an error and the operation and file path that caused it.
type PathError struct {
    Op   string
    Path string
    Err  error
}

func (e *PathError) Error() string {
    return e.Op + " " + e.Path + ": " + e.Err.Error()
}`}</code></pre>

        <h3 id="panic">Panic</h3>
        <p>
          Error တစ်ခုကို caller ဆီ ပေးပို့ရန်မှာ ပုံမှန်နည်းလမ်း ဖြစ်သော်လည်း၊ တစ်ခါတစ်ရံတွင် program ကို ဆက်လက် လုပ်ဆောင်ရန် မဖြစ်နိုင်သော အခြေအနေမျိုး (ဥပမာ - initialization ပျက်ကွက်ခြင်း) တွင် <code>panic</code> built-in function ကို အသုံးပြုနိုင်ပါသည်။ ၎င်းသည် program ကို ရပ်တန့်စေပြီး stack trace ကို ထုတ်ပေးပါသည်။
        </p>
        <pre><code>{`var user = os.Getenv("USER")

func init() {
    if user == "" {
        panic("no value for $USER")
    }
}`}</code></pre>

        <h3 id="recover">Recover</h3>
        <p>
          <code>panic</code> ဖြစ်ပေါ်လာသောအခါ <code>recover</code> function ကို အသုံးပြု၍ program ရပ်တန့်သွားခြင်းမှ ကာကွယ်နိုင်ပြီး control ကို ပြန်လည် ရယူနိုင်ပါသည်။ <code>recover</code> သည် <code>defer</code> လုပ်ထားသော function အတွင်းမှာသာ အလုပ်လုပ်ပါသည်။
        </p>
        <pre><code>{`func server(work chan *Work) {
    for Elephant := range work {
        go safelyDo(Elephant)
    }
}

func safelyDo(work *Work) {
    defer func() {
        if err := recover(); err != nil {
            log.Println("work failed:", err)
        }
    }()
    do(work)
}`}</code></pre>
        <p>
          အကယ်၍ <code>do(work)</code> သည် panic ဖြစ်သွားခဲ့ပါက <code>safelyDo</code> ၏ defer function ထဲမှ <code>recover</code> သည် ၎င်းကို ဖမ်းယူလိုက်မည် ဖြစ်ပြီး အခြား goroutines များကို ဆက်လက် အလုပ်လုပ်စေမည် ဖြစ်ပါသည်။
        </p>
      </section>

      <section id="web-server">
        <h2>A web server</h2>
        <p>
          နောက်ဆုံးအနေဖြင့် အထက်ပါ အချက်အလက်များကို ပေါင်းစပ်ထားသော Go web server တစ်ခု၏ ဥပမာကို ကြည့်ကြပါစို့။ ဤ program သည် user ထံမှ parameter တစ်ခုကို လက်ခံပြီး QR code image တစ်ခုအဖြစ် ပြောင်းလဲပေးမည် ဖြစ်ပါသည်။
        </p>
        <pre><code>{`package main

import (
    "flag"
    "html/template"
    "log"
    "net/http"
)

var addr = flag.String("addr", ":1718", "http service address") // Q=17, R=18

var templ = template.Must(template.New("qr").Parse(templateStr))

func main() {
    flag.Parse()
    http.Handle("/", http.HandlerFunc(QR))
    err := http.ListenAndServe(*addr, nil)
    if err != nil {
        log.Fatal("ListenAndServe:", err)
    }
}

func QR(w http.ResponseWriter, req *http.Request) {
    templ.Execute(w, req.FormValue("s"))
}

const templateStr = \`
<html>
<head>
<title>QR Link Generator</title>
</head>
<body>
{{if .}}
<img src="http://chart.apis.google.com/chart?chs=300x300&cht=qr&choe=UTF-8&chl={{.}}" />
<br>
{{.}}
<br>
<br>
{{end}}
<form action="/" name=f method="GET">
    <input maxLength=1024 size=70 name=s value="" title="Text to QR Encode">
    <input type=submit value="Show QR" name=qr>
</form>
</body>
</html>
\``}</code></pre>
      </section>

      <div className="mt-20 p-10 bg-gray-light rounded-lg text-center">
        <p className="text-xl font-semibold text-go-dark-blue mb-4">
          Effective Go (မြန်မာဘာသာ) translation စာမျက်နှာကို ဖတ်ရှုပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။
        </p>
        <p className="text-gray-600">
          ဤစာမျက်နှာသည် မူရင်း <a href="https://go.dev/doc/effective_go">Effective Go</a> ကို မြန်မာဘာသာဖြင့် လေ့လာသူများအတွက် အထောက်အကူဖြစ်စေရန် ပြန်ဆိုထားခြင်း ဖြစ်ပါသည်။
        </p>
      </div>
    </Layout>
  );
};

export default EffectiveGo;

var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 \n 網站倉儲:  https://github.com/nfu40923208/cad2021_hw \n 網站連結:  https://nfu40923208.github.io/cad2021_hw/ \n 其他與作者或作業相關資料說明或介紹。 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Work Progress', 'text': '9/25 \n 建立倉儲、修改標題 \n 10/7 \n 增加班上每位同學的網站連結 \n 10/11 \n 說明如何找出班上每位同學的網站連結 \n 10/18 \n 新增Run \n 修改github帳號 \n 10/21 \n update readme.md \n 10/24 \n 修改Run \n 11/4 \n 新增github連結 \n 增加inventor起源、功能和slovespace起源和功能 \n 11/14 \n 完成slovespace繪製 \n \n \n', 'tags': '', 'url': 'Work Progress.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': 'cad2021 2b \n 解決方法: \n # 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/8a27e6885ee1a5074bcf864d741679afeac796c4/2b_w2_stud_list.txt"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\nnum_github = data[i]\nnum = num_github.split("\\t")[0]\naccount = num_github.split("\\t")[1]\nif account == "":\naccount = num\nprint("<a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a>") \n \n cad2b\xa0 \xa0 \xa0 \n \xa0github account \n \xa0 40723126 \xa0 40723135  \xa0 40723217  \xa0 40932331  \xa0 40823114  \xa0 40823115  \xa0 40823117  \xa0 40823119  \xa0 40823122  \xa0 40823127  \xa0 40823146  \xa0 40823148  \xa0 40823215  \xa0 40871106  \xa0 40923201  \xa0 40923203  \xa0 40923204  \xa0 40923205  \xa0 40923206  \xa0 40923207  \xa0 40923208  \xa0 40923209  \xa0 40923210  \xa0 40923211  \xa0 40923212 \xa0 40923213  \xa0 40923214  \xa0 40923216  \xa0 40923217  \xa0 40923218  \xa0 40923219  \xa0 40923220  \xa0 40923221  \xa0 40923223  \xa0 40923224  \xa0 40923225  \xa0 40923226  \xa0 40923227  \xa0 40923228  \xa0 40923229  \xa0 40923230  \xa0 40923231  \xa0 40923232  \xa0 40923233  \xa0 40923234  \xa0 40923235  \xa0 40923236  \xa0 40923237  \xa0 40923238  \xa0 40923239  \xa0 40923240  \xa0 40923241  \xa0 40923242  \xa0 40923243  \xa0 40923244  \xa0 40923245  \xa0 40923246  \xa0 40923247  \xa0 40923248  \xa0 40923249  \xa0 40923250  \xa0 40923251  \xa0 40923252  \xa0 40923253  \xa0 40971220  \xa0 40971227  <completed in 331.00 ms> \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'github page', 'text': '#2B每人github網站\ndata = open(\'D:/abb52/Desktop/2bcad.txt\').readlines()\ndata = data[1:]\nfor i in range(len(data)):\n    num_github = data[i]\n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1].strip()\n    if account == "":\n        account = num\n#print(num, account)\n    print("<a href=\'https://github.com" + str(account) + "/cad2021_hw\'>" +str(num) + "</a>") \n 40723126 \xa0 \n 40723135 \xa0 \n 40723217 \xa0 \n 40732331 \xa0 \n 40823114 \xa0 \n 40823115 \xa0 \n 40823117 \xa0 \n 40823119 \xa0 \n 40823122 \xa0 \n 40823127 \xa0 \n 40823146 \xa0 \n 40823148 \xa0 \n 40823215 \xa0 \n 40871106 \xa0 \n 40923201 \xa0 \n 40923203 \xa0 \n 40923204 \xa0 \n 40923205 \xa0 \n 40923206 \xa0 \n 40923207 \xa0 \n 40923208 \xa0 \n 40923209 \xa0 \n 40923210 \xa0 \n 40923211 \xa0 \n 40923212 \xa0 \n 40923213 \xa0 \n 40923214 \xa0 \n 40923216 \xa0 \n 40923217 \xa0 \n 40923218 \xa0 \n 40923219 \xa0 \n 40923220 \xa0 \n 40923221 \xa0 \n 40923223 \xa0 \n 40923224 \xa0 \n 40923225 \xa0 \n 40923226 \xa0 \n 40923227 \xa0 \n 40923228 \xa0 \n 40923229 \xa0 \n 40923230 \xa0 \n 40923231 \xa0 \n 40923232 \xa0 \n 40923233 \xa0 \n 40923234 \xa0 \n 40923235 \xa0 \n 40923236 \xa0 \n 40923237 \xa0 \n 40923238 \xa0 \n 40923239 \xa0 \n 40923240 \xa0 \n 40923241 \xa0 \n 40923242 \xa0 \n 40923243 \xa0 \n 40923244 \xa0 \n 40923245 \xa0 \n 40923246 \xa0 \n 40923247 \xa0 \n 40923248 \xa0 \n 40923249 \xa0 \n 40923250 \xa0 \n 40923251 \xa0 \n 40923252 \xa0 \n 40923253 \xa0 \n 40971220 \xa0 \n 40971227 \n', 'tags': '', 'url': 'github page.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'inventor 繪圖', 'text': 'inventor 緣起說明與功能 \n 起源 : \n 應用開發者團隊是由哈爾·阿伯爾森和馬克·弗里德曼領導 \n inventor一款卡通圖形界面的 Android 智慧型手機應用程式開發軟體。它起先由 Google 提供的應用軟體，現在由麻省理工學院維護及營運。 \n inventer可以讓任何熟悉或不熟悉程序設計的人來創造基於 Android 作業系統的應用軟體。它使用圖形化界面，非常類似於 Scratch 語言和 StarLogo TNG 用戶界面。用戶可以拖放圖形對象來創造一個運行在安卓系統上的應用，它就可以在許多手機設備上運行。 \n 2010年7月12日這應用軟體運行 \n 2010年12月15日對公眾開放 \n 2011年12月31日谷歌終止了這應用開發者軟體 \n 2013年12月6日應用開發者發表了App Inventor 2 Beta \n 020年2月起， 應用開發者把測試應用的軟體（AI Companion）推廣到iOS上面 \n \n 功能 : \n 1. Autodesk Inventor  是一個電腦輔助製圖應用程序，用來進行 3D 機械設計、模擬、顯示、與儲存。 \n 2. 整合2D和3D數據，創建一個虛擬的產品，使用戶能夠在產品正式生產前，驗證和調整產品的屬性。 \n 3.\xa0也包含數據、直接編輯和自由的建模工具，以及不同CAD檔案的轉檔能力。 \n', 'tags': '', 'url': 'inventor 繪圖.html'}, {'title': 'inventor 安裝配置', 'text': '\n inventor 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n inventor 套件下載安裝與配置\xa0 https://www.youtube.com/watch?v=K8MVRSU9B4Q \n \n 1.到學校E-care申請vpn，申請通過系統會寄gmail給你。 \n \n \n 2.點入連結進行登入的動作 \n \n 3.登入並連線成功後會顯示以下圖片的樣子 \n \n 4.接下來就可以安裝inventor \n \xa01. 點開setup \n \xa0 \xa0 \xa0 \n \xa02. 跟著連結操作\xa0 AutocadDesk 安裝教學.pdf \n \xa0 \n', 'tags': '', 'url': 'inventor 安裝配置.html'}, {'title': 'inventor 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n inventor 零組件繪圖操作流程影片 (Youtube) \n inventor 零組件繪圖教學影片 (Wink) \n inventor 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'inventor 操作流程.html'}, {'title': 'solvespace 繪圖', 'text': 'solvespace 起源說明與功能 \n 起源 : \n SolveSpace是一套免費且開源的CAD軟體，作者是 Jonathan Westhues與其他自願者 ，於2008年開發，作業環境跨足Windows、Linux和MacOS。 \n 功能 : \n SolveSpace 的大部分“基本功能”，包括草圖、約束、擠壓和布爾運算 \n \n 第一次運行 SolveSpace 時，我們將從一個空的部分開始 \n 最初，我們視圖的零件將定向到 XY 平面 \n 該平面的標籤顯示在屏幕的左下角（#XY，深灰色） \n 軸也由左下方的三個彩色箭頭指示 \n X、Y 和 Z 軸分別用紅色、綠色和藍色繪製 \n \n', 'tags': '', 'url': 'solvespace 繪圖.html'}, {'title': 'solvespace 安裝配置', 'text': '\n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n solvespace 套件下載安裝與配置\xa0 https://www.youtube.com/watch?v=TyP00MXbc4w \n \xa01.搜尋solvespace \n \xa0 \n \xa02.點選第一個 \n \xa0 \n \xa03.點選download \n \xa0 \n \xa04.點選最新版本3.0 \n \xa0 \n', 'tags': '', 'url': 'solvespace 安裝配置.html'}, {'title': 'solvespace 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n solvespace 零組件繪圖操作流程影片 (Youtube) \n solvespace 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'solvespace 操作流程.html'}, {'title': '運動場景', 'text': 'inventor: \n inventor\xa0零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n inventor\xa0零件轉入 CoppeliaSim 教學影片 (Wink) \n inventor 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n solvespace: \n solvespace 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n solvespace 零件轉入 CoppeliaSim 教學影片 (Wink) \n solvespace 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'RUN', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'RUN.html'}]};
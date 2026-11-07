# student-management-system-task2
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>نظام إدارة وتحليل نتائج الطلاب</title>
<style>
:root{--purple:#351078;--purple2:#5a24b8;--bg:#f4f5fb;--ink:#25213a;--muted:#85839a;--line:#eeedf4;--cyan:#20c5cf;--pink:#d72bc9;--yellow:#f1d51b;--green:#20b889;--red:#ed6c82}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Tahoma,Arial,sans-serif;color:var(--ink)}
.topbar{height:68px;background:linear-gradient(100deg,#26065f,#43118d);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 5%;box-shadow:0 4px 15px #24104a22}
.brand{display:flex;align-items:center;gap:12px;font-weight:bold;font-size:18px}.logo{width:38px;height:38px;border-radius:12px;background:#ffffff22;display:grid;place-items:center;font-size:21px}
.topmeta{display:flex;align-items:center;gap:24px;font-size:12px;color:#e4d9ff}.avatar{width:32px;height:32px;border-radius:50%;background:#f4d2a4;color:#56229a;display:grid;place-items:center;font-weight:bold}
.container{max-width:1240px;margin:28px auto;padding:0 22px}.heading{display:flex;align-items:end;justify-content:space-between;margin-bottom:20px}.heading h1{font-size:25px;margin:0 0 7px}.heading p{color:var(--muted);margin:0;font-size:13px}.date{background:#fff;border:1px solid var(--line);padding:10px 15px;border-radius:10px;color:#716c83;font-size:12px}
.filters{display:flex;gap:12px;margin-bottom:18px}.filters select{border:1px solid var(--line);background:white;border-radius:9px;padding:10px 14px;color:#625d75;min-width:150px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-bottom:17px}.card{background:#fff;border:1px solid #efedf5;border-radius:14px;padding:18px;box-shadow:0 3px 14px #25104a08}.stat{display:flex;align-items:center;justify-content:space-between;min-height:90px}.stat .label{font-size:12px;color:var(--muted);margin-bottom:9px}.stat strong{font-size:27px;color:#30264c}.stat small{display:block;color:var(--green);font-size:11px;margin-top:6px}.icon{width:45px;height:45px;border-radius:13px;background:#f2ebff;color:var(--purple2);display:grid;place-items:center;font-size:22px}
.grid{display:grid;grid-template-columns:1.15fr .85fr;gap:17px;margin-bottom:17px}.card-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:17px}.card-title h2{font-size:16px;margin:0}.card-title span{font-size:11px;color:var(--muted)}
.chartrow{display:flex;align-items:center;gap:28px}.donut{width:170px;height:170px;border-radius:50%;background:conic-gradient(#18b9d0 0 25%,#d72bc9 25% 50%,#f1d51b 50% 75%,#24b98c 75% 100%);position:relative;flex:none}.donut:after{content:"4\A طلاب";white-space:pre;position:absolute;inset:25px;border-radius:50%;background:white;display:grid;place-content:center;text-align:center;font-size:19px;font-weight:bold;line-height:1.5;color:#30264c}
.legend{display:grid;gap:14px;flex:1}.legend div{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:#6e6980}.dot{width:9px;height:9px;border-radius:50%;display:inline-block;margin-left:8px}
.performance{display:grid;gap:15px}.student-mini{display:flex;align-items:center;gap:11px}.face{width:42px;height:42px;border-radius:50%;background:#f4e9ff;display:grid;place-items:center;font-size:21px}.student-mini .name{font-size:12px;font-weight:bold}.student-mini small{display:block;color:var(--muted);font-size:10px;margin-top:5px}.tag{margin-right:auto;border-radius:20px;padding:5px 9px;background:#e8faf4;color:#15966e;font-size:10px}
.bars{height:180px;display:flex;align-items:end;justify-content:space-around;gap:15px;padding:12px 10px 0;border-bottom:1px solid var(--line);background:repeating-linear-gradient(to top,transparent 0,transparent 43px,#f1eff6 44px)}.bar-group{height:100%;display:flex;align-items:end;gap:5px;position:relative;padding-bottom:0}.bar{width:17px;border-radius:5px 5px 0 0;min-height:5px}.bar-label{position:absolute;bottom:-23px;right:50%;transform:translateX(50%);font-size:10px;color:var(--muted);white-space:nowrap}
.table-wrap{overflow-x:auto}table{width:100%;border-collapse:collapse;min-width:520px}th,td{text-align:right;padding:13px 10px;border-bottom:1px solid var(--line);font-size:12px}th{color:var(--muted);font-weight:normal;background:#fcfbfe}td{color:#49445d}.pill{padding:5px 10px;border-radius:20px;font-size:10px}.pass{background:#e7faf3;color:#14976d}.review{background:#fff0f2;color:#d94c68}.grade{background:#f1ebff;color:#6531b2}
.mercy{display:grid;grid-template-columns:1fr 1fr;gap:15px}.mercy-box{background:#faf8ff;border:1px solid #eee7fb;padding:15px;border-radius:11px}.mercy-box strong{font-size:23px;color:var(--purple2)}.mercy-box small{display:block;color:var(--muted);font-size:11px;margin-top:6px}
.footer{text-align:center;color:#aaa5b6;font-size:11px;padding:22px}
@media(max-width:850px){.stats{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:1fr}.topmeta{gap:10px}.container{margin-top:20px}}
@media(max-width:520px){.topbar{padding:0 15px}.topmeta .hide{display:none}.container{padding:0 12px}.heading{align-items:start;gap:10px;flex-direction:column}.stats{gap:9px}.card{padding:14px}.stat strong{font-size:22px}.chartrow{gap:15px}.donut{width:130px;height:130px}.donut:after{inset:20px;font-size:16px}.filters select{min-width:0;width:50%}.mercy{grid-template-columns:1fr 1fr}}
</style>
</head>
<body>
<header class="topbar">
  <div class="brand"><div class="logo">🎓</div><div>بوابة الجامعة <small style="display:block;font-size:10px;font-weight:normal;color:#d6c7f5;margin-top:3px">نظام إدارة وتحليل نتائج الطلاب</small></div></div>
  <div class="topmeta"><span class="hide">لوحة التحكم</span><span class="hide">التقارير</span><span>🔔</span><span class="avatar">م</span></div>
</header>
<main class="container">
  <div class="heading"><div><h1>لوحة تحليل الطلاب</h1><p>نظرة عامة على الأداء الأكاديمي والحضور ونتائج لجنة الرأفة</p></div><div class="date">📅 الفصل الدراسي الحالي</div></div>
  <div class="filters"><select><option>كل الفرق الدراسية</option></select><select><option>جميع الطلاب</option></select></div>
  <section class="stats">
    <div class="card stat"><div><div class="label">إجمالي الطلاب</div><strong id="studentCount">—</strong><small>● بيانات الطلاب المسجلين</small></div><div class="icon">👥</div></div>
    <div class="card stat"><div><div class="label">متوسط الحضور</div><strong id="attendance">—</strong><small>● نسبة الحضور العامة</small></div><div class="icon">🗓️</div></div>
    <div class="card stat"><div><div class="label">متوسط الدرجات</div><strong id="average">—</strong><small>● من 100 درجة</small></div><div class="icon">📊</div></div>
    <div class="card stat"><div><div class="label">الطلاب الناجحون</div><strong id="passed">—</strong><small>● حسب شروط النجاح</small></div><div class="icon">🏆</div></div>
  </section>
  <section class="grid">
    <div class="card"><div class="card-title"><h2>توزيع الطلاب حسب التقدير</h2><span>تحليل أكاديمي</span></div><div class="chartrow"><div class="donut"></div><div class="legend" id="gradeLegend"></div></div></div>
    <div class="card"><div class="card-title"><h2>ملخص الأداء</h2><span>أفضل متوسطات</span></div><div class="performance" id="topStudents"></div></div>
  </section>
  <section class="grid">
    <div class="card"><div class="card-title"><h2>مقارنة درجات المواد</h2><span>درجات الطلاب الثلاثة</span></div><div class="bars" id="bars"></div></div>
    <div class="card"><div class="card-title"><h2>لجنة الرأفة</h2><span>إضافة 5 درجات للمتوسط</span></div><div class="mercy"><div class="mercy-box"><strong id="mercyCount">0</strong><small>عدد الطلاب المستفيدين</small></div><div class="mercy-box"><strong id="mercyAverage">0</strong><small>متوسطهم بعد الرأفة</small></div></div><div class="table-wrap" style="margin-top:12px"><table><thead><tr><th>الطالب</th><th>قبل</th><th>بعد</th></tr></thead><tbody id="mercyRows"></tbody></table></div></div>
  </section>
  <section class="card"><div class="card-title"><h2>تفاصيل نتائج الطلاب</h2><span>التقرير الأكاديمي الكامل</span></div><div class="table-wrap"><table><thead><tr><th>رقم الجلوس</th><th>اسم الطالب</th><th>المتوسط</th><th>التقدير</th><th>الحضور</th><th>النتيجة</th></tr></thead><tbody id="studentRows"></tbody></table></div></section>
  <div class="footer">نظام إدارة وتحليل نتائج الطلاب • تم إنشاء التقرير باستخدام JavaScript</div>
</main>
<script>
class Student {
  constructor(id, name, grades, attendance) {
    this.id = id; this.name = name; this.grades = grades; this.attendance = attendance;
  }
  calculateAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return this.grades.length ? total / this.grades.length : 0;
  }
  calculateGrade(average) {
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    else if (average >= 50) return "E";
    else return "F";
  }
  getFinalResult(average) {
    return average >= 50 && this.attendance >= 75 ? "ناجح" : "يحتاج مراجعة";
  }
}
const studentsList = [
  new Student(101, "أحمد", [90, 85, 95], 90),
  new Student(102, "محمد", [45, 48, 42], 80),
  new Student(103, "سارة", [70, 75, 80], 85),
  new Student(104, "مريم", [40, 45, 48], 90)
];
const averageOf = s => s.calculateAverage();
const averageAll = studentsList.reduce((sum, s) => sum + averageOf(s), 0) / studentsList.length;
const attendanceAll = studentsList.reduce((sum, s) => sum + s.attendance, 0) / studentsList.length;
const passedCount = studentsList.filter(s => s.getFinalResult(averageOf(s)) === "ناجح").length;
const strugglingStudents = studentsList.filter(s => averageOf(s) >= 40 && averageOf(s) <= 49);
const mercyStudents = strugglingStudents.map(s => ({
  id: s.id, name: s.name, oldAverage: averageOf(s), newAverage: averageOf(s) + 5
}));
const totalNewAverages = mercyStudents.reduce((sum, s) => sum + s.newAverage, 0);
const mercyAverage = mercyStudents.length > 0 ? totalNewAverages / mercyStudents.length : 0;
const fmt = n => Number(n).toFixed(1) + "%";
document.getElementById("studentCount").textContent = studentsList.length;
document.getElementById("attendance").textContent = fmt(attendanceAll);
document.getElementById("average").textContent = fmt(averageAll);
document.getElementById("passed").textContent = passedCount;
const gradeCounts = ["A","B","C","D","E","F"].map(g => ({grade:g,count:studentsList.filter(s=>s.calculateGrade(averageOf(s))===g).length}));
document.getElementById("gradeLegend").innerHTML = gradeCounts.map((x,i)=><div><span><i class="dot" style="background:${["#18b9d0","#d72bc9","#f1d51b","#24b98c","#8b6bd6","#ed6c82"][i]}"></i>التقدير ${x.grade}</span><b>${x.count}</b></div>).join("");
document.getElementById("topStudents").innerHTML = [...studentsList].sort((a,b)=>averageOf(b)-averageOf(a)).slice(0,3).map((s,i)=><div class="student-mini"><div class="face">${["👩🏻‍🎓","👨🏻‍🎓","👩🏽‍🎓"][i]}</div><div><div class="name">${s.name}</div><small>المتوسط ${averageOf(s).toFixed(1)} • الحضور ${s.attendance}%</small></div><span class="tag">${s.calculateGrade(averageOf(s))}</span></div>).join("");
const subjects = ["المادة الأولى","المادة الثانية","المادة الثالثة"];
const barColors = ["#4b18a5","#1eb9d0","#f0a51c"];
document.getElementById("bars").innerHTML = subjects.map((sub,i)=><div class="bar-group">${studentsList.map((s,j)=><div class="bar" title="${s.name}: ${s.grades[i]}" style="height:${s.grades[i]}%;background:${barColors[j%3]}"></div>).join("")}<span class="bar-label">${sub}</span></div>).join("");
document.getElementById("studentRows").innerHTML = studentsList.map(s=>{const avg=averageOf(s),result=s.getFinalResult(avg);return <tr><td>${s.id}</td><td><b>${s.name}</b></td><td>${avg.toFixed(2)}</td><td><span class="pill grade">${s.calculateGrade(avg)}</span></td><td>${s.attendance}%</td><td><span class="pill ${result==="ناجح"?"pass":"review"}">${result}</span></td></tr>}).join("");
document.getElementById("mercyCount").textContent = mercyStudents.length;
document.getElementById("mercyAverage").textContent = mercyAverage.toFixed(2);
document.getElementById("mercyRows").innerHTML = mercyStudents.length ? mercyStudents.map(s=><tr><td>${s.name}</td><td>${s.oldAverage.toFixed(2)}</td><td><b>${s.newAverage.toFixed(2)}</b></td></tr>).join("") : '<tr><td colspan="3">لا يوجد طلاب متعثرون</td></tr>';
console.log("تقرير الطلاب:", studentsList.map(s=>({الاسم:s.name, المتوسط:averageOf(s), التقدير:s.calculateGrade(averageOf(s)), النتيجة:s.getFinalResult(averageOf(s))})));
console.log("طلاب لجنة الرأفة:", mercyStudents);
console.log("متوسط الطلاب بعد الرأفة:", mercyAverage);
</script>
</body>
</html>

import { Calendar, User, Wrench, CheckCircle2, ArrowDown, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const timelineData = [
  { week: 1, date: "15/3", day: "الأربعاء", phase: "تخطيط المشروع", responsible: "رحمة + سما + منة", task: "تقسيم المشروع والأدوار وإنشاء ملفات المشروع", tools: "VS Code", output: "هيكل المشروع" },
  { week: 1, date: "18/3", day: "السبت", phase: "تجهيز المحتوى", responsible: "منة", task: "جمع النصوص العلمية للمقررات الثلاثة", tools: "Word - كتاب الوزارة", output: "محتوى جاهز للبرمجة" },
  { week: 2, date: "22/3", day: "الأربعاء", phase: "تصميم الواجهة", responsible: "رحمة", task: "وضع وتصميم أولي لصفحات المشروع", tools: "VS Code - CSS", output: "نموذج تصميم الواجهة" },
  { week: 2, date: "25/3", day: "السبت", phase: "إنشاء الصفحات", responsible: "سما", task: "بناء صفحات HTML الأساسية", tools: "VS Code - HTML", output: "صفحات أولية للمشروع" },
  { week: 3, date: "29/3", day: "الأربعاء", phase: "تنسيق CSS", responsible: "منة + سما", task: "إضافة الألوان والخطوط والتخطيط", tools: "CSS - VS Code", output: "واجهة متناسقة وجذابة" },
  { week: 3, date: "1/4", day: "السبت", phase: "إدخال المحتوى", responsible: "رحمة", task: "إرسال النصوص والأنشطة داخل الصفحات", tools: "HTML", output: "صفحات تعليمية مبرمجة" },
  { week: 4, date: "5/4", day: "الأربعاء", phase: "إنتاج الوسائط", responsible: "سما", task: "تصميم الصور والأيقونات التفاعلية", tools: "Canva", output: "عناصر بصرية جاهزة" },
  { week: 4, date: "8/4", day: "السبت", phase: "ربط الملفات", responsible: "منة", task: "إضافة الروابط وأزرار التنقل", tools: "HTML / CSS", output: "تنقل تفاعلي بين العروض" },
  { week: 5, date: "12/4", day: "الأربعاء", phase: "إضافة التفاعل", responsible: "منة", task: "تصميم تفاعلي وإضافة تأثيرات حركية", tools: "HTML / CSS", output: "مقررات تفاعلية كاملة" },
  { week: 5, date: "15/4", day: "السبت", phase: "اختبار المشروع", responsible: "رحمة + منة + سما", task: "تجربة الصفحات والمكونات وعناصر التفاعلية", tools: "Browser", output: "تقرير الأخطاء" },
  { week: 6, date: "19/4", day: "الأربعاء", phase: "التعديل النهائي", responsible: "رحمة + سما + منة", task: "إصلاح الأخطاء وتعديل وتفعيل الأزرار", tools: "VS Code - CSS - HTML", output: "نسخة نهائية محسنة" },
  { week: 6, date: "22/4", day: "السبت", phase: "مراجعة المحتوى", responsible: "رحمة", task: "ضبط النصوص العلمية والأنشطة", tools: "Word", output: "محتوى جاهز للعرض" },
  { week: 7, date: "26/4", day: "الأربعاء", phase: "المراجعة النهائية", responsible: "سما", task: "تحسين الواجهة النهائية", tools: "CSS", output: "تصميم نهائي للعرض" },
  { week: 7, date: "29/4", day: "السبت", phase: "اختبار شامل", responsible: "رحمة + سما + منة", task: "تجربة كاملة للمقررات", tools: "Laptop", output: "تقرير الأخطاء" },
  { week: 8, date: "3/5", day: "الأربعاء", phase: "التأكد من جميع العناصر", responsible: "رحمة + سما + منة", task: "مراجعة نهائية", tools: "جميع الأدوات السابقة", output: "نسخة نهائية جاهزة" },
  { week: 8, date: "6/5", day: "السبت", phase: "تجهيز العرض", responsible: "رحمة + سما + منة", task: "إعداد عرض للمشروع", tools: "PowerPoint", output: "عرض جاهز" },
  { week: 9, date: "10/5", day: "الأربعاء", phase: "بروفة العرض", responsible: "رحمة + سما + منة", task: "التدريب على عرض المشروع النهائي", tools: "Laptop", output: "جاهزية المشروع" },
  { week: 9, date: "13/5", day: "السبت", phase: "العرض والتسليم", responsible: "رحمة + سما + منة", task: "تقديم المشروع النهائي", tools: "Laptop", output: "تسليم المشروع" }
];

export default function ProjectTimeline() {
  return (
    <div className="relative py-10">
      {/* Vertical line connecting timeline nodes */}
      <div className="absolute right-[28px] md:right-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-primary/10 via-primary/30 to-accent/10 rounded-full md:translate-x-1/2" />

      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <AnimatedSection
              key={index}
              animation={isEven ? "fade-right" : "fade-left"}
              className="relative flex items-center md:justify-between flex-col md:flex-row gap-6 md:gap-0"
            >
              {/* Timeline Marker (Circle) */}
              <div className="absolute right-[12px] md:right-1/2 w-9 h-9 rounded-full bg-background border-4 border-primary/50 shadow-glow-purple flex items-center justify-center md:translate-x-1/2 z-10">
                <span className="text-[10px] font-bold text-primary">{item.week}</span>
              </div>

              {/* Left Content (or top content on mobile) */}
              <div className={`w-full md:w-[calc(50%-3rem)] pr-14 md:pr-0 ${isEven ? 'md:text-left md:pl-14' : 'md:order-last md:pr-14'}`}>
                <div className={`cosmic-glass rounded-2xl p-5 hover-lift transition-all duration-300 ${isEven ? 'neon-border-purple' : 'neon-border-cyan'}`}>
                  
                  {/* Date Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 ${isEven ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.day} - {item.date}</span>
                  </div>

                  {/* Phase Title */}
                  <h3 className="text-xl font-extrabold mb-4">{item.phase}</h3>

                  {/* Details Grid */}
                  <div className="grid gap-3 text-sm">
                    {/* Task */}
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 bg-background/50 p-1 rounded-md text-muted-foreground shrink-0">
                        <Target className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground/80 block text-[10px] uppercase tracking-wider mb-0.5">المهمة</span>
                        <span className="font-medium">{item.task}</span>
                      </div>
                    </div>

                    {/* Responsible */}
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 bg-background/50 p-1 rounded-md text-muted-foreground shrink-0">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground/80 block text-[10px] uppercase tracking-wider mb-0.5">المسؤول</span>
                        <span className="font-medium text-primary">{item.responsible}</span>
                      </div>
                    </div>

                    {/* Tools & Output */}
                    <div className="grid grid-cols-2 gap-3 mt-1 pt-3 border-t border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Wrench className="h-3 w-3" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">الأدوات</span>
                        </div>
                        <p className="font-medium text-xs truncate" title={item.tools}>{item.tools}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">الناتج</span>
                        </div>
                        <p className="font-medium text-xs truncate" title={item.output}>{item.output}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}

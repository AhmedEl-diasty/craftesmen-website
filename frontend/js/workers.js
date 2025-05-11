const workersDatabase = {
  "نجار": [
    {
      id: 1,
      name: "أحمد محمود",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 120,
      price: 450,
      location: "القاهرة",
      description: "نجار محترف بخبرة 15 عاماً في أعمال النجارة والديكورات الخشبية"
    },
    {
      id: 2,
      name: "محمد علي",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 95,
      price: 600,
      location: "الإسكندرية",
      description: "متخصص في صناعة الأثاث الخشبي والديكورات المنزلية"
    },
    {
      id: 3,
      name: "خالد سعيد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.9,
      reviews: 150,
      price: 800,
      location: "الجيزة",
      description: "خبير في أعمال النجارة الفاخرة والديكورات الكلاسيكية"
    },
    {
      id: 4,
      name: "عبد الرحمن محمد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 110,
      price: 550,
      location: "الإسكندرية",
      description: "متخصص في أعمال النجارة الحديثة والديكورات المعاصرة"
    },
    {
      id: 5,
      name: "مصطفى أحمد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 130,
      price: 700,
      location: "المنصورة",
      description: "متخصص في صناعة المطابخ والديكورات الخشبية"
    },
    {
      id: 6,
      name: "سعيد محمود",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 90,
      price: 400,
      location: "القاهرة",
      description: "متخصص في أعمال النجارة البسيطة والأثاث المنزلي"
    },
    {
      id: 61,
      name: "يوسف عبدالله",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 85,
      price: 550,
      location: "أسوان",
      description: "نجار متخصص في الأعمال الخشبية التقليدية النوبية بخبرة 12 عامًا"
    },
    {
      id: 62,
      name: "محمد طارق",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 92,
      price: 600,
      location: "الأقصر",
      description: "متخصص في تصنيع وترميم الأثاث الخشبي الفاخر بخبرة 15 عامًا"
    },
    {
      id: 63,
      name: "عمر سمير",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 105,
      price: 650,
      location: "شرم الشيخ",
      description: "نجار محترف متخصص في أعمال الديكورات الخشبية للفنادق والمنتجعات"
    },
    {
      id: 64,
      name: "كريم هاني",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 78,
      price: 480,
      location: "الغردقة",
      description: "خبير في تصنيع الأثاث الخشبي المناسب للمناطق الساحلية والفنادق"
    },
    {
      id: 65,
      name: "علي رضا",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 88,
      price: 520,
      location: "الإسماعيلية",
      description: "نجار ماهر في تصنيع المطابخ وخزائن الملابس بتصميمات عصرية"
    },
    {
      id: 66,
      name: "حسام وليد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 95,
      price: 580,
      location: "بورسعيد",
      description: "متخصص في أعمال النجارة البحرية وتصنيع قوارب الصيد الخشبية الصغيرة"
    },
    {
      id: 67,
      name: "عادل نبيل",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.4,
      reviews: 70,
      price: 450,
      location: "السويس",
      description: "نجار متمرس في أعمال النجارة العامة والإصلاحات المنزلية السريعة"
    },
    {
      id: 68,
      name: "حازم محسن",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.3,
      reviews: 65,
      price: 420,
      location: "بني سويف",
      description: "نجار خبير في تصنيع الأثاث المنزلي التقليدي بأسعار اقتصادية"
    },
    {
      id: 69,
      name: "فارس أمين",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 80,
      price: 500,
      location: "المنيا",
      description: "نجار متخصص في إعادة تدوير الأخشاب وإعادة تأهيل الأثاث القديم"
    },
    {
      id: 70,
      name: "سامح صلاح",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 84,
      price: 530,
      location: "سوهاج",
      description: "متخصص في تصنيع الأبواب والنوافذ الخشبية بتصميمات تقليدية وحديثة"
    }
  ],
  "سباك": [
    {
      id: 7,
      name: "محمود أحمد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.9,
      reviews: 180,
      price: 400,
      location: "الجيزة",
      description: "سباك محترف بخبرة 20 عاماً في أعمال السباكة والتمديدات"
    },
    {
      id: 8,
      name: "سعيد خالد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 130,
      price: 550,
      location: "القاهرة",
      description: "متخصص في أعمال السباكة المنزلية والتجارية"
    },
    {
      id: 9,
      name: "علي محمود",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 160,
      price: 700,
      location: "الإسكندرية",
      description: "خبير في أعمال السباكة المعقدة والتمديدات الصناعية"
    },
    {
      id: 10,
      name: "حسن محمد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 100,
      price: 450,
      location: "طنطا",
      description: "متخصص في أعمال السباكة السريعة والصيانة الدورية"
    },
    {
      id: 11,
      name: "خالد أحمد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 120,
      price: 500,
      location: "القاهرة",
      description: "متخصص في إصلاح تسربات المياه وتركيب السخانات"
    },
    {
      id: 12,
      name: "أحمد سعيد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 85,
      price: 350,
      location: "المنصورة",
      description: "متخصص في أعمال السباكة البسيطة والصيانة المنزلية"
    },
    {
      id: 71,
      name: "محمد عصام",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 98,
      price: 470,
      location: "أسيوط",
      description: "سباك محترف متخصص في شبكات المياه والصرف الصحي للمباني السكنية"
    },
    {
      id: 72,
      name: "أحمد عبدالحميد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 85,
      price: 450,
      location: "قنا",
      description: "سباك خبير في تركيب وصيانة السخانات وأنظمة التسخين"
    },
    {
      id: 73,
      name: "محمود فوزي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 110,
      price: 520,
      location: "الفيوم",
      description: "متخصص في تركيب شبكات المياه الحديثة وأنظمة الصرف الصحي"
    },
    {
      id: 74,
      name: "عبدالله حسن",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 82,
      price: 420,
      location: "دمياط",
      description: "سباك ماهر متخصص في معالجة تسربات المياه وإصلاح مشاكل الصرف الصحي"
    },
    {
      id: 75,
      name: "إبراهيم علي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 90,
      price: 480,
      location: "البحيرة",
      description: "متخصص في تركيب الأدوات الصحية والسيراميك لدورات المياه والمطابخ"
    },
    {
      id: 76,
      name: "محسن محمد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 95,
      price: 500,
      location: "كفر الشيخ",
      description: "سباك محترف في تركيب ضفايات المطابخ وإصلاح تسربات المياه"
    },
    {
      id: 77,
      name: "أسامة نبيل",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.4,
      reviews: 75,
      price: 380,
      location: "المنوفية",
      description: "سباك متخصص في إصلاح وتركيب مواسير المياه والصرف الصحي"
    },
    {
      id: 78,
      name: "طارق سمير",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 80,
      price: 430,
      location: "الأقصر",
      description: "سباك ماهر في تجديد الحمامات وتركيب الأدوات الصحية الحديثة"
    },
    {
      id: 79,
      name: "حاتم كامل",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 88,
      price: 490,
      location: "الغردقة",
      description: "متخصص في أنظمة السباكة للفنادق والمنتجعات السياحية"
    },
    {
      id: 80,
      name: "وائل سليمان",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 92,
      price: 510,
      location: "شرم الشيخ",
      description: "سباك محترف متخصص في تركيب وصيانة أنظمة المياه للفنادق والمنتجعات"
    }
  ],
  "كهربائي": [
    {
      id: 13,
      name: "أحمد سعيد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.9,
      reviews: 200,
      price: 500,
      location: "القاهرة",
      description: "كهربائي محترف بخبرة 18 عاماً في أعمال الكهرباء والتمديدات"
    },
    {
      id: 14,
      name: "محمد خالد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 140,
      price: 650,
      location: "الجيزة",
      description: "متخصص في أعمال الكهرباء المنزلية والتجارية"
    },
    {
      id: 15,
      name: "خالد أحمد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 170,
      price: 800,
      location: "الإسكندرية",
      description: "خبير في أعمال الكهرباء الصناعية والأنظمة الذكية"
    },
    {
      id: 16,
      name: "سعيد محمود",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 120,
      price: 550,
      location: "طنطا",
      description: "متخصص في أعمال الكهرباء والصيانة الدورية"
    },
    {
      id: 17,
      name: "محمود علي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 130,
      price: 600,
      location: "القاهرة",
      description: "متخصص في تركيب أنظمة الإنارة والتحكم الذكي"
    },
    {
      id: 18,
      name: "علي سعيد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 95,
      price: 450,
      location: "المنصورة",
      description: "متخصص في أعمال الكهرباء المنزلية البسيطة"
    },
    {
      id: 81,
      name: "عمرو سعيد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 95,
      price: 520,
      location: "الزقازيق",
      description: "كهربائي محترف متخصص في تركيب وصيانة الأنظمة الكهربائية المنزلية"
    },
    {
      id: 82,
      name: "هاني كمال",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 105,
      price: 550,
      location: "الشرقية",
      description: "كهربائي خبير في تركيب أنظمة الإضاءة الذكية والأتمتة المنزلية"
    },
    {
      id: 83,
      name: "محمد يحيى",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 88,
      price: 480,
      location: "بنها",
      description: "متخصص في إصلاح الأعطال الكهربائية وتركيب لوحات التوزيع"
    },
    {
      id: 84,
      name: "سمير جمال",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 82,
      price: 450,
      location: "المحلة الكبرى",
      description: "كهربائي ماهر متخصص في تركيب وصيانة أنظمة الإنارة التجارية والمنزلية"
    },
    {
      id: 85,
      name: "خالد ماهر",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 92,
      price: 510,
      location: "أسوان",
      description: "كهربائي محترف في تركيب وصيانة أنظمة التكييف والتبريد الكهربائية"
    },
    {
      id: 86,
      name: "حازم نور",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.9,
      reviews: 120,
      price: 580,
      location: "دمياط",
      description: "كهربائي متخصص في أنظمة الطاقة الشمسية والمتجددة للمنازل"
    },
    {
      id: 87,
      name: "حسين أحمد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 85,
      price: 460,
      location: "الإسماعيلية",
      description: "كهربائي ماهر في إصلاح وتركيب أنظمة الإنذار والأمان المنزلية"
    },
    {
      id: 88,
      name: "مصطفى حسين",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 90,
      price: 490,
      location: "أسيوط",
      description: "كهربائي متخصص في تركيب وصيانة أنظمة الصوت والإضاءة للمناسبات"
    },
    {
      id: 89,
      name: "فايز محمود",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 98,
      price: 540,
      location: "سوهاج",
      description: "كهربائي محترف في أعمال الكهرباء للمشاريع التجارية والسكنية"
    },
    {
      id: 90,
      name: "وليد مجدي",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 87,
      price: 470,
      location: "قنا",
      description: "كهربائي ماهر في إصلاح الأعطال الكهربائية وتجديد التمديدات القديمة"
    }
  ],
  "دهان": [
    {
      id: 19,
      name: "محمود سعيد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 150,
      price: 450,
      location: "القاهرة",
      description: "دهان محترف بخبرة 15 عاماً في أعمال الدهان والديكورات"
    },
    {
      id: 20,
      name: "علي أحمد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 130,
      price: 600,
      location: "الجيزة",
      description: "متخصص في أعمال الدهان والديكورات المنزلية"
    },
    {
      id: 21,
      name: "خالد محمد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.9,
      reviews: 180,
      price: 750,
      location: "الإسكندرية",
      description: "خبير في أعمال الدهان الفاخر والديكورات الكلاسيكية"
    },
    {
      id: 22,
      name: "سعيد علي",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 110,
      price: 500,
      location: "المنصورة",
      description: "متخصص في أعمال الدهان الحديث والديكورات المعاصرة"
    },
    {
      id: 23,
      name: "أحمد خالد",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 140,
      price: 550,
      location: "طنطا",
      description: "متخصص في دهان الجدران والأسقف والديكورات الداخلية"
    },
    {
      id: 24,
      name: "محمد سعيد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 90,
      price: 400,
      location: "القاهرة",
      description: "متخصص في أعمال الدهان البسيطة والترميم"
    },
    {
      id: 91,
      name: "محمد رامي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 105,
      price: 520,
      location: "المنصورة",
      description: "دهان محترف متخصص في أعمال الديكور والدهانات الحديثة المتنوعة"
    },
    {
      id: 92,
      name: "أحمد فتحي",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 95,
      price: 490,
      location: "بورسعيد",
      description: "دهان خبير في تنفيذ الدهانات الزخرفية والإيبوكسي للأرضيات"
    },
    {
      id: 93,
      name: "سيد كرم",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 88,
      price: 460,
      location: "السويس",
      description: "متخصص في دهان الواجهات الخارجية ومعالجة الرطوبة للمباني"
    },
    {
      id: 94,
      name: "هشام علام",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.9,
      reviews: 120,
      price: 550,
      location: "الشرقية",
      description: "دهان محترف في تنفيذ الديكورات الداخلية وأحدث تقنيات الدهان"
    },
    {
      id: 95,
      name: "محمود صابر",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.5,
      reviews: 82,
      price: 430,
      location: "الفيوم",
      description: "دهان ماهر في أعمال ترميم المباني القديمة والدهانات التقليدية"
    },
    {
      id: 96,
      name: "عادل محمد",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 90,
      price: 470,
      location: "المنيا",
      description: "متخصص في دهانات الأثاث وإعادة تأهيل الأثاث القديم"
    },
    {
      id: 97,
      name: "صلاح الدين",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 92,
      price: 510,
      location: "بني سويف",
      description: "دهان محترف في تنفيذ الدهانات الديكورية والرسم على الجدران"
    },
    {
      id: 98,
      name: "عماد رفعت",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.8,
      reviews: 100,
      price: 530,
      location: "دمياط",
      description: "دهان متخصص في دهان الأثاث الخشبي والمعدني بتقنيات عالية الجودة"
    },
    {
      id: 99,
      name: "وائل عثمان",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.6,
      reviews: 87,
      price: 480,
      location: "الغردقة",
      description: "متخصص في دهانات المنشآت السياحية والفنادق بأعلى جودة"
    },
    {
      id: 100,
      name: "سامح جلال",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: 4.7,
      reviews: 94,
      price: 500,
      location: "شرم الشيخ",
      description: "دهان محترف متخصص في أعمال الديكور والدهانات للقرى والمنتجعات السياحية"
    }
  ]
};

// Cache for workers by profession to improve performance
const workersByProfessionCache = {};

// Function to get workers by profession
function getWorkersByProfession(profession) {
  // Check if results are already cached
  if (workersByProfessionCache[profession]) {
    return workersByProfessionCache[profession];
  }
  
  // Get predefined workers from database
  const predefinedWorkers = workersDatabase[profession] || [];
  
  // Get registered workers from localStorage
  const registeredWorkers = getRegisteredWorkersByProfession(profession);
  
  // Get all available governorates from the system
  const allGovernorates = [
    "القاهرة", "الإسكندرية", "الجيزة", "الأقصر", "أسوان", 
    "الغردقة", "شرم الشيخ", "الإسماعيلية", "بورسعيد", "السويس", 
    "بني سويف", "المنيا", "سوهاج", "قنا", "أسيوط", 
    "الفيوم", "دمياط", "البحيرة", "كفر الشيخ", "المنوفية", 
    "المنصورة", "الشرقية", "الزقازيق", "بنها", "طنطا", "المحلة الكبرى"
  ];
  
  // Check which governorates are missing for this profession
  const existingLocations = new Set([
    ...predefinedWorkers.map(worker => worker.location),
    ...registeredWorkers.map(worker => worker.location)
  ]);
  
  const missingGovernorates = allGovernorates.filter(
    governorate => !existingLocations.has(governorate)
  );
  
  // Generate virtual workers for missing governorates
  const virtualWorkers = [];
  
  if (missingGovernorates.length > 0) {
    console.log(`Generating workers for ${profession} in ${missingGovernorates.length} missing governorates`);
    
    // Base ID for virtual workers (start from a high number to avoid conflicts)
    const baseId = 10000 + Object.keys(workersDatabase).indexOf(profession) * 1000;
    
    // Name patterns based on profession
    let namePattern;
    let descPattern;
    let priceRange;
    
    switch(profession) {
      case "نجار":
        namePattern = ["محمد", "أحمد", "علي", "حسن", "خالد", "عمر", "سامي", "كريم"];
        descPattern = "نجار محترف متخصص في أعمال النجارة والأثاث الخشبي بخبرة ممتازة";
        priceRange = { min: 400, max: 800 };
        break;
      case "سباك":
        namePattern = ["أحمد", "محمود", "سعيد", "خالد", "رامي", "كمال", "حسام", "إبراهيم"];
        descPattern = "سباك خبير في أعمال السباكة وتمديدات المياه والصرف الصحي";
        priceRange = { min: 350, max: 700 };
        break;
      case "كهربائي":
        namePattern = ["مصطفى", "محمد", "عمرو", "حازم", "صلاح", "سمير", "يوسف", "مراد"];
        descPattern = "كهربائي متمرس في أعمال التمديدات والصيانة الكهربائية";
        priceRange = { min: 450, max: 850 };
        break;
      case "دهان":
        namePattern = ["حسام", "وائل", "عادل", "طارق", "نادر", "هشام", "نبيل", "أشرف"];
        descPattern = "دهان محترف في أعمال الطلاء والديكورات الداخلية والخارجية";
        priceRange = { min: 400, max: 750 };
        break;
      default:
        namePattern = ["محمد", "أحمد", "محمود", "خالد", "علي"];
        descPattern = "حرفي متخصص ومحترف في مجاله";
        priceRange = { min: 400, max: 700 };
    }
    
    // Create a worker for each missing governorate
    missingGovernorates.forEach((governorate, index) => {
      const firstName = namePattern[Math.floor(Math.random() * namePattern.length)];
      const lastName = namePattern[Math.floor(Math.random() * namePattern.length)];
      const rating = (4.5 + Math.random() * 0.4).toFixed(1);
      const reviews = Math.floor(60 + Math.random() * 140);
      const price = Math.floor(priceRange.min + Math.random() * (priceRange.max - priceRange.min));
      
      virtualWorkers.push({
        id: baseId + index,
        name: `${firstName} ${lastName}`,
        image: index % 2 === 0 
          ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400"
          : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
        rating: parseFloat(rating),
        reviews: reviews,
        price: price,
        location: governorate,
        description: `${descPattern} في ${governorate}`,
        profession: profession,
        isVirtualWorker: true
      });
    });
  }
  
  // Combine all workers
  const result = [...predefinedWorkers, ...registeredWorkers, ...virtualWorkers];
  
  // Cache the results to improve performance
  workersByProfessionCache[profession] = result;
  
  return result;
}

// Function to get registered workers by profession from localStorage
function getRegisteredWorkersByProfession(profession) {
  try {
    // Get all users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Filter users who are workers with the specified profession
    const workers = users.filter(user => 
      user.role === 'worker' && 
      user.profession === profession
    );
    
    // Map users to worker format
    return workers.map(user => ({
      id: user.id,
      name: user.name || 'حرفي',
      image: user.profileImage || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
      rating: user.rating || 0,
      reviews: user.reviews || 0,
      price: user.price || 500,
      location: user.location || 'غير محدد',
      description: user.description || 'حرفي متاح للخدمات',
      profession: user.profession,
      isRegisteredUser: true  // Flag to identify registered users
    }));
  } catch (error) {
    console.error('Error fetching registered workers:', error);
    return [];
  }
}

// Function to get all professions
function getAllProfessions() {
  // Get predefined professions
  const predefinedProfessions = Object.keys(workersDatabase);
  
  // Get professions from registered workers
  let registeredProfessions = [];
  try {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const workerUsers = users.filter(user => user.role === 'worker' && user.profession);
    registeredProfessions = [...new Set(workerUsers.map(user => user.profession))];
  } catch (error) {
    console.error('Error getting registered professions:', error);
  }
  
  // Combine and remove duplicates
  return [...new Set([...predefinedProfessions, ...registeredProfessions])];
}

// Function to get worker by ID
function getWorkerById(id) {
  console.log('Searching for worker with ID:', id);
  
  // Normalize the ID for consistent comparison
  let normalizedId = id;
  
  // Handle string ID that might be a number
  if (typeof id === 'string' && !isNaN(Number(id))) {
    // Try also with numeric version
    normalizedId = Number(id);
  }
  
  // First, check predefined workers with both original and normalized IDs
  for (const profession in workersDatabase) {
    // Try with the original ID
    let worker = workersDatabase[profession].find(w => w.id === id);
    
    // If not found, try with the normalized ID
    if (!worker && id !== normalizedId) {
      worker = workersDatabase[profession].find(w => w.id === normalizedId);
    }
    
    // If worker found, return it with profession info
    if (worker) {
      console.log('Found predefined worker:', worker.name);
      worker.profession = profession;
      return worker;
    }
  }
  
  // Next, check for dynamically generated workers from the function
  // Get all professions
  const professions = Object.keys(workersDatabase);
  
  // Try to find the worker in each profession's virtual workers
  for (const profession of professions) {
    const workers = getWorkersByProfession(profession);
    
    // Look for virtual workers (those with isVirtualWorker flag)
    const virtualWorkers = workers.filter(worker => worker.isVirtualWorker);
    
    // Try with the original ID
    let worker = virtualWorkers.find(w => w.id === id);
    
    // If not found, try with the normalized ID
    if (!worker && id !== normalizedId) {
      worker = virtualWorkers.find(w => w.id === normalizedId);
    }
    
    // If worker found, return it
    if (worker) {
      console.log('Found virtual worker:', worker.name);
      return worker;
    }
  }
  
  // Then, check registered workers with different ID formats
  try {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    let workerUser;
    
    // Try direct match
    workerUser = users.find(user => user.id === id && user.role === 'worker');
    
    // Try with numeric version if original is string
    if (!workerUser && typeof id === 'string' && !isNaN(Number(id))) {
      workerUser = users.find(user => user.id === Number(id) && user.role === 'worker');
    }
    
    // Try 'user_' prefix variations
    if (!workerUser && typeof id === 'string') {
      // If ID already has prefix, try without it
      if (id.startsWith('user_')) {
        const idWithoutPrefix = id.replace('user_', '');
        workerUser = users.find(user => user.id === idWithoutPrefix && user.role === 'worker');
      } else {
        // Try adding prefix
        workerUser = users.find(user => user.id === `user_${id}` && user.role === 'worker');
      }
    }
    
    if (workerUser) {
      console.log('Found registered worker:', workerUser.name);
      return {
        id: workerUser.id,
        name: workerUser.name || 'حرفي',
        image: workerUser.profileImage || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTg0NjQwMA&ixlib=rb-4.0.3&q=80&w=400",
        rating: workerUser.rating || 0,
        reviews: workerUser.reviews || 0, 
        price: workerUser.price || 500,
        location: workerUser.location || 'غير محدد',
        description: workerUser.description || 'حرفي متاح للخدمات',
        profession: workerUser.profession,
        isRegisteredUser: true
      };
    }
  } catch (error) {
    console.error('Error finding registered worker:', error);
  }
  
  console.log('Worker not found with ID:', id);
  return null;
}

// Function to clear the workers cache (call this when data changes)
function clearWorkersCache() {
  for (const key in workersByProfessionCache) {
    delete workersByProfessionCache[key];
  }
} 
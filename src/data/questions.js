
export const categories = [
    {
        "id": "Friends",
        "label_en": "Friends",
        "label_ar": "صحاب",
        "color": "var(--ocean-500)",
        "description_en": "Have fun, laugh, and learn more about your friends",
        "description_ar": "انبسطوا، اضحكوا، واعرفوا صحابكم أكتر"
    },
    {
        "id": "Lovers",
        "label_en": "In a Relationship",
        "label_ar": "مرتبطين",
        "color": "var(--rose-600)",
        "description_en": "Discover new things about each other",
        "description_ar": "اكتشفوا حاجات جديدة عن بعض وقووا علاقتكم"
    },
    {
        "id": "Family",
        "label_en": "Family",
        "label_ar": "عيلة",
        "color": "var(--orange-500)",
        "description_en": "Share meaningful or funny moments with family",
        "description_ar": "شاركوا لحظات حلوة أو مضحكة مع العيلة"
    },
    {
        "id": "Coworkers",
        "label_en": "Coworkers",
        "label_ar": "صحاب شغل",
        "color": "var(--accent-500)",
        "description_en": "Play light questions to bond with colleagues",
        "description_ar": "أسئلة خفيفة ولطيفة لتقوية العلاقة مع زملاء الشغل"
    },
    {
        "id": "First Date",
        "label_en": "First Date",
        "label_ar": "أول ديت",
        "color": "var(--rose-500)",
        "description_en": "Break the ice and get to know each other in a fun way",
        "description_ar": "اكسروا الجليد واعرفوا بعض بطريقة لذيذة"
    },
    {
        "id": "First Time Meeting",
        "label_en": "First Time Meeting",
        "label_ar": "أول مرة نتقابل",
        "color": "var(--lilac-500)",
        "description_en": "Break the ice and start a conversation with new people",
        "description_ar": "افتحوا مواضيع وكلام مع ناس بتشوفوهم لأول مرة"
    }
];

export const genres = [
    {
        "id": "Funny",
        "label_en": "Funny",
        "label_ar": "مضحك",
        "color": "var(--orange-400)"
    },
    {
        "id": "Deep",
        "label_en": "Deep",
        "label_ar": "عميق",
        "color": "var(--ocean-400)"
    },
    {
        "id": "Awkward",
        "label_en": "Awkward",
        "label_ar": "محرج",
        "color": "var(--rose-400)"
    },
    {
        "id": "Honest",
        "label_en": "Honest",
        "label_ar": "بصراحة",
        "color": "var(--accent-400)"
    },
    {
        "id": "Know me",
        "label_en": "Know Me Better",
        "label_ar": "أعرفني أكتر",
        "color": "var(--lilac-400)"
    },
    {
        "id": "What If",
        "label_en": "What If...",
        "label_ar": "ماذا لو...",
        "color": "var(--green-400)"
    }
];

export const questions = [
    {
        "id": "q1",
        "text_en": "If you could have dinner with any historical figure, who would it be and what would you ask them?",
        "text_ar": "لو قدرت تتعشى مع أي شخصية تاريخية، تختار مين وهتسأله إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q2",
        "text_en": "What's your unpopular food opinion that you're willing to defend?",
        "text_ar": "إيه رأيك الغريب في الأكل اللي مستعد تدافع عنه؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q3",
        "text_en": "What childhood memory has shaped who you are today?",
        "text_ar": "إيه أكتر ذكرى من طفولتك أثرت في شخصيتك وخليتك الشخص اللي أنت عليه النهاردة؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q4",
        "text_en": "What's something you wish more people understood about you?",
        "text_ar": "إيه الحاجة اللي نفسك الناس تفهمها عنك أكتر؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q5",
        "text_en": "What's something I would totally go viral for?",
        "text_ar": "إيه الحاجة اللي لو عملتها ممكن أطلع بيها تريند؟",
        "category": [
            "Coworkers",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q6",
        "text_en": "When do you feel most like yourself?",
        "text_ar": "إمتى بتحس إنك على طبيعتك بجد؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q7",
        "text_en": "What's a belief or value that you'll never compromise on?",
        "text_ar": "إيه المبدأ اللي عمرك ما هتتنازل عنه أبداً؟",
        "category": [
            "Coworkers",
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q8",
        "text_en": "Who in this group would survive a zombie apocalypse the longest—and who dies first?",
        "text_ar": "مين في القعدة دي ممكن يعيش أكتر لو حصل زومبي أبوكاليبس.. ومين أول واحد هيموت؟",
        "category": [
            "Coworkers",
            "Family",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q9",
        "text_en": "What's something you're currently struggling with but rarely talk about?",
        "text_ar": "إيه الحاجة اللي بتعافر معاها الأيام دي بس مابتتكلمش عنها؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q10",
        "text_en": "If you could change one thing about me, what would it be?",
        "text_ar": "لو ممكن تغير فيا صفة واحدة، هتختار إيه؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q11",
        "text_en": "What if we swapped lives for a week — what would shock you the most?",
        "text_ar": "لو بدلنا حياتنا لمدة أسبوع، إيه أكتر حاجة هتصدمك؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q12",
        "text_en": "What if we were in a movie — what roles would we each play?",
        "text_ar": "لو إحنا في فيلم، كل واحد فينا هيلعب دور إيه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q13",
        "text_en": "What's the most embarrassing thing you've done that I don't know about?",
        "text_ar": "إيه أكتر موقف محرج عملته وأنا ماعرفش عنه حاجة؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q14",
        "text_en": "Have you ever pretended to agree with me just to avoid conflict?",
        "text_ar": "عمرك عملت نفسك موافقني في الرأي بس عشان تريح دماغك؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q15",
        "text_en": "What's something about me that annoys you but you've never said out loud?",
        "text_ar": "إيه الحاجة اللي بتضايقك فيا بس عمرك ما قلتها؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q16",
        "text_en": "What's something you've lied about recently?",
        "text_ar": "إيه الحاجة اللي كدبت فيها قريب؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q17",
        "text_en": "What if you had to relive one day of your life forever — which would you pick?",
        "text_ar": "لو هتعيش يوم واحد من حياتك وتعيده للأبد، هتختار أنهي يوم؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q18",
        "text_en": "The moment I knew I was falling for you was…",
        "text_ar": "اللحظة اللي عرفت فيها إني وقعت في حبك كانت...",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q19",
        "text_en": "If we switched lives for a day, what do you think I'd struggle with most?",
        "text_ar": "لو بدلنا حياتنا ليوم، تفتكر إيه أكتر حاجة هتعب فيها؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q20",
        "text_en": "What's my go-to comfort food when I'm stressed?",
        "text_ar": "إيه الأكلة اللي بجري عليها لما بكون متضايق أو مضغوط؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q21",
        "text_en": "I hope you never stop…",
        "text_ar": "أتمنى إنك عمرك ما تبطل...",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q22",
        "text_en": "What's something I always say or do that makes me… me?",
        "text_ar": "إيه الحاجة اللي دايما بقولها أو بعملها وبتميزني؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q23",
        "text_en": "What's one thing I'd never leave the house without?",
        "text_ar": "إيه الحاجة اللي مستحيل أنزل من البيت من غيرها؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q24",
        "text_en": "If you lost me in a supermarket, where's the first place you'd look?",
        "text_ar": "لو تهت منك في السوبر ماركت، أول مكان هتدور عليا فيه فين؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q25",
        "text_en": "If I suddenly got famous, what would it be for?",
        "text_ar": "لو بقيت مشهور فجأة، تفتكر هيكون بسبب إيه؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q26",
        "text_en": "If you could go to jail for something that I did so that I would be able to keep living my life, would you?",
        "text_ar": "لو ممكن تدخل السجن مكاني عشان أنا أكمل حياتي، هتعمل كده؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q27",
        "text_en": "My favorite part of your personality is…",
        "text_ar": "أكتر حاجة بحبها في شخصيتك هي...",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q28",
        "text_en": "What's the most attractive thing I've ever done by accident?",
        "text_ar": "إيه أكتر حركة جذابة عملتها من غير ما أقصد؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q29",
        "text_en": "Being loved by you feels like…",
        "text_ar": "محبتك ليا بحسها زي...",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q30",
        "text_en": "If your favorite celebrity confessed her love for you, would you dump me to date her?",
        "text_ar": "لو الفنانة المفضلة ليك اعترفتلك بحبها، هتسيبني عشانها؟",
        "category": [
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q31",
        "text_en": "If you develop superpowers and were sworn to keep them a secret to keep me safe, would you tell me anyways?",
        "text_ar": "لو جالك قوى خارقة وحلفت إنك تخبيها عشان تحميني، هتقولي برضو؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q32",
        "text_en": "My favorite memory of us still is…",
        "text_ar": "أحلى ذكرى لينا لسه معلقة معايا هي...",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q33",
        "text_en": "What do your friends know about me, if anything?",
        "text_ar": "صحابك يعرفوا إيه عني؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q34",
        "text_en": "If you had to describe the way I love in one sentence, what would it be?",
        "text_ar": "لو هتوصف طريقتي في الحب بجملة، هتقول إيه؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q35",
        "text_en": "What was the first thing you noticed about me when we met in person?",
        "text_ar": "إيه أول حاجة لاحظتها فيا لما اتقابلنا وش لوش؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q36",
        "text_en": "Do you believe it is better to love or be loved?",
        "text_ar": "تفتكر الأحسن إنك تحب ولا تتحب؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q37",
        "text_en": "When's the last time you ghosted someone and why?",
        "text_ar": "إمتى آخر مرة خلعت من حد (ghosting) وليه؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q38",
        "text_en": "What is the easiest way to break your trust?",
        "text_ar": "إيه أسهل طريقة الواحد يكسر بيها ثقتك؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q39",
        "text_en": "What's one thing you know about me now that you wish you knew the first day we met?",
        "text_ar": "إيه الحاجة اللي عرفتها عني دلوقتي وكان نفسك تعرفها من أول يوم؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q40",
        "text_en": "What's something I do that worries you, because you care about me?",
        "text_ar": "إيه الحاجة اللي بعملها وبتقلقك عليا عشان بتهتم بيا؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q41",
        "text_en": "Is it harder to forgive ourselves or to forgive those who hurt us?",
        "text_ar": "تفتكر أصعب نسامح نفسنا ولا نسامح اللي وجعونا؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q42",
        "text_en": "What's the most supportive thing I've done for you that you'll never forget?",
        "text_ar": "إيه أكتر موقف جدعنة عملته معاك وعمرك ما هتنساه؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q43",
        "text_en": "What feels more intense, falling in love or falling out of love?",
        "text_ar": "إيه إحساسه أقوى، لما تقع في الحب ولا لما الحب يروح؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q44",
        "text_en": "If you could grant us one wish for our future together, what would it be?",
        "text_ar": "لو ليك أمنية واحدة لمستقبلنا سوا، هتكون إيه؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q45",
        "text_en": "What was your favorite day with me?",
        "text_ar": "إيه كان أحلى يوم قضيته معايا؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q46",
        "text_en": "When did you realize I loved you-like, actually not me just saying it?",
        "text_ar": "إمتى حسيت إني بحبك بجد، مش مجرد كلام؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q47",
        "text_en": "What type of dad do you think I'll be?",
        "text_ar": "تفتكر هكون أب عامل إزاي؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q48",
        "text_en": "What's a common trait shared by everyone else that you've dated?",
        "text_ar": "إيه الصفة المشتركة في كل الناس اللي ارتبطت بيهم قبلي؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q49",
        "text_en": "What do you hope our future home looks like?",
        "text_ar": "نفسك شكل بيتنا في المستقبل يكون إزاي؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q50",
        "text_en": "If you got a call saying I'd been detained, what's your guess for why?",
        "text_ar": "لو جالك تليفون إن أنا مقبوض عليا، تفتكر التهمة هتكون إيه؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q51",
        "text_en": "Who was the first person you told about me?",
        "text_ar": "مين أول حد حكيتله عني؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q52",
        "text_en": "If I got banned from a store, which one would it be and why?",
        "text_ar": "لو اتمعنت أدخل محل، تفتكر هيكون محل إيه وليه؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q53",
        "text_en": "What changed in you after we met?",
        "text_ar": "إيه اللي اتغير فيك بعد ما عرفنا بعض؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q54",
        "text_en": "What do you know about me that would ruin my chances of ever becoming president?",
        "text_ar": "تعرف عني إيه ممكن يضيع مستقبلي لو رشحت نفسي للرئاسة؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Medium"
    },
    {
        "id": "q55",
        "text_en": "If you had to pick one animal for us to become, what would we be?",
        "text_ar": "لو لازم نتحول لحيوانات، هنكون إيه؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q56",
        "text_en": "If you could instantly make me an expert at one thing, what would it be?",
        "text_ar": "لو بإيدك تخليني خبير في حاجة فجأة، هتختار إيه؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q57",
        "text_en": "What's the one question you've always wanted to ask me but never did?",
        "text_ar": "إيه السؤال اللي نفسك تسألهولي من زمان ومسألتوش؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q58",
        "text_en": "If you had to be conjoined twins with someone from our friend group, who would it be and why?",
        "text_ar": "لو لازم تكون توأم ملتصق مع حد من شلتنا، هتختار مين وليه؟",
        "category": [
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q59",
        "text_en": "If I suddenly had a completely different personality, would you still love me?",
        "text_ar": "لو شخصيتي اتغيرت 180 درجة، هتفضل تحبني؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q60",
        "text_en": "Who is more likely to become friends with a random stranger they meet in public?",
        "text_ar": "مين فينا اجتماعي وممكن يصاحب أي حد في الشارع؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q61",
        "text_en": "Who is more likely to laugh at a joke that nobody else finds funny?",
        "text_ar": "مين فينا بيضحك على نكت بايخة محدش غيره بيضحك عليها؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q62",
        "text_en": "Who's more likely to stay up all night scrolling on their phone?",
        "text_ar": "مين فينا بيسهر طول الليل يقلب في الموبايل؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q63",
        "text_en": "Who's more likely to hide behind the other person when they see a bug?",
        "text_ar": "مين بيستخبى ورا التاني لما يشوف حشرة؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q64",
        "text_en": "Who's more likely to say, \"I'm not upset,\" but is actually upset?",
        "text_ar": "مين بيقول 'أنا مش زعلان' وهو شايط من جوه؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q65",
        "text_en": "If I were a character in a sitcom, what role would I play?",
        "text_ar": "لو أنا شخصية في مسلسل سيت كوم، هكون مين؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q66",
        "text_en": "If I had to wear the same outfit every day, what would it be?",
        "text_ar": "لو لازم ألبس طقم واحد كل يوم، هيكون إيه؟",
        "category": [
            "Coworkers",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q67",
        "text_en": "What's one thing I do that would definitely annoy people if they lived with me?",
        "text_ar": "إيه الحاجة اللي بعملها وممكن تجنن أي حد عايش معايا؟",
        "category": [
            "First Date",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q68",
        "text_en": "If I disappeared for a week, what's your best guess why?",
        "text_ar": "لو اختفيت أسبوع، تفتكر هيكون السبب إيه؟",
        "category": [
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q69",
        "text_en": "If I suddenly became famous, what do you think it would be for?",
        "text_ar": "لو اشتهرت فجأة، تفتكر هيكون بسبب إيه؟",
        "category": [
            "Coworkers",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q70",
        "text_en": "What's something you're learning to accept about yourself?",
        "text_ar": "إيه الحاجة اللي بتحاول تتقبلها في نفسك مؤخراً؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q71",
        "text_en": "What kind of people make you feel safe?",
        "text_ar": "إيه نوع الناس اللي بيحسسك بالأمان؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q72",
        "text_en": "What's something you wish you were better at expressing?",
        "text_ar": "إيه الحاجة اللي نفسك تعرف تعبر عنها أحسن؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q73",
        "text_en": "What's something small that has a big impact on your mood?",
        "text_ar": "إيه الحاجة البسيطة اللي ممكن تقلب مودك؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q74",
        "text_en": "What do you usually overthink?",
        "text_ar": "إيه اللي دايماً بتفكر فيه بزيادة (Overthinking)؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q75",
        "text_en": "What makes you feel truly appreciated?",
        "text_ar": "إيه اللي بيحسسك إنك متقدر بجد؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q76",
        "text_en": "When was the last time you felt proud of yourself?",
        "text_ar": "إمتى آخر مرة حسيت بفخر بنفسك؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q77",
        "text_en": "What's something you're scared people might misunderstand about you?",
        "text_ar": "إيه الحاجة اللي بتخاف الناس تفهمها غلط عنك؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q78",
        "text_en": "What's one thing you need reassurance about?",
        "text_ar": "إيه الحاجة اللي محتاج حد يطمنك دايماً بخصوصها؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q79",
        "text_en": "When was the last time you avoided a hard conversation?",
        "text_ar": "إمتى آخر مرة هربت من مواجهة أو كلام تقيل؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q80",
        "text_en": "What's something you wish you reacted differently to in the past?",
        "text_ar": "إيه الموقف اللي بتتمنى لو كنت اتصرفت فيه بشكل مختلف؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q81",
        "text_en": "What's something you judge people for, even if you don't want to?",
        "text_ar": "إيه الحاجة اللي بتحكم على الناس بسببها غصب عنك؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q82",
        "text_en": "What's a compliment you don't fully believe?",
        "text_ar": "إيه المجاملة اللي لما بتتقالك مش بتصدقها أوي؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q83",
        "text_en": "What's a habit you know isn't great, but you still do?",
        "text_ar": "إيه العادة الهباب اللي عارف إنها غلط ولسه بتعملها؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q84",
        "text_en": "What if money wasn't an issue — how would your life change?",
        "text_ar": "لو الفلوس مش مشكلة، حياتك هتتغير إزاي؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q85",
        "text_en": "What if you could send your past self one sentence — what would it say?",
        "text_ar": "لو تقدر تبعت جملة واحدة لنفسك زمان، هتقول إيه؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q86",
        "text_en": "What if you could relive one conversation — which one?",
        "text_ar": "لو تقدر تعيد محادثة واحدة حصلت، هتختار أنهي؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q87",
        "text_en": "What if your life had chapters — what would this chapter be called?",
        "text_ar": "لو حياتك فصول في كتاب، الفصل ده هيكون اسمه إيه؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q88",
        "text_en": "What if you woke up tomorrow with zero fear — what would you do first?",
        "text_ar": "لو صحيت بكرة ومنعدم عندك الخوف، هتعمل إيه أول حاجة؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q89",
        "text_en": "What if you could restart one year of your life — which year would it be?",
        "text_ar": "لو ينفع تعيد سنة واحدة من حياتك، هتختار سنة كام؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q90",
        "text_en": "What if you had to move to a new country tomorrow — where would you go?",
        "text_ar": "لو لازم تهاجر بكرة لبلد تانية، هتروح فين؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q91",
        "text_en": "What if you could instantly master one skill — what would it be?",
        "text_ar": "لو ينفع تتعلم مهارة فجأة، هتختار إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q92",
        "text_en": "What if you had to describe your future in three words?",
        "text_ar": "لو هتوصف مستقبلك في 3 كلمات، هيبقوا إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q93",
        "text_en": "What if we met again for the first time today — what would be different?",
        "text_ar": "لو اتقابلنا لأول مرة النهاردة، إيه اللي كان هيختلف؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q94",
        "text_en": "What's something you think I'm better at than I realize?",
        "text_ar": "إيه الحاجة اللي أنا شاطر فيها وأنا مش واخد بالي؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q95",
        "text_en": "What's my biggest comfort activity?",
        "text_ar": "إيه أكتر حاجة بعملها عشان أروق؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q96",
        "text_en": "What's one thing you think I need more of in my life?",
        "text_ar": "إيه اللي تفتكر حياتي محتاجاه أكتر؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Medium"
    },
    {
        "id": "q97",
        "text_en": "What kind of situation do you think stresses me out?",
        "text_ar": "إيه المواقف اللي بتوترني؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q98",
        "text_en": "What do you think makes me feel calm?",
        "text_ar": "تفتكر إيه اللي بيهديني؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q99",
        "text_en": "What's one thing you think motivates me?",
        "text_ar": "إيه اللي بيحفزني ويشجعني؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q100",
        "text_en": "What do you think I value more than I admit?",
        "text_ar": "تفتكر إيه الحاجة اللي تهمني جداً بس مابقولش؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Medium"
    },
    {
        "id": "q101",
        "text_en": "What's something you think I've changed about over time?",
        "text_ar": "إيه اللي اتغير فيا مع الوقت من وجهة نظرك؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Medium"
    },
    {
        "id": "q102",
        "text_en": "What do you think I worry about the most?",
        "text_ar": "تفتكر إيه أكتر حاجة شايل همها؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q103",
        "text_en": "What do you think I'm most confident about?",
        "text_ar": "إيه أكتر حاجة أنا واثق في نفسي فيها؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q104",
        "text_en": "What's one hobby you've always wanted to try?",
        "text_ar": "إيه الهواية اللي نفسك تجربها من زمان؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q105",
        "text_en": "Do you prefer planning or going with the flow?",
        "text_ar": "بتحب تخطط ولا تسيبها بظروفها؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q106",
        "text_en": "What's something you never get tired of?",
        "text_ar": "إيه الحاجة اللي عمرك ما بتزهق منها؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q107",
        "text_en": "Are you more of a morning or night person?",
        "text_ar": "أنت كائن نهاري ولا ليلي؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q108",
        "text_en": "What's one thing people usually get wrong about you?",
        "text_ar": "إيه الفكرة الغلط اللي الناس عادة بتاخدها عنك؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q109",
        "text_en": "What's something simple that makes you happy?",
        "text_ar": "إيه الحاجة البسيطة اللي بتفرحك؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q110",
        "text_en": "What's a small thing that instantly improves your mood?",
        "text_ar": "إيه التفصيلة الصغيرة اللي بتحسن مودك في ثانية؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q111",
        "text_en": "What's your go-to comfort food?",
        "text_ar": "إيه أكلتك المفضلة اللي بتعدل مزاجك؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q112",
        "text_en": "What kind of music do you usually listen to?",
        "text_ar": "بتسمع نوع مزيكا إيه عادةً؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q113",
        "text_en": "Do you enjoy being around people, or do you need alone time?",
        "text_ar": "بتحب اللمة ولا بتفضل قعدة البيت لوحدك؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q114",
        "text_en": "What's something you're curious about right now?",
        "text_ar": "إيه اللي شاغل فضولك الأيام دي؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q115",
        "text_en": "What's your love language, even outside relationships?",
        "text_ar": "إيه لغة الحب بتاعتك (حتى مع الصحاب والأهل)؟",
        "category": [
            "First Date",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q116",
        "text_en": "What's your idea of a perfect simple day?",
        "text_ar": "إيه هو اليوم البسيط والمثالي بالنسبة لك؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q117",
        "text_en": "What's your favorite way to spend a free evening?",
        "text_ar": "بتحب تقضي سهرتك الفاضية إزاي؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q118",
        "text_en": "What makes you feel comfortable with someone?",
        "text_ar": "إيه اللي بيخليك تاخد راحتك مع حد؟",
        "category": [
            "First Date"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q119",
        "text_en": "What's something you're excited about lately?",
        "text_ar": "إيه اللي متحمسله الفترة دي؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q120",
        "text_en": "What's a green flag for you in people?",
        "text_ar": "إيه العلامة الخضراء (Green Flag) اللي بتحب تشوفها في الناس؟",
        "category": [
            "First Date",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q121",
        "text_en": "If I had to live in a video game, which one would it be?",
        "text_ar": "لو هعيش جوه لعبة فيديو، هتكون إيه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q122",
        "text_en": "What's the weirdest thing you think I secretly enjoy?",
        "text_ar": "إيه الحاجة الغريبة اللي تفتكر إني بستمتع بيها في السر؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q123",
        "text_en": "What's the most absurd habit I have?",
        "text_ar": "إيه أعجب عادة عندي؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q124",
        "text_en": "If I had a pet that matched my personality, what would it be?",
        "text_ar": "لو هربي حيوان شبه شخصيتي، هيكون إيه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q125",
        "text_en": "Which cartoon character am I secretly most like?",
        "text_ar": "أنا شبه مين من شخصيات الكرتون؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q126",
        "text_en": "If I could be a superhero, what ridiculous power would I have?",
        "text_ar": "لو بقيت بطل خارق، تفتكر قوتي العجيبة هتبقى إيه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q127",
        "text_en": "What's the funniest thing you've caught me doing by accident?",
        "text_ar": "إيه أكتر حاجة بتضحك شوفتني بعملها وأنا مش واخد بالي؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q128",
        "text_en": "What's a moment in your life that changed you the most?",
        "text_ar": "إيه اللحظة اللي غيرت فيك كتير في حياتك؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q129",
        "text_en": "What's one value you think defines me the most?",
        "text_ar": "إيه القيمة أو المبدأ اللي بيعبر عني؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q130",
        "text_en": "If you could give me advice, what would it be?",
        "text_ar": "لو هتنصحني نصيحة، هتقولي إيه؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q131",
        "text_en": "What do you think I'm most passionate about?",
        "text_ar": "تفتكر إيه أكتر حاجة أنا شغوف بيها؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q132",
        "text_en": "What makes you trust someone completely?",
        "text_ar": "إيه اللي يخليك تثق في حد ثقة عمياء؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q133",
        "text_en": "If you could relive one day with me, which would it be?",
        "text_ar": "لو ينفع تعيد يوم واحد قضيناه سوا، هتختار أنهي؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q134",
        "text_en": "How do you think I cope with stress?",
        "text_ar": "تفتكر أنا بتعامل إزاي مع الضغط؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q135",
        "text_en": "What do you think I hide from others?",
        "text_ar": "تفتكر أنا بخبي إيه عن الناس؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q136",
        "text_en": "What's one thing I do that really annoys you but you've never said?",
        "text_ar": "إيه الحاجة اللي بعملها وبتستفزك بس ماقولتليش؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q137",
        "text_en": "What's something I do that makes you question me?",
        "text_ar": "إيه التصرف اللي بيخليك تستغربني أو تشك فيا؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q138",
        "text_en": "If I broke a promise, which one would upset you most?",
        "text_ar": "لو خلفت وعد، إيه الوعد اللي هيزعل أوي لو كسرته؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q139",
        "text_en": "What's a truth about me you've avoided saying?",
        "text_ar": "إيه الحقيقة اللي بتتحاشى تقولها في وشي؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q140",
        "text_en": "When do you think I'm hardest to understand?",
        "text_ar": "إمتى بكون صعب الفهم بالنسبة لك؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q141",
        "text_en": "What if you had to explain me to a stranger — what would you say?",
        "text_ar": "لو بتوصفني لحد غريب، هتقوله إيه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q142",
        "text_en": "What if I could read your mind for one hour — what would I learn?",
        "text_ar": "لو قريت أفكارك ساعة واحدة، هعرف إيه؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q143",
        "text_en": "What if we had to survive on an island — who does what?",
        "text_ar": "لو عزلونا في جزيرة مهجورة، كل واحد فينا هيعمل إيه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q144",
        "text_en": "What if we could live in any era — which one fits us best?",
        "text_ar": "لو ينفع نعيش في أي زمن، أنهي عصر يليق علينا؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q145",
        "text_en": "What if we could go back to any time in our lives — where would you take me?",
        "text_ar": "لو رجعنا بالزمن، هتاخدني معاك فين؟",
        "category": [
            "Family",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q146",
        "text_en": "What if we switched personalities for a day — how would it go?",
        "text_ar": "لو بدلنا شخصياتنا يوم، الدنيا هتمشي إزاي؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q147",
        "text_en": "What's my preferred way to spend a weekend?",
        "text_ar": "بحب أقضي الويك إند إزاي؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q148",
        "text_en": "What's my favorite spot to relax?",
        "text_ar": "إيه مكاني المفضل للروقان؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q149",
        "text_en": "What's a habit of mine you've noticed but never told me about?",
        "text_ar": "إيه العادة اللي لقطتها فيا وماقولتليش؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q150",
        "text_en": "What's a weird habit of mine that I don't realize?",
        "text_ar": "إيه العادة الغريبة اللي عندي وأنا مش حاسس؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q151",
        "text_en": "What's my favorite snack when I'm stressed?",
        "text_ar": "إيه أكتر سناك بحب آكله لما بكون مضغوط؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q152",
        "text_en": "What's a phrase I say often without noticing?",
        "text_ar": "إيه الكلمة أو الجملة اللي بقولها كتير من غير ما أحس؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q153",
        "text_en": "What's my guilty pleasure TV show or movie?",
        "text_ar": "إيه الفيلم أو المسلسل اللي مكسوف إني بحبه؟ (guilty pleasure)",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q154",
        "text_en": "When have I hurt you, even unintentionally?",
        "text_ar": "إمتى جرحتك، حتى لو من غير قصد؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q155",
        "text_en": "What's one thing you think I take for granted?",
        "text_ar": "إيه الحاجة اللي تفتكر إني مش مقدر قيمتها كفاية؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q156",
        "text_en": "What's something I avoid admitting to myself?",
        "text_ar": "إيه الحاجة اللي بهرب من إني أعترف بيها لنفسي؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q157",
        "text_en": "What's the hardest truth I need to face?",
        "text_ar": "إيه الحقيقة المرة اللي لازم أواجهها؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q158",
        "text_en": "What's one thing I should hear but probably won't like?",
        "text_ar": "إيه الكلام اللي لازم أسمعه بس مش هيعجبني؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q159",
        "text_en": "When have I been unfair to you?",
        "text_ar": "إمتى جيت عليك أو ظلمتك؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q160",
        "text_en": "Would you rather never have to pick your outfit or never have to do laundry?",
        "text_ar": "تفضل إنك عمرك ما تحتاج تختار طقمك ولا عمرك ما تحتاج تعمل غسيل؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q161",
        "text_en": "What is the best purchase you've ever made?",
        "text_ar": "إيه أحسن حاجة اشتريتها في حياتك؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q162",
        "text_en": "By percent are you an introvert or an extrovert?",
        "text_ar": "كنسبة مئوية، أنت انطوائي ولا اجتماعي؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q163",
        "text_en": "If you could be anyone for a week who would it be?",
        "text_ar": "لو ممكن تكون أي شخص لمدة أسبوع، هتختار مين؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q164",
        "text_en": "What would be the “perfect” day for you?",
        "text_ar": "إيه هو اليوم \"المثالي\" بالنسبة لك؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q165",
        "text_en": "What's the best dining experience you've ever had?",
        "text_ar": "إيه أحلى تجربة أكل عشتها في حياتك؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q166",
        "text_en": "What tradition would you most want to pass on to your children?",
        "text_ar": "إيه العادة اللي نفسك تعلمها لأولادك؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q167",
        "text_en": "Which of your friends is most like you?",
        "text_ar": "مين من أصحابك شبهك أكتر واحد؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q168",
        "text_en": "Would you rather have an unlimited international first class ticket or never have to pay for food at restaurants?",
        "text_ar": "تفضل يكون معاك تذكرة طيران درجة أولى دولية مدى الحياة ولا متدفعش فلوس الأكل في المطاعم أبداً؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q169",
        "text_en": "What is your secret passion or skill?",
        "text_ar": "إيه موهبتك أو شغفك السري؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q170",
        "text_en": "What is the worst pain you've ever experienced?",
        "text_ar": "إيه أسوأ وجع حسيته في حياتك؟",
        "category": [
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q171",
        "text_en": "What do you miss about your last job?",
        "text_ar": "إيه اللي بتوحشك من شغلك الأخير؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q172",
        "text_en": "Would you rather never use social media or never watch movies or TV shows?",
        "text_ar": "تفضل عمرك ما تستخدم سوشيال ميديا ولا عمرك ما تشوف أفلام ومسلسلات؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q173",
        "text_en": "If you could do something dangerous just once with no risk what would you do?",
        "text_ar": "لو ممكن تعمل حاجة خطيرة مرة واحدة بس ومفيش أي خطر، هتعمل إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q174",
        "text_en": "What makes the best gifts?",
        "text_ar": "إيه اللي بيخلي الهدية حلوة بجد؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q175",
        "text_en": "If you had to spend 100,000EGP right now -  what would you buy?",
        "text_ar": "لو مضطر تصرف 100 ألف جنيه دلوقتي، هتشتري إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q176",
        "text_en": "What are you really good at fixing?",
        "text_ar": "إيه الحاجة اللي شاطر أوي في تصليحها؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q177",
        "text_en": "What is one thing that you love but don't really need?",
        "text_ar": "إيه الحاجة اللي بتحبها بس مش محتاجها بجد؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q178",
        "text_en": "What’s your favorite thing about yourself?",
        "text_ar": "إيه أكتر حاجة بتحبها في نفسك؟",
        "category": [
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q179",
        "text_en": "What is the best gift you've ever received?",
        "text_ar": "إيه أحسن هدية جتلكم؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q180",
        "text_en": "What does your me-time look like?",
        "text_ar": "وقتك الخاص (Me-Time) بيبقى عامل إزاي؟",
        "category": [
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q181",
        "text_en": "If you could wake up tomorrow with a new quality or ability what would it be?",
        "text_ar": "لو صحيت بكرة بصفة أو قدرة جديدة، هتكون إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "What If...",
        "intensity": "Medium"
    },
    {
        "id": "q182",
        "text_en": "What’s something you’ve learned in the last week?",
        "text_ar": "إيه الحاجة اللي اتعلمتها في الأسبوع اللي فات؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q183",
        "text_en": "What’s the most enjoyable part of your weekly routine?",
        "text_ar": "إيه أكتر جزء ممتع في روتينك الأسبوعي؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q184",
        "text_en": "For what things do you spare no expense?",
        "text_ar": "إيه الحاجات اللي متبخلش عليها بفلوس؟",
        "category": [
            "Coworkers",
            "First Date",
            "Friends",
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q185",
        "text_en": "Who do you love to spend time with and why?",
        "text_ar": "بتحب تقضي وقت مع مين وليه؟",
        "category": [
            "Family",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q186",
        "text_en": "Would you rather live without coffee or without music?",
        "text_ar": "لو خيروك تعيش من غير قهوة أو من غير مزيكا، تختار إيه؟",
        "category": [
            "Friends",
            "Coworkers",
            "First Date"
        ],
        "genre": "What If...",
        "intensity": "Light"
    },
    {
        "id": "q187",
        "text_en": "What's the funniest thing you've seen online recently?",
        "text_ar": "إيه اتر حاجة مضحكة شفتها أونلاين الفترة دي؟",
        "category": [
            "Friends",
            "Coworkers",
            "First Time Meeting"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q188",
        "text_en": "Have you ever accidentally sent a text message to the wrong person?",
        "text_ar": "عمرك بعت رسالة للشخص الغلط بالغلط؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q189",
        "text_en": "Have you ever tried to make a DIY project that turned out wrong?",
        "text_ar": "جربت تعمل حاجة \"هاند ميد\" وباظت منك خالص؟",
        "category": [
            "Friends",
            "Family",
            "Coworkers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q190",
        "text_en": "Have you ever tried to use a public restroom with a broken lock?",
        "text_ar": "دخلت حمام عام قبل كده واكتشفت إن القفل بايظ؟",
        "category": [
            "Friends",
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q191",
        "text_en": "Have you ever tried to walk through a revolving door backwards?",
        "text_ar": "جربت تمشي في الباب الدوار عكس الاتجاه؟",
        "category": [
            "Friends",
            "Coworkers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q192",
        "text_en": "Have you ever attempted to lick your elbow?",
        "text_ar": "جربت تلحس كوعك قبل كده؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q193",
        "text_en": "Have you ever worn a costume just for fun?",
        "text_ar": "عمرك لبست لبس تنكري لمجرد الهزار؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q194",
        "text_en": "Have you ever tried to balance a spoon on your nose?",
        "text_ar": "جربت توازن معلقة على مناخيرك؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q195",
        "text_en": "Have you ever tried to speak in a foreign accent for an entire day?",
        "text_ar": "جربت تتكلم بلكنة أجنبية طول اليوم؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q196",
        "text_en": "Have you ever pretended to be a superhero?",
        "text_ar": "عمرك مثلت إنك \"سوبر هيرو\"؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q197",
        "text_en": "Have you ever tried to walk on your hands?",
        "text_ar": "جربت تمشي على إيديك قبل كده؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q198",
        "text_en": "Have you ever tried to catch popcorn in your mouth from across the room?",
        "text_ar": "جربت تحدف فشار وتلقفه ببقك من بعيد؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q199",
        "text_en": "Have you ever worn a fake mustache or beard?",
        "text_ar": "لبست شنب أو دقن تركيب قبل كده؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q200",
        "text_en": "Have you ever sung a song in public with made-up lyrics?",
        "text_ar": "عمرك ألفت كلمات أغنية وغنتها قدام الناس؟",
        "category": [
            "Friends",
            "Coworkers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q201",
        "text_en": "Have you ever tried to make a tower of food on your plate?",
        "text_ar": "جربت تعمل برج من الأكل في طبقك؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q202",
        "text_en": "Have you ever tried to break a world record for something silly?",
        "text_ar": "حاولت تكسر رقم قياسي في حاجة تافهة قبل كده؟",
        "category": [
            "Friends",
            "Coworkers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q203",
        "text_en": "Have you ever tried to fit as many marshmallows in your mouth as possible?",
        "text_ar": "جربت تحشر أكبر عدد مارشميلو في بقك؟",
        "category": [
            "Friends",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q204",
        "text_en": "What's the most awkward thing you've accidentally said in a meeting?",
        "text_ar": "إيه أكتر حاجة محرجة قولتها بالغلط في ميتنج؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q205",
        "text_en": "What's your most embarrassing desk habit no one knows about?",
        "text_ar": "إيه العادة المحرجة اللي بتعملها على مكتبك ومحدش يعرف؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q206",
        "text_en": "Describe the weirdest dream you had about a coworker (no names)?",
        "text_ar": "احكي أغرب حلم حلمته عن زميل في الشغل (من غير أسماء)؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q207",
        "text_en": "What's the funniest comeback you thought of too late after a meeting?",
        "text_ar": "إيه الرد اللي جه في بالك متأخر بعد ما الاجتماع خلص؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q208",
        "text_en": "If you had to prank the office with a million EGP budget, what's the plan?",
        "text_ar": "لو معاك مليون جنيه عشان تعمل مقلب في الشركة، هتعمل إيه؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q209",
        "text_en": "What's your biggest pet peeve about office small talk?",
        "text_ar": "إيه أكتر حاجة بتستفزك في رغي المطبخ والمجاملات في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q210",
        "text_en": "Have you ever blamed a mistake on someone else here (anonymously)?",
        "text_ar": "عمرك لبست غلطة لحد تاني هنا (من غير ما تقول أسماء)؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q211",
        "text_en": "What's the strangest talent you hide from the team?",
        "text_ar": "إيه الموهبة الغريبة اللي مخبيها عن التيم؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Light"
    },
    {
        "id": "q212",
        "text_en": "What's the most bizarre thing in your fridge right now?",
        "text_ar": "إيه أغرب حاجة موجودة في تلاجتك دلوقتي؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q213",
        "text_en": "If you could summon a historical figure for IT help, who?",
        "text_ar": "لو ينفع تجيب شخصية تاريخية تحل مشاكل الـ IT، هتجيب مين؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q214",
        "text_en": "What's your signature awkward dance move?",
        "text_ar": "إيه رقصتك الغريبة اللي بتميزك؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Awkward",
        "intensity": "Light"
    },
    {
        "id": "q215",
        "text_en": "What's the weirdest food combo you eat at lunch?",
        "text_ar": "إيه أغرب ميكس أكل بتعمله في الغدا؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Awkward",
        "intensity": "Light"
    },
    {
        "id": "q216",
        "text_en": "If your life is a sitcom, what's the most awkward episode?",
        "text_ar": "لو حياتك مسلسل سيت كوم، إيه هتبقى أكتر حلقة محرجة؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Awkward",
        "intensity": "Bold"
    },
    {
        "id": "q217",
        "text_en": "What's something you pretend to hate but secretly love at work?",
        "text_ar": "إيه الحاجة اللي بتعمل نفسك بتكرهها في الشغل بس أنت بتحبها؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q218",
        "text_en": "Would you rather colonize a new planet or stay Earth-bound?",
        "text_ar": "تحب تستعمر كوكب جديد ولا تفضل على الأرض؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q219",
        "text_en": "What's your go-to strategy for awkward silences in meetings?",
        "text_ar": "بتتصرف إزاي لما يحصل سكوت محرج في نص الميتنج؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Light"
    },
    {
        "id": "q220",
        "text_en": "If you won the lottery, what office perk would you miss?",
        "text_ar": "لو كسبت اليانصيب، إيه الحاجة الوحيدة اللي هتوحشك في المكتب؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Awkward",
        "intensity": "Medium"
    },
    {
        "id": "q221",
        "text_en": "What is one professional skill you are currently pretending to have?",
        "text_ar": "إيه المهارة اللي بتمثل إنك بتعرف تعملها في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q222",
        "text_en": "What is the most annoying corporate jargon phrase you use anyway?",
        "text_ar": "إيه أكتر كلمة \"كليشيه\" بتقولها في الشغل وأنت مش طايقها؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q223",
        "text_en": "Have you ever muted a meeting to do something completely unrelated?",
        "text_ar": "عمرك عملت Mute لاجتماع عشان تعمل حاجة تانية خالص؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q224",
        "text_en": "What is one task you always procrastinate on until the last minute?",
        "text_ar": "إيه التاسك اللي دايما بتأجله لآخر دقيقة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q225",
        "text_en": "If you could fire one software or tool we use, what would it be?",
        "text_ar": "لو بإيدك تلغي برنامج أو أداة بنستخدمها، هتختار إيه؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q226",
        "text_en": "Have you ever eaten someone else's food from the fridge by accident (or on purpose)?",
        "text_ar": "عمرك أكلت أكل حد تاني من التلاجة بالغلط (أو بالقصد)؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q227",
        "text_en": "What is the harshest feedback you've received that was actually true?",
        "text_ar": "إيه أقسى فيدباك جالك وكان فعلاً حقيقي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q228",
        "text_en": "Who in this room do you think works the hardest?",
        "text_ar": "مين أكتر حد في الغرفة دي شايف إنه بيشتغل بضمير؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q229",
        "text_en": "What is a rule at work you think is completely useless?",
        "text_ar": "إيه القانون اللي في الشغل اللي شايف إنه مالوش أي لازمة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q230",
        "text_en": "Have you ever fallen asleep during a remote work call?",
        "text_ar": "عمرك روحت في النوم وأنت في مكالمة شغل أونلاين؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q231",
        "text_en": "Who is the \"drama queen\" of the family?",
        "text_ar": "مين \"ملك/ملكة الدراما\" في العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q232",
        "text_en": "What is the worst gift you have ever received from a relative?",
        "text_ar": "إيه أوحش هدية جاتلك من حد قرايبك؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q233",
        "text_en": "If our family had a reality TV show, what would it be called?",
        "text_ar": "لو عيلتنا ليها برنامج واقعي (Reality Show)، هتسموه إيه؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q234",
        "text_en": "Who in the family is most likely to survive a zombie apocalypse?",
        "text_ar": "مين في العيلة يقدر ينجو لو حصل هجوم زومبي؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q235",
        "text_en": "What is the funniest mispronunciation a family member consistently makes?",
        "text_ar": "إيه الكلمة اللي حد في العيلة دايما بينطقها غلط وبتضحككم؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q236",
        "text_en": "Who takes the longest to get ready for an event?",
        "text_ar": "مين بياخد أطول وقت عشان يجهز لأي خروجة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q237",
        "text_en": "What is the strangest item our family keeps in the house for no reason?",
        "text_ar": "إيه الكراكيب الغريبة اللي محتفظين بيها في البيت من غير سبب؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q238",
        "text_en": "Who is the worst driver in the family?",
        "text_ar": "مين أسوأ سواق في العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q239",
        "text_en": "What is a childhood punishment that seems funny now?",
        "text_ar": "إيه العقاب اللي كنت بتاخده وأنت صغير وبيضحكك دلوقتي؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q240",
        "text_en": "If you could trade places with one family member for a day, who would it be?",
        "text_ar": "لو ينفع تبدل مكانك مع حد من العيلة ليوم واحد، تختار مين؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q241",
        "text_en": "What is a misconception people often form about you at first glance?",
        "text_ar": "إيه الفكرة الغلط اللي الناس بتاخدها عنك من أول نظرة؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q242",
        "text_en": "What is the most valuable lesson you learned from a mistake?",
        "text_ar": "إيه أهم درس اتعلمته من غلطة عملتها؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q243",
        "text_en": "If you could change one thing about the way you were raised, what would it be?",
        "text_ar": "لو تقدر تغير حاجة واحدة في الطريقة اللي اتربيت بيها، هتكون إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q244",
        "text_en": "What keeps you up at night?",
        "text_ar": "إيه اللي بيطير النوم من عينك بالليل؟",
        "category": [
            "First Time Meeting",
            "Friends",
            "First Date"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q245",
        "text_en": "What is a skill or hobby you wish you had started earlier in life?",
        "text_ar": "إيه الهواية أو المهارة اللي تتمنى لو كنت بدأت فيها بدري؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q246",
        "text_en": "Who has had the biggest influence on your life so far?",
        "text_ar": "مين أكتر شخص أثر في حياتك لحد دلوقتي؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q247",
        "text_en": "What is one thing you are currently trying to improve about yourself?",
        "text_ar": "إيه الحاجة اللي بتحاول تحسنها في نفسك الفترة دي؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q248",
        "text_en": "What is a book or movie that changed your perspective on something?",
        "text_ar": "إيه الكتاب أو الفيلم اللي غير وجهة نظرك في حاجة؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q249",
        "text_en": "If you could ask your future self one question, what would it be?",
        "text_ar": "لو تقدر تسأل نفسك في المستقبل سؤال واحد، هيكون إيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q250",
        "text_en": "How many cups of coffee/tea do I drink a day?",
        "text_ar": "تفتكر أنا بشرب كام كوباية قهوة/شاي في اليوم؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q251",
        "text_en": "What is my \"tell\" when I am stressed?",
        "text_ar": "إيه اللي بيبان عليا لما بكون مضغوط؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Medium"
    },
    {
        "id": "q252",
        "text_en": "Am I more productive in the morning or the afternoon?",
        "text_ar": "أنا بكون منتج أكتر الصبح ولا بعد الظهر؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q253",
        "text_en": "What is the one snack I always have at my desk?",
        "text_ar": "إيه السناك اللي دايما موجود على مكتبي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q254",
        "text_en": "Do I prefer phone calls or emails?",
        "text_ar": "تفتكر أنا بفضل المكالمات ولا الإيميلات؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q255",
        "text_en": "What is a phrase I say way too often in meetings?",
        "text_ar": "إيه الجملة اللي أنا بكررها كتير أوي في الاجتماعات؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q256",
        "text_en": "If I weren't in this job, what career do you think I would have?",
        "text_ar": "لو أنا مش شغال الشغلانة دي، تفتكروا كنت هشتغل إيه؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q257",
        "text_en": "How early or late do I usually arrive at work?",
        "text_ar": "أنا عادة بوصل الشغل بدري ولا متأخر؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q258",
        "text_en": "What kind of music do you think I listen to while working?",
        "text_ar": "تفتكروا إيه نوع المزيكا اللي بسمعه وأنا بشتغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q259",
        "text_en": "Who in the office am I mostly likely to ask for help?",
        "text_ar": "مين في المكتب أكتر حد ممكن أطلب منه مساعدة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know me",
        "intensity": "Light"
    },
    {
        "id": "q260",
        "text_en": "What's your proudest family moment?",
        "text_ar": "إيه أكتر لحظة عائلية بتفتخر بيها؟",
        "category": [
            "Family"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q261",
        "text_en": "What's one family tradition you love?",
        "text_ar": "إيه تقليد عائلي بتحبه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q262",
        "text_en": "When did your family make you laugh hardest?",
        "text_ar": "إمتى ضحكت من قلبك مع العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q263",
        "text_en": "What's the funniest family vacation story?",
        "text_ar": "إيه اكتر موقف مضحك حصل في سفرية عائلية؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q264",
        "text_en": "What's your family's secret recipe?",
        "text_ar": "إيه وصفة العيلة السرية؟",
        "category": [
            "Family"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q265",
        "text_en": "How has your upbringing shaped you?",
        "text_ar": "تربيتك شكلت شخصيتك إزاي؟",
        "category": [
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q266",
        "text_en": "What's something deep you're grateful for?",
        "text_ar": "إيه أكتر حاجة عميقة شاكر ربنا عليها؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q267",
        "text_en": "What's a belief that guides your life?",
        "text_ar": "إيه المبدأ اللي ممشي حياتك بيه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q268",
        "text_en": "What's your biggest fear and why?",
        "text_ar": "إيه أكبر مخاوفك وليه؟",
        "category": [
            "Coworkers",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q269",
        "text_en": "What's my work communication style?",
        "text_ar": "إيه طريقتي في التواصل في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q270",
        "text_en": "What's my go-to desk snack?",
        "text_ar": "إيه السناك الرسمي بتاعي على المكتب؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q271",
        "text_en": "How do I handle deadlines?",
        "text_ar": "بتعامل مع الديدلاينز (Deadlines) إزاي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q272",
        "text_en": "What's the toughest feedback you ever received?",
        "text_ar": "إيه أصعب فيدباك (Feedback) جالك؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q273",
        "text_en": "Have you ever cried at work (no details needed)?",
        "text_ar": "عيطت في الشغل قبل كده؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q274",
        "text_en": "What's one work habit you're trying to break?",
        "text_ar": "إيه العادة اللي بتحاول تبطلها في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q275",
        "text_en": "When did you last apologize at work?",
        "text_ar": "إمتى آخر مرة اعتذرت في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q276",
        "text_en": "What's your biggest workplace insecurity?",
        "text_ar": "إيه أكتر حاجة بتهز ثقتك في نفسك في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q277",
        "text_en": "Have you ever called in sick when you weren't?",
        "text_ar": "أخدت أجازة مرضي قبل كده وأنت سليم؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q278",
        "text_en": "What's one meeting you always dread?",
        "text_ar": "إيه الميتنج اللي دايما بتشيل همه؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q279",
        "text_en": "How do you handle workplace gossip?",
        "text_ar": "بتتعامل مع نميمة الشغل إزاي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q280",
        "text_en": "What's your salary negotiation strategy?",
        "text_ar": "استراتيجيتك إيه وأنت بتفاوض على المرتب؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q281",
        "text_en": "Have you ever regretted taking a job?",
        "text_ar": "ندمت قبل كده إنك قبلت وظيفة معينة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q282",
        "text_en": "Who's the loudest family member during arguments?",
        "text_ar": "مين صوته أعلى واحد في خناقات العيلة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q283",
        "text_en": "Who always loses at family game night?",
        "text_ar": "مين دايما بيخسر لما بتلعبوا سوا؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q284",
        "text_en": "What's the weirdest family nickname?",
        "text_ar": "إيه أغرب اسم دلع في العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q285",
        "text_en": "Who dances the worst at weddings?",
        "text_ar": "مين أسوأ واحد بيرقص في الأفراح؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q286",
        "text_en": "What's your family's go-to emergency excuse?",
        "text_ar": "إيه عذر العيلة الجاهز لأي طوارئ؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q287",
        "text_en": "Who always burns the holiday food?",
        "text_ar": "مين اللي دايما بيحرق الأكل في المناسبات؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q288",
        "text_en": "What's the most embarrassing family photo?",
        "text_ar": "إيه أكتر صورة عائلية محرجة ليكوا؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q289",
        "text_en": "Who tells the worst family jokes?",
        "text_ar": "مين بيقول أبيخ نكت في العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q290",
        "text_en": "What's your family's strangest superstition?",
        "text_ar": "إيه أغرب خرافة العيلة بتصدق فيها؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q291",
        "text_en": "What's the hardest decision you ever made?",
        "text_ar": "إيه أصعب قرار أخدته في حياتك؟",
        "category": [
            "Family"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q292",
        "text_en": "What regret do you carry from childhood?",
        "text_ar": "إيه الندم اللي لسه مأثر فيك من طفولتك؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q293",
        "text_en": "What's one dream you gave up on?",
        "text_ar": "إيه الحلم اللي تخليت عنه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q294",
        "text_en": "When did you last change your core beliefs?",
        "text_ar": "إمتى آخر مرة غيرت قناعاتك الأساسية؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q295",
        "text_en": "What's your definition of true success?",
        "text_ar": "إيه تعريفك للنجاح الحقيقي؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q296",
        "text_en": "What family secret shaped who you are?",
        "text_ar": "إيه السر العائلي اللي شكّل شخصيتك؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q297",
        "text_en": "What's the biggest risk you ever took?",
        "text_ar": "إيه أكبر مخاطرة أخدتها في حياتك؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q298",
        "text_en": "When were you most betrayed by someone close?",
        "text_ar": "إمتى اتعرضت لأكبر خيانة من حد قريب؟",
        "category": [
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q299",
        "text_en": "What's one truth about life you've learned?",
        "text_ar": "إيه الحقيقة اللي اتعلمتها عن الحياة؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q300",
        "text_en": "What would you tell your 10-year-old self?",
        "text_ar": "تحب تقول إيه لنفسك وأنت عندك 10 سنين؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q301",
        "text_en": "What's my tell when I'm nervous in meetings?",
        "text_ar": "إيه اللي بيبان عليا لما بكون متوتر في الاجتماعات؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q302",
        "text_en": "How do I react when projects go wrong?",
        "text_ar": "بتصرف إزاي لما المشاريع تعك؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q303",
        "text_en": "What's my coffee order by heart?",
        "text_ar": "إيه طلب القهوة بتاعي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q304",
        "text_en": "When do I work best—morning or night?",
        "text_ar": "بشتغل أحسن إمتى.. الصبح ولا بليل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q305",
        "text_en": "What's my go-to work playlist genre?",
        "text_ar": "إيه نوع المزيكا اللي بحب أسمعه في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q306",
        "text_en": "How do I celebrate small work wins?",
        "text_ar": "أنا بحتفل بإنجازات الشغل الصغيرة إزاي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q307",
        "text_en": "What's my biggest distraction at work?",
        "text_ar": "إيه أكتر حاجة بتعطلني عن الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q308",
        "text_en": "When am I most productive during the day?",
        "text_ar": "بكون في قمة إنتاجيتي إمتى في اليوم؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q309",
        "text_en": "What's my reaction to surprise deadlines?",
        "text_ar": "رد فعلي بيكون إيه على الديدلاينز المفاجئة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q310",
        "text_en": "How do I prefer feedback—direct or gentle?",
        "text_ar": "أنا بفضل الفيدباك مباشر ولا بطريقة لطيفة؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q311",
        "text_en": "What's the longest you've worked without a break?",
        "text_ar": "إيه أطول فترة اشتغلتها من غير بريك؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q312",
        "text_en": "Have you ever worked through a personal crisis?",
        "text_ar": "اشتغلت قبل كده وأنت بتمر بأزمة شخصية؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q313",
        "text_en": "What's your strategy for difficult coworkers?",
        "text_ar": "بتتعامل إزاي مع زمايل الشغل المتعبين؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q314",
        "text_en": "When did work make you question your path?",
        "text_ar": "إمتى الشغل خلاك تشك في مسارك المهني (Career)؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q315",
        "text_en": "What's one work rule you quietly break?",
        "text_ar": "إيه القاعدة اللي بتكسرها في الشغل من سكات؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q316",
        "text_en": "Have you ever taken credit for team work?",
        "text_ar": "نسبت لنفسك شغل فريق قبل كده؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q317",
        "text_en": "What's your real reason for staying here?",
        "text_ar": "إيه السبب الحقيقي اللي مخليك مكمل هنا؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q318",
        "text_en": "When was your worst work-life balance week?",
        "text_ar": "إيه كان أسوأ أسبوع ليك في التوازن بين الشغل وحياتك؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q319",
        "text_en": "Have you ever lied on your resume?",
        "text_ar": "كدبت في الـ CV قبل كده؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Honest",
        "intensity": "Bold"
    },
    {
        "id": "q320",
        "text_en": "Who gets lost first on family trips?",
        "text_ar": "مين أول واحد بيتوه في السفر العائلي؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q321",
        "text_en": "What's the worst family karaoke performance?",
        "text_ar": "إيه أسوأ فقرة كاريوكي حصلت في العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q322",
        "text_en": "What's your family's most useless talent?",
        "text_ar": "إيه الموهبة العائلية اللي ملهاش أي لازمة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q323",
        "text_en": "Who has the worst music taste?",
        "text_ar": "مين اكتر واحد زوقة وحش في المزيكا؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q324",
        "text_en": "What's the most dramatic family overreaction?",
        "text_ar": "إيه أكتر رد فعل \"أوفر\" حصل في العيلة؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q325",
        "text_en": "Who always shows up late to family events?",
        "text_ar": "مين دايما بيوصل متأخر في المناسبات؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q326",
        "text_en": "What's your family's weirdest holiday tradition?",
        "text_ar": "إيه أغرب تقليد العيلة بتعمله في الأعياد؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q327",
        "text_en": "Who eats the last piece when no one's looking?",
        "text_ar": "مين بياكل آخر قطعة لما محدش يكون باصص؟",
        "category": [
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q328",
        "text_en": "What's the one choice that changed everything?",
        "text_ar": "إيه الاختيار الواحد اللي غير كل حاجة؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q329",
        "text_en": "When did you realize you were truly alone?",
        "text_ar": "إمتى أدركت إنك لوحدك بجد؟",
        "category": [
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q330",
        "text_en": "What's your darkest moment you overcame?",
        "text_ar": "إيه أصعب لحظة مرت عليك وعديتها؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q331",
        "text_en": "What truth about yourself took years to accept?",
        "text_ar": "إيه الحقيقة اللي خدت سنين عشان تتقبلها عن نفسك؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q332",
        "text_en": "When did faith (or lack of) shape your path?",
        "text_ar": "إمتى إيمانك (أو عدمه) شكّل طريقك في الحياة؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q333",
        "text_en": "What's the sacrifice you still question?",
        "text_ar": "إيه التضحية اللي لسه بتسأل نفسك لو كانت تستاهل؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q334",
        "text_en": "When did you lose respect for someone you loved?",
        "text_ar": "إمتى حد كنت بتحبه نزل من نظرك؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q335",
        "text_en": "What's your personal moral line you won't cross?",
        "text_ar": "إيه الخط الأحمر الأخلاقي اللي عمرك ما هتعديه؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q336",
        "text_en": "What childhood promise did you break?",
        "text_ar": "إيه الوعد اللي وعدته وأنت صغير وكسرته؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q337",
        "text_en": "When did silence hurt more than words?",
        "text_ar": "إمتى السكوت وجّعك أكتر من الكلام؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Bold"
    },
    {
        "id": "q338",
        "text_en": "What's my go-to excuse for being late?",
        "text_ar": "إيه حجتي الجاهزة دايما للتأخير؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q339",
        "text_en": "How do I signal when I need coffee?",
        "text_ar": "إيه العلامة اللي بتبين إني محتاج قهوة؟",
        "category": [
            "Coworkers",
            "Family",
            "First Date",
            "First Time Meeting",
            "Friends",
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q340",
        "text_en": "When do I start checking my phone in meetings?",
        "text_ar": "إمتى ببدأ أمسك الموبايل في الاجتماعات؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q341",
        "text_en": "What's my keyboard typing sound like?",
        "text_ar": "صوت كتابتي على الكيبورد عامل إزاي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q342",
        "text_en": "How do I react to good news from others?",
        "text_ar": "بيكون إيه رد فعلي على الأخبار الحلوة للناس؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q343",
        "text_en": "What's my lunch break escape routine?",
        "text_ar": "إيه الروتين بتاعي لما بخلع في البريك؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q344",
        "text_en": "When am I faking enthusiasm at work?",
        "text_ar": "إمتى بتظاهر بالحماس في الشغل؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q345",
        "text_en": "What's my signature office supply I hoard?",
        "text_ar": "إيه أدوات المكتب اللي دايما بجمعها عندي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q346",
        "text_en": "How do I organize my desktop icons?",
        "text_ar": "أيقونات الديسكتوب (Desktop) عندي منظمة إزاي؟",
        "category": [
            "Coworkers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q347",
        "text_en": "Who eats the most between us?",
        "text_ar": "مين فينا \"أكّيل\" أكتر من التاني؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q348",
        "text_en": "Who takes longer to get ready in the morning?",
        "text_ar": "مين فينا بياخد وقت أطول عشان يجهز؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q349",
        "text_en": "Who is the better driver?",
        "text_ar": "مين فينا بيسوق أحسن؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q350",
        "text_en": "Who is more likely to survive a zombie apocalypse?",
        "text_ar": "مين فينا ممكن ينجو لو حصل هجوم زومبي؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q351",
        "text_en": "Who is the bigger spender?",
        "text_ar": "مين فينا إيده مخرومة وبيصرف أكتر؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q352",
        "text_en": "Who apologizes first after a fight?",
        "text_ar": "مين اللي بيصالح التاني الأول بعد أي خناقة؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q353",
        "text_en": "Who is more dramatic when they get sick?",
        "text_ar": "مين فينا بيعمل \"دراما\" أكتر لما بيعيى؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q354",
        "text_en": "Who controls the TV remote?",
        "text_ar": "مين اللي مسيطر على ريموت التلفزيون؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q355",
        "text_en": "Who is more likely to forget an anniversary?",
        "text_ar": "مين اللي احتمال ينسى عيد جوازنا أو مناسبة مهمة؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Medium"
    },
    {
        "id": "q356",
        "text_en": "Who is the better cook?",
        "text_ar": "مين فينا طباخ أشطر؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q357",
        "text_en": "Who is more affectionate in public?",
        "text_ar": "مين فينا بيعبر عن مشاعره أكتر قدام الناس؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Light"
    },
    {
        "id": "q358",
        "text_en": "Who deals with spiders or bugs in the house?",
        "text_ar": "مين اللي بيتعامل مع العناكب والحشرات في البيت؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q359",
        "text_en": "Who is more likely to get lost?",
        "text_ar": "مين فينا بيتوه بسهولة؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q360",
        "text_en": "Who wakes up grumpier?",
        "text_ar": "مين فينا بيصحى \"مقريف\" ومش طايق نفسه؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q361",
        "text_en": "Who plans the dates?",
        "text_ar": "مين فينا اللي بيخطط للخروجات دايما؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q362",
        "text_en": "Who is the \"messy one\" in the relationship?",
        "text_ar": "مين فينا الفوضوي والمهرجل أكتر؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Medium"
    },
    {
        "id": "q363",
        "text_en": "Who spends more time on their phone?",
        "text_ar": "مين فينا ماسك موبايله طول الوقت؟",
        "category": [
            "Lovers"
        ],
        "genre": "Honest",
        "intensity": "Light"
    },
    {
        "id": "q364",
        "text_en": "Who gives better gifts?",
        "text_ar": "مين فينا بيجيب هدايا أحلى؟",
        "category": [
            "Lovers"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q365",
        "text_en": "Who is more likely to start a conversation with a stranger?",
        "text_ar": "مين فينا اجتماعي وممكن يفتح كلام مع حد غريب؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q366",
        "text_en": "Who is the better secret keeper?",
        "text_ar": "مين فينا \"بير\" وبيعرف يحفظ السر؟",
        "category": [
            "Lovers"
        ],
        "genre": "Deep",
        "intensity": "Medium"
    },
    {
        "id": "q367",
        "text_en": "What was I wearing on our first date?",
        "text_ar": "أنا كنت لابس/لابسة إيه في أول ديت لينا؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Hard"
    },
    {
        "id": "q368",
        "text_en": "Where did we go for our first trip together?",
        "text_ar": "روحنا فين في أول سفرية لينا سوا؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q369",
        "text_en": "What was the first meal we ever cooked together?",
        "text_ar": "إيه أول أكلة طبخناها سوا؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q370",
        "text_en": "What is the first movie we watched together?",
        "text_ar": "إيه أول فيلم اتفرجنا عليه مع بعض؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Light"
    },
    {
        "id": "q371",
        "text_en": "Who said \"I love you\" first?",
        "text_ar": "مين فينا قال \"بحبك\" للأول؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q372",
        "text_en": "What was my first impression of you?",
        "text_ar": "إيه كان انطباعي الأول عنك؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Medium"
    },
    {
        "id": "q373",
        "text_en": "What song reminds you of our early days?",
        "text_ar": "إيه الأغنية اللي بتفكرك ببداية علاقتنا؟",
        "category": [
            "Lovers"
        ],
        "genre": "Know Me",
        "intensity": "Deep"
    },
    {
        "id": "q374",
        "text_en": "Does pineapple belong on pizza?",
        "text_ar": "الأناناس على البيتزا: اختراع عبقري ولا جريمة؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q375",
        "text_en": "Cereal before milk or milk before cereal?",
        "text_ar": "الكورن فليكس الأول ولا اللبن؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q376",
        "text_en": "Molokhia: with rice or dipped with bread (cats ear)?",
        "text_ar": "الملوخية: تتاكل برز ولا تتغمس بعيش (ودن قطة)؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q377",
        "text_en": "Chicken Shawerma or Meat Shawerma?",
        "text_ar": "شاورما فراخ ولا شاورما لحمة؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q378",
        "text_en": "Is it acceptable to wear socks with sandals?",
        "text_ar": "ينفع تلبس شراب على صندل/شبشب؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q379",
        "text_en": "Which is superior: Summer or Winter?",
        "text_ar": "الصيف ولا الشتا: مين فيهم أحسن؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q380",
        "text_en": "Texting vs. Voice Notes: which is better?",
        "text_ar": "الرسايل الكتابة ولا الفويس نوتس (Voice Notes)؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q381",
        "text_en": "Is leaving someone on \"read\" (seen) rude or normal?",
        "text_ar": "لو شفت الرسالة ومردتش (Seen): قلة ذوق ولا عادي؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q382",
        "text_en": "Android or iPhone?",
        "text_ar": "أندرويد ولا آيفون؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q383",
        "text_en": "Toilet paper: over or under?",
        "text_ar": "بكرة المناديل: تتحط وشها لبرة ولا لجوة؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q384",
        "text_en": "Sleeping with socks on: cozy or wrong?",
        "text_ar": "النوم بالشراب: دفا ولا خنقة؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q385",
        "text_en": "Working from home or working from the office?",
        "text_ar": "الشغل من البيت (WFH) ولا الشغل من المكتب؟",
        "category": [
            "Coworkers",
            "Friends"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q386",
        "text_en": "Sweet popcorn or salty popcorn?",
        "text_ar": "فشار مسكر (كراميل) ولا فشار حادق؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q387",
        "text_en": "Tea with milk or black tea?",
        "text_ar": "شاي بلبن ولا شاي عادي (سادة)؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q388",
        "text_en": "Eating Mango: Sliced cubes or messy biting?",
        "text_ar": "أكل المانجة: تتقطع مكعبات بالشياكة ولا \"تتلغوص\" فيها؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    },
    {
        "id": "q389",
        "text_en": "Cats or Dogs?",
        "text_ar": "بتحب القطط ولا الكلاب أكتر؟",
        "category": [
            "Friends",
            "Coworkers",
            "Family"
        ],
        "genre": "Funny",
        "intensity": "Light"
    }
];


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
    }
];

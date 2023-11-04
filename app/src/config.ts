import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/party.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: "<b>Arab Tilini</b> to'g'ri, samarali va davomiy o'rganing",
          description:
            "🎉 Tabriklayman siz ustoz Salohiddin Qurbonov tomonidan o’tkaziladigan bepul darsga muvaffaqiyatli ro’yxatdan o’tdingiz!",
          button: 'Keyingisi',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/teacher.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: "Keling undan avval o’zimni tanishtirsam 💁🏻‍♂️  ",
          description:
            "Men Salohiddin Qurbonov Arab tilidan C1 natijaga ega Xalqaro toifadagi 11 yillik ustozman ",
          button: 'Keyingisi',
        },

        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hello.tgs'),
            size: 250,
          },
          shape: 'rounded',
          pagination: 'count',
          title: "Ilmiy faoliyatim va karyeram",
          description:
            "Hozirgi kunda doktarantura tadqiqotchisi hamda 'Sharqshunoslik universiteti' Arab tili filalogiya talabalariga grammatikadan saboq berib kelaman",
          button: 'Keyingisi',
        },

        // sticker
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/book.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Tarjimonlik faoliyatim',
          description:
            '20 ga yaqin kitoblar tarjimoni hamda tarjima muharriri hisoblanaman',
          button: 'Keyingisi',
        },


        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Keling endi siz blan tanishamiz',
          description: 'Siz necha yoshdasiz?',
          form: [
            {
              id: '14-18',
              placeholder: '14-18',
              type: 'checkbox',
            },
            {
              id: '18-24',
              placeholder: '18-24',
              type: 'checkbox',
            },
            {
              id: '24-30',
              placeholder: '24-30',
              type: 'checkbox',
            },
            {
              id: '30-yuqori',
              placeholder: '30-yuqori',
              type: 'checkbox',
            },
          ],
          button: 'Keyingisi',
        },

        // form 2
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Keling endi siz blan tanishamiz',
          description: 'Arab tiliga qiziqasizmi?',
          form: [
            {
              id: 'juda',
              placeholder: 'Juda ham qiziqaman',
              type: 'checkbox',
            },
            {
              id: 'niyat',
              placeholder: "O'rganish niyatidaman",
              type: 'checkbox',
            },
            {
              id: 'keyinroq',
              placeholder: "Keyinroq o'rganaman",
              type: 'checkbox',
            },
          ],
          button: 'Keyingisi',
        },

        // form 3
        {
          extends: 'form', 
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Keling endi siz blan tanishamiz',
          description: "Sizning arab tilini bilish darajangiz qanday? 🤔",
          form: [
            {
              id: '1',
              placeholder: "Endi o'rganishni boshlayman",
              type: 'checkbox',
            },
            {
              id: '2',
              placeholder: "Faqat arab harflarini bilaman",
              type: 'checkbox',
            },
            {
              id: '3',
              placeholder: 'A1 darajadaman',
              type: 'checkbox',
            },
            {
              id: '4',
              placeholder: "A2 darajadaman",
              type: 'checkbox',
            },
          ],
          button: 'Keyingisi',
        },

        // form 4
        {
          extends: 'form', 
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Keling endi siz blan tanishamiz',
          description: "Ayni damda qayerda yashaysiz? Izohlarda yozib qoldiring 👇",
          form: [
            {
              id: 'location',
              placeholder: "Masalan, Namangan",
              type: 'text',
            },
          ],
          button: 'Keyingisi',
        },
        
        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'Bizning onlain kursimizda ishtiroq etmoqchimisiz?',
          description: "Unda hoziroq 100 000 so'm dastlabki to'lovni amalga ohiring va o'z joyingizni band qiling. Shoshiling, joylar soni cheklangan",
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Qolgan joylar soni: <b>67</b>',
            },
          ],
          button: {
            content: "To'lov qilish",
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/hello.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Bizning tariflar',
      list: [
        "Qulay narxlar",
        "<b>Click</b> yoki <b>Payme</b> orqali to'lash imkoni",
        "O'zingizga mos tariflarni tanlsh imkoni",
      ],
      products: [
        {
          id: 'sdandart',
          title: "Standart",
          description: "200 000 so'm",
          discount: '',
          price: 200000,
        },
        {
          id: 'basic',
          title: 'Basic',
          description: "300 000 so'm",
          discount: 'Chegirma 20%',
          price: 300000,
        },
        {
          id: 'premium',
          title: 'Premium',
          description: "500 000 so'm",
          discount: 'Eng yaxshi tanlov',
          price: 500000,
        },
      ],
      mainButtonText: "Sotib olish: {price} so'm",
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});



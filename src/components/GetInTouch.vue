<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="info white--text"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/contact.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 />

        <base-heading class="mb-5">
          Me contactez
        </base-heading>
        <v-form
          @submit.prevent="sendEmail"
        >
          <v-sheet
            color="transparent"
            max-width="600"
          >
            <v-text-field

              color="info"
              label="Nom"
              :rules="nameRules"
              solo
              flat
              required
            />

            <v-text-field

              color="info"
              label="Email"
              :rules="emailRules"
              solo
              flat
              required
            />

            <v-text-field

              color="info"
              label="Sujet"
              :rules="sujetRules"
              solo
              flat
              required
            />

            <v-textarea

              color="info"
              label="Message"
              solo
              flat
              required
            />

            <base-btn
              type="submit"
            >
              Send
            </base-btn>
          </v-sheet>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import emailjs from 'emailjs-com';
  export default {
    name: 'GetInTouch',
    data: () => ({
      contact: {
        Nom: '',
        Email: '',
        Sujet: '',
        Message: '',
      },
      nameRules: [
        v => !!v || 'Votre nom est obligatoire',
        v => v.length <= 24 || 'Votre nom doit comporter 24 caractères maximum',
      ],
      emailRules: [
        v => !!v || 'Email est requis ',
        v => /.+@.+/.test(v) || ' Email invalide ',
      ],
      sujetRules: [
        v => !!v || 'Un sujet est obligatoire',
        v => v.length <= 25 || '25 caractères maximum',
      ],
    }),
    methods: {
      sendEmail: (e) => {
        emailjs.sendForm('gmail', 'portfolio', e.target, 'user_NuAp3ZCHoMHRIGJWEO56S')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
          }, (error) => {
            console.log('FAILED...', error);
          });
      },
    },
  }
</script>

<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text">
          A propos de moi
        </base-heading>

        <base-text class="mb-5">
          Après 15 ans de cuisine je me suis décidé à faire ma reconversion professionnel pour faire de ma passion mon métier, "le développement web".
          Pour y parvenir j'ai entamé une formation intense à l'école O'clock. Formation sur 5 mois pour apprendre pendant 3 mois les bases(html,css,js,php,mysql,git ....), suivi de 1 mois de spécialisation ou j'ai choisis le framework symfony et suivi de 1 mois de projet en situation professionnel à plusieurs.
          Après ce mois de projet j'ai entamé la course au diplôme, j'ai donc obtenu mon titre de développeur web et web mobile ainsi que ma certification opquast de niveau confirmé.
          Et aujourd'hui me voila devenu freelance.
        </base-text>

        <base-subheading class="info--text">
          Mes compétences
        </base-subheading>

        <base-text class="mb-5">
          voici un petit aperçu de mes compétences qui sont en constante évolution.
        </base-text>

        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/aboutme.png')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'bootstrap',
          value: 85,
        },
        {
          name: 'mysql',
          value: 75,
        },
        {
          name: 'tailwind css',
          value: 70,
        },
        {
          name: 'html, css',
          value: 80,
        },
        {
          name: 'php',
          value: 75,
        },
        {
          name: 'js',
          value: 60,
        },
        {
          name: 'symfony',
          value: 75,
        },
        {
          name: 'react',
          value: 50,
        },
        {
          name: 'vuejs',
          value: 50,
        },
        {
          name: 'docker',
          value: 30,
        },
        {
          name: 'aws',
          value: 50,
        },
        {
          name: 'python',
          value: 40,
        },
      ],
    }),
  }
</script>

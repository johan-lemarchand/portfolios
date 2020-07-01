<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/welcome.png')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading>Bienvenue!</base-heading>
            <base-text>
              Je suis Lemarchand Johan Développeur web fullstack
              Je suis disponible pour tous vos projets de la création du cahier des charges en fonction de
              vos demandes et jusqu'à la livraison du projet voir même de la maintenance, alors n'hésitez
              pas à me contacter et pour les recruteurs je suis également disponible pour des missions de
              courte ou longue durée.
            </base-text>
            <base-btn
              class="mt-4"
              @click="$vuetify.goTo('#get-in-touch', options)"
            >
              Me contactez

            </base-btn>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>

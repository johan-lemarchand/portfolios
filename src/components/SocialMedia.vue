<template>
  <div>
    <v-btn

      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      color="info"
      :small="!large"
    >
      <a :href="item.link">
        <v-icon
          dark
          v-text="item.icon"
        />
      </a>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/LemarchandJohan',
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/johan.lemarchand/',
        },
        {
          name: 'Github',
          icon: 'mdi-git',
          link: 'https://github.com/johan-lemarchand',
        },
      ],
    }),
  }
</script>

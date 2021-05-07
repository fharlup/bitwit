<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fab fa-earlybirds"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      side="left"
      :width="283"
      bordered
      show-if-above
    >
      <q-icon
        class="q-pa-md"
        name="fab fa-earlybirds"
        size="lg"
        color="primary"
      />

      <q-list>
        <q-item
          to="/"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">selasar</q-item-section>
        </q-item>
        <q-item
          to="/about"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">tentang bitwit</q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>


      <q-list
        separator
        padding
      >
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">kesehatan mental</q-item-label>
            <q-item-label class="text-weight-bold">kamu nga sendiri ko</q-item-label>
            <q-item-label caption>jika kamu ngerasa sedih terus atau kamu kepikiran mau udahin idup kamu bisa <a href="https://www.sprc.org/">klik ini</a>.</q-item-label>
          </q-item-section>

          <q-item-section side top>

          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">kesehatan mental</q-item-label>
            <q-item-label class="text-weight-bold">jika kamu butuh temen bicara</q-item-label>
            <q-item-label caption>kamu jika merasa ga baik baik aja bisa kamu bisa cari bantuan profesinoal untuk ngobrok <a href="https://biropsikologi.com/layanan-psikologi/?gclid=Cj0KCQjwp86EBhD7ARIsAFkgakgd5xsD8_OIRVJDImV9nIC2HteAbUlFGxiR_HiG9k7g0NhG0B-abKkaAo2AEALw_wcB">disini</a>.</q-item-label>
          </q-item-section>

          <q-item-section side top>

          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">tentang aplikasi in</q-item-label>
            <q-item-label class="text-weight-bold">bantu situs ini lebih baik!</q-item-label>
            <q-item-label caption>kalian bisa bantu buat situs ini dengan bantu git commit<a href="https://github.com/fharlup/bitwit">disini</a>atau bisa kasih saran via dm twitter <a href="https://twitter.com/fharlup">disini</a>.</q-item-label>
          </q-item-section>

          <q-item-section side top>

          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
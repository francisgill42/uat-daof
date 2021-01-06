<template>
<v-app>
<v-app-bar app class="white">
<v-toolbar-title class="headline text-uppercase">
<v-img class="mx-10" src="@/assets/header-logo-img.png" />
</v-toolbar-title>
<v-spacer></v-spacer>
<v-btn
class="mr-10 primary"
text
href="https://orangeroomdigital.com/salesapp/public/">
<span>Dashboard (DEV)</span>
</v-btn>
</v-app-bar>

<v-main class="mt-5">
<Form/>
</v-main>
</v-app>
</template>

<script>
import Form from './components/Form';

export default {
    name: 'App',
    components: { Form },
    data: () => ({
    title:'Digital Account Opening Form',
    }),
};
</script>

<style>
.v-image__image{
    height: 94%;
}
</style>

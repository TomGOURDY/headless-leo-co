<template>
  <div>
    <Navbar contentId="#content"/>
    <div id="content">
      <UiTable :data="contactData"
               :tbody="contactColumns"
               :thead="contactHeader"
               class="contact-table"/>
      <AssoFooter/>
    </div>
  </div>
</template>

<style scoped>
.contact-table {
  width : 100%;
}
</style>

<script>
const prettyRole = {
  membre                   : 'Membre',
  president                : 'Président',
  vice_president           : 'Vice Président',
  tresorier                : 'Trésorier',
  secretaire               : 'Secrétaire',
  responsable_communication: 'Responsable Communication',
  responsable_partenariats : 'Responsable Partenariats',
  responsable_evenements   : 'Responsable Evenements',
}

function role_mapper (member) {
  return {
    name: `${member.first_name} ${member.last_name}`,
    role: prettyRole[member.role] || prettyRole.membre,
    email: member.email,
  }
}

export default {
  async asyncData (ctx) {
    return {
      contactData: (await ctx.$strapi.find('members')).map(role_mapper),
      contactColumns: ['name', 'role', 'email'],
      contactHeader : ['Nom', 'Rôle', 'E-Mail'],
    }
  },
}
</script>

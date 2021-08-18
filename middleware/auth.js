export default function (context) {
  if (!context.store.getters.isAuthenticate) context.redirect('/login')
}

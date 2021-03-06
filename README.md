## NextAuth.js

NextAuth.js is a complete open source authentication solution for [Next.js](http://nextjs.org/) applications.

This is an example application which shows how `next-auth` is applied to a basic Next.js app. It is also used in many of our CI workflows and other places where a concrete usage example is necessary.

It can be found at [`next-auth-example.vercel.app`](https://next-auth-example.vercel.app/)

## next-i18next: "The easiest way to translate your NextJs apps"

[next-i18next](https://www.npmjs.com/package/next-i18next)

Although NextJs provides internationalised routing directly, it does not handle any management of translation content, or the actual translation functionality itself. All NextJs does is keep your locales and URLs in sync.

To complement this, next-i18next provides the remaining functionality – management of translation content, and components/hooks to translate your React components – while fully supporting SSG/SSR, multiple namespaces, codesplitting, etc.

While next-i18next uses i18next and react-i18next under the hood, users of next-i18next simply need to include their translation content as JSON files and don't have to worry about much else.

Demo site: [https://next-i18next.com/](https://next-i18next.com/)

## This project

- Start with `npx create-react-app -e https://github.com/nextauthjs/next-auth-example`

  (`-e`is shorthand for `--example`)

- Add `next-i18next`

Quick MVP to inspect `serverSideTranslations`.

This page does uses await, and translations work:  
[http://local.awesound.com:3000/de/with-await](http://local.awesound.com:3000/de/with-await)

```javascript
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      mood,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

export default TestPage
```

This page does NOT use await, and translations fail:  
[http://local.awesound.com:3000/de/no-await](http://local.awesound.com:3000/de/no-await)

```javascript
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      mood,
      ...serverSideTranslations(locale, ["common"]),
    },
  }
}

export default TestPage
```

I added .env to allow login with Github, but login isn't necessary for the demo. The point is we see `await` is required for translation to work on pages with `getServerSideProps`, but either way, `useSession()` still works: `loading` is not stuck on `true`.

## User appears logged out

After signing in, I can click any of the following links:  
[https://www.dropbox.com/s/1sc7khsp9yz9sar/signed%20in%20routes.png?dl=0](https://www.dropbox.com/s/1sc7khsp9yz9sar/signed%20in%20routes.png?dl=0)  
<img src="https://www.dropbox.com/s/1sc7khsp9yz9sar/signed%20in%20routes.png?dl=1" width="300">

However, if I click one of the "translation" links (with `serverSideTranslations`), the user appears logged out.  
[https://www.dropbox.com/s/pn99b2818eqs6i4/translation%20routes.png?dl=0](https://www.dropbox.com/s/pn99b2818eqs6i4/translation%20routes.png?dl=0)  
<img src="https://www.dropbox.com/s/pn99b2818eqs6i4/translation%20routes.png?dl=1" width="300">  
Note: I'm not actually logged out; if I simply refresh the page I appear logged in again (no need to click "Sign in").

Gif:  
<img src="https://www.dropbox.com/s/4oe8dskwb5s9ypu/translations-log-out.gif?dl=1" width="300">  
[https://www.dropbox.com/s/4oe8dskwb5s9ypu/translations-log-out.gif?dl=0](https://www.dropbox.com/s/4oe8dskwb5s9ypu/translations-log-out.gif?dl=0)

Video:
[https://www.dropbox.com/s/qdhi7580zuzqe7r/translations-routes-appear-logged-out.mov?dl=0](https://www.dropbox.com/s/qdhi7580zuzqe7r/translations-routes-appear-logged-out.mov?dl=0)

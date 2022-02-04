import { useTranslation } from "next-i18next"
import { signIn, signOut, useSession } from "next-auth/react"

const TranslationTestContent = ({ mood, usesAwait }) => {
  const { t } = useTranslation("common")
  const { data: session, status } = useSession()

  return (
    <div>
      The word for "world" is {t("world")}. The user is:{" "}
      {session?.user ? (
        <strong>{session.user.email ?? session.user.name}</strong>
      ) : (
        "null or undefined"
      )}
    </div>
  )
}

export default TranslationTestContent

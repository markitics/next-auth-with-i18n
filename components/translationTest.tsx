import { useTranslation } from "next-i18next"
import { signIn, signOut, useSession } from "next-auth/react"

const TranslationTestContent = ({ mood, usesAwait }) => {
  const { t } = useTranslation("common")
  const { data: session, status } = useSession()

  return (
    <>
      <p style={{ marginBottom: "20px" }}>
        The word for "world" is <strong>{t("world")}</strong>.
      </p>
      <p>
        The user is:{" "}
        {session?.user ? (
          <strong>{session.user.email ?? session.user.name}</strong>
        ) : (
          "null or undefined"
        )}
      </p>
    </>
  )
}

export default TranslationTestContent

import * as React from "react"
import { Link } from "gatsby"
import { MantineProvider, Button, Container, Text, Title } from "@mantine/core"

const NotFoundPage = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
        headings: { fontFamily: "Roboto, sans-serif" },
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Title order={1} style={{ marginBottom: "1rem", fontSize: "2.5rem" }}>
          Oops! Page Not Found
        </Title>
        <Text size="lg" style={{ marginBottom: "1rem" }}>
          I'm pretty sure I didn't code the page you are looking for. But don't worry,
          you can always head back to the homepage.
        </Text>
        <Button
          component={Link}
          to="/"
          size="lg"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          style={{ marginTop: "1rem" }}
        >
          Go Home
        </Button>
      </Container>
    </MantineProvider>
  )
}

export default NotFoundPage

export const Head = () => <title>404 - Page Not Found</title>

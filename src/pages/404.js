import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout title="404 Page Not Found" isArticle={false} isHero={false} simpleNav={true}>
      <div className="container-fluid not-found-container">
        <div className="row">
          <div className="col-12">
            <div className="not-found-content">
              <h1 className="text-center">Page Not Found</h1>
              <p className="text-center">
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                  😔
                </span>{" "}
                we couldn’t find what you were looking for.
                <br />
                <Link className="btn mt-5" to="/">Go home</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

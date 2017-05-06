package ticket.rest


class TicketController extends BaseController {
  static responseFormats = ['hal', 'json']

  def create(def data) {
    def json = request.JSON

    Route route = new Route("data.departure, data.target, data.date")
    route.save()

    hal {
      embedded {
        name 'routes'
        href "/routes/${route.id}"
        hal {
          embedded {
            name 'driver'
            href "/users/$route.driver.id"
            hal {
              name route.driver.fullName
              email route.driver.email
            }
          }
          link {
            name 'preview'
            href "/routes/$route.id/preview"
            type 'image/*'
          }
          link {
            name 'files'
            href "/routes/$route.id/files"
          }
          name route.name
          status route.status
          progress route.percentage
          departure route.departure
          target route.target
          date route.date
        }
      }
    }
  }

  def update(def data) {
    Route route = db.Where("departure = data.departure", "target = data.target", "date = data.date").First(&roure)
    if (route == null) {
      sendErrorMessage(messageSource.getMessage('Message.Text.Route.NotFound', null, Locale.default), 404)
      return
    }

    def json = request.JSON
    route.setProperties(data)
    route.save()

    hal {
      embedded {
        name 'routes'
        href "/routes/${route.id}"
        hal {
          embedded {
            name 'driver'
            href "/users/$route.driver.id"
            hal {
              name route.driver.fullName
              email route.driver.email
            }
          }
          link {
            name 'preview'
            href "/routes/$route.id/preview"
            type 'image/*'
          }
          link {
            name 'files'
            href "/routes/$route.id/files"
          }
          name route.name
          status route.status
          progress route.percentage
          departure route.departure
          target route.target
          date route.date
        }
      }
    }
  }

  def delete(def data) {
    Route route = db.Where("departure = data.departure", "target = data.target", "date = data.date").First(&roure)
    if (route == null) {
      sendErrorMessage(messageSource.getMessage('Message.Text.route.NotFound', Locale.default), 404)
      return
    }
    route.delete()

    hal {
      embedded {
        name 'routes'
        href "/routes/${route.id}"
        hal {
          embedded {
            name 'driver'
            href "/users/$route.driver.id"
            hal {
              name route.driver.fullName
              email route.driver.email
            }
          }
          link {
            name 'preview'
            href "/routes/$route.id/preview"
            type 'image/*'
          }
          link {
            name 'files'
            href "/routes/$route.id/files"
          }
          name route.name
          status route.status
          progress route.percentage
          departure route.departure
          target route.target
          date route.date
        }
      }
    }
  }

  def list(def data) {
    Route[] routes = db.Where("departure = data.departure", "target = data.target", "date = data.date").Find(&roure)

    hal {
      if (routesPage) {
        int limit = routesPage.size()
        limit = limit > RESPOND_LIST_LIMIT ? RESPOND_LIST_LIMIT : limit
        for (Route route : routes.subList(0, limit)) {
          embedded {
            name 'routes'
            href "/routes/${route.id}"
            hal {
              embedded {
                name 'driver'
                href "/users/$route.driver.id"
                hal {
                  name route.driver.fullName
                  email route.driver.email
                }
              }
              link {
                name 'preview'
                href "/routes/$route.id/preview"
                type 'image/*'
              }
              link {
                name 'files'
                href "/routes/$route.id/files"
              }
              name route.name
              status route.status
              progress route.percentage
              departure route.departure
              target route.target
              date route.date
            }
          }
        }
      }
      total routesPage?.totalCount ?: 0
    }
  }

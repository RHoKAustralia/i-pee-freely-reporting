# i.pee.freely.reporting
A User Interface for capturing end user feedback and requests for new places.

Requirements
===

- i-pee-freely-api (and the MySQL database).
- needs to be deployed into a server.

What it does
---

- Assembles a URL that uses the Twitter prepopulate tool and sends this address
to a QR code generator.
- Connects to the API and returns user feedback and requests for new locations
from the MySQL database (which in the future will be added from other frontend
components).

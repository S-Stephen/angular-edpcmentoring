# Test plan for the Campl-Ngx library

## Messages (/tests/messages : messages.e2e-spec.ts)

The campl-ngx provides a messageBufferService by injecting this service into our component we can publish messages onto the page via the `<campl-ngx-messages>` component

* Test that we can inject the service and publish a message

## Selects (reg-select) : selects.e2e-spec.ts

Check the **mat-option** elements are selectable in some manner.  The elements do not exist within the **mat-select** but another element (**div.cdk-overlay-container**)
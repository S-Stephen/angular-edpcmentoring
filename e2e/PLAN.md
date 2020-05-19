# Test plan for the Campl-Ngx library

## Messages (/tests/messages : messages.e2e-spec.ts)

The campl-ngx provides a messageBufferService by injecting this service into our component we can publish messages onto the page via the `<campl-ngx-messages>` component

* Test that we can inject the service and publish a message
{
    "parent": "projects/cd-play/locations/us-west1",
    "function": {
        "name": "<+stage.variables.functionName>",
        "buildConfig": {
            "runtime": "nodejs18",
            "entryPoint": "helloGET",
            "source": {
                "storageSource": {
                    "bucket": "",
                    "object": ""
                }
            }
        },
        "serviceConfig": {
            "service": "",
            "timeoutSeconds": 60,
            "maxInstanceCount": 100,
            "ingressSettings": "ALLOW_ALL",
            "availableMemory": "256M",
            "maxInstanceRequestConcurrency": 1,
            "availableCpu": "0.1666",
            "allTrafficOnLatestRevision": true
        },
        "environment": "GEN_2"
    },
    "function_id": "<+stage.variables.functionName>"
}

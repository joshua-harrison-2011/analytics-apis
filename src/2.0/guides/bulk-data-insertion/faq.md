---
title: Bulk data insertion FAQ
description: Frequently asked questions for the Bulk data insertion API.
---

# Bulk data insertion FAQ

Get answers to common questions asked when using the Bulk data insertion API.

## What compression can I use?

All batch files must be compressed using GZIP compression.

## How big can my files be?

Compressed files can be up to 100 MB.  Uncompressed file size is limited to 1 GB.

## What should I name my batch file?

The Bulk Data Insertion API does not place any restrictions on file names. When submitted via an API call, a file identifier is returned that can be used to track the file. The name of the uploaded file is preserved, however, in the system so that customers have a "friendly" reference point when viewing information about files.

## What is the difference between the BDIA and the Data Insertion API available in the 1.4 API?

The [Data Insertion API](/src/1.4/guides/data-insertion/index.md) and Bulk Data Insertion API are both methods to submit server-side collection data to Adobe Analytics. Data Insertion API calls are made one event at a time. Bulk Data Insertion API accepts CSV formatted files containing event data, one event per row. Adobe recommends using the Bulk Data Insertion API in most cases.

## What are the limitations of using the BDIA?

* BDIA can only send data to report suites that are configured as "Timestamp enabled" or "Timestamp optional."
* Historical data for a visitor grouping must be ingested before any current data can be processed, unless Timestamp Optional report suites are being used and visitor continuity is not possible or not desirable.
* The amount of server calls that can be processed in a given time are dependent on throttle limits and allocated resources for that customer. Spikes in server calls must be reported to Client Care in the same ways that normal data collection dictates.
* Do not send more than 1 file per 20 seconds per visitor group. Files can be as large as 100 MB compressed (gzip)
* Utilize enough visitor groups so that you do not send more than 2000 rows/second per visitor group.

## How frequently can I upload files?

Before using BDIA, a customer must provide an expected volume of ingestion. From the expected volume, a per-second throttle limit is configured within our system. This configuration throttles the number per-second ingestion server calls. If the system detects the throttle limit may be exceeded, it will process uploaded files more slowly to stay within the limit.

These limits help ensure a timely processing and availability of data for Adobe Analytics reporting. They also help protect the system from becoming overwhelmed before proper capacity has been provisioned for a sharp increase in call volume.

## What are the response codes that I can get, and what do they mean?

The following response codes are returned by the API:

| HTTP_Response | Description |
|--|--|
| `100 - Continue` | This is used when uploading a file. This is sent to a client after authentication is checked and the HTTP request headers are validated. This signals to the client that they can begin to upload the large file. For example, if a client waits for this response code before sending a file, it can avoid uploading an entire file before learning that a visitor group ID was not specified. |
| `400 - Bad Request` | Required headers are missing or the uploaded file is missing critical information or is malformed. |
| `401 - Unauthorized` | The API key or user token used to interact with the API is not valid. |
| `403 - Forbidden` | Occurs when attempting to perform an action that is not currently allowed. |
| `404 - Not Found` | Occurs when attempting to call an undefined endpoint. |
| `413 - Payload Too Large` | Returned when the file being uploaded is larger than the permitted size. |
| `429 - Too Many Requests` | Occurs when the number of API calls exceeds the system limits. |
| `500 - Internal Error` | Occurs when the API encounters an unexpected internal error that it is unable to recover from. |

## I did not validate a file before uploading it, and the entire upload failed. What are my options?

If the entire file fails, use the [troubleshooting](troubleshooting.md) page to help determine the cause of the issue. You can then make adjustments to the file creation process, and recreate and reupload the file. These actions do not result in any duplicate data, because no data was ingested into Analytics. You can look at the `invalid_rows` and `rows` field in the API response message to determine if all of the rows failed. If `invalid_rows` is equal to `rows`, then no rows were successfully ingested.

## I did not validate a file before uploading it, and some hits were valid while others were not. What are my options?

Your best course of action depends on how many invalid rows exist:

* **Mostly valid rows**: If a file with a large amount of rows is submitted, but a small percentage of those rows fail, it is probably best to not resubmit the file. If you resubmit a file where most rows were successfully ingested during its initial processing, the majority of rows will result in duplicated data in Analytics. Accepting that a small amount of rows were lost is typically better than duplicating a larger amount of data.
* **Mostly invalid rows**: If a file is submitted, and a large percentage of the rows have failed, then it might make sense to repair the rows and resubmit the file. Only take this action if the number of duplicate hits is acceptable and the missed server calls are individually significant. Otherwise, Adobe recommends fixing the file generation process and not trying to resubmit the file.

## How do I remove data that was inadvertently uploaded?

Data uploaded through the Bulk data insertion API is permanent. In some cases, you can use the [Data Repair API](../data-repair/index.md), but Adobe strongly recommends that you validate uploads before ingesting them into Adobe Analytics. Adobe Engineering Services can also assist customers in removing data that was accidentally inserted through a paid service engagement. Contact your Adobe Account Manager for more information.
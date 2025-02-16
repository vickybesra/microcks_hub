{{/*
    Return the chart name.
    */}}
    {{- define "microcks-hub.name" -}}
    {{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
    {{- end -}}
    
    {{/*
    Return the fully qualified name.
    */}}
    {{- define "microcks-hub.fullname" -}}
    {{- if .Values.fullnameOverride -}}
    {{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
    {{- else -}}
    {{- printf "%s-%s" (include "microcks-hub.name" .) .Release.Name | trunc 63 | trimSuffix "-" -}}
    {{- end -}}
    {{- end -}}
    
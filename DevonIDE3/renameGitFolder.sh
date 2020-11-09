#!/bin/sh

echo "Waiting to complete"; while [ ! -d /devonfw/settings/git ] ; do sleep 2s; done; echo "Done"
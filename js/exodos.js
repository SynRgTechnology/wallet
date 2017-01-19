var _keys
//All Coval Keys
me.data.privkey.allRecordsArray(function(items){
    _keys = items.filter(function(item){return item.key.network.name==="coval"})
    var sig = []
    _keys.forEach(function(item){
        console.log(item)
        sig[sig.length] = Message('hello, world').sign(bitcore.PrivateKey(item.key.privatekey));
    })
    console.log(sig)
})


//Export Mnemonic
//IN Password
//OUT serialized mneumonic
//-------- getMyMnemonic("astmd-4236",cb)

0
:
"H2g9UqYmjAvYqGy86WKaWdruHNEYE8JvDNDiZZrsGVFRTOWLA0pzi0i4yESIBTyGhTuSGhmA6dXW+KmyQd1LPwo="
1
:
"H5smjRaJ/UibDmMC1/qu5q6TIFryxha9eRpDbQgM5rLsY9RapKIZX+DxGPuuIPQRYsm+xkDjV0PRgV+BwigGNwk="
2
:
"IIKumBUjFv8bsDh4OxllRZO8aDxSsLkF2yk4ggqUmaQuWV+q/GuVLDVVJ1/2oKMEw8bbnD/p2B6IhVBdWdlMhqM="
3
:
"IPlkpfpMTFds5eZ1Tib8C1T/zhDuoPLhbl+o2Kbpo+ZQSMFjCm5H4T7209cwidj5zc7X3ZLJ8qSA30Ac2qC+SG4="
4
:
"IMIXv3Vh0ivHnhFyozo82bDOgN+PklOxZiU9ad7vimZyPIBzUpxMkFPIpXE6zk1zEUSP/Du0a0AsPszeQc5rfZM="

0
:
"H5Mq3pwinLu1iEnR3t0qpxF5dHEpQPqPybDlljVzwC//BHKp8fq/90F39bCtROqAacsNtB+6iO5sTfwfHsOWcBo="
1
:
"HzS9b+kXC/LsqDEIYNBksEpMv5Pb7aTOoyAcniikS/b+a29VVohTpkQ4MTk+WosCSbYPHe8G5vfGrYtRjg3hJzs="
2
:
"H3A6YX+ftI0Zy6TIc228Y15psiYmrBA2chd5kvTlMYoPJWVF7+5TLFsi35vq1i6W24S1agntFE0Q8xOVPQTM1UE="
3
:
"H8PC+cIh2HfBq2PgctxrCLtTuG+psdm0JB2Mkx+SLfw0TPR46We1qZJ4rDMAjjLK1RnTrv5xstT18uT7FkSlECk="
4
:
"IHZkxSnvPwlk1jqebENFpTCXujF3Mlu9hpfT8ZOkrDtUUKYTWDx1JTf8iMydPhFH++GEiTd0mJbkQ9WtACe/Ev8="